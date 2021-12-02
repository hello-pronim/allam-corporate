import React, { useEffect, useRef, useState } from "react";
import { ChoiceModel } from "@models";
import Icon from "@components/Icons/Icons";
import styles from "./SortDropdown.module.scss";

export interface ISortDropdownProps {
  isOpen: boolean;
  options: ChoiceModel[];
  closeDropdown: () => void;
  toggleDropdown: () => void;
  setSortKey: (val: any) => void;
}

const SortDropdown = ({
  isOpen,
  closeDropdown,
  options,
  toggleDropdown,
  setSortKey,
}: ISortDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<ChoiceModel>();
  const dropdownRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setSelectedOption(options[0]);
    setSortKey(options[0]?.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        closeDropdown();
      }
    };
    if (typeof window === `undefined`) return;

    window.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      window.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen, closeDropdown]);

  const setOption = (id: any) => {
    setSelectedOption(options[id]);
    setSortKey(options[id]?.value);
    closeDropdown();
  };

  return (
    <div className={styles.sortDropdown} ref={dropdownRef}>
      <div className={styles.sortDropdownButton} onClick={toggleDropdown}>
        <p>{selectedOption?.label}</p>
        <div className={styles.sortDropdownButtonIcon}>
          <Icon type="chevron-down" />
        </div>
      </div>
      <div
        className={styles.sortDropdownMenu}
        style={{
          visibility: `${isOpen ? "visible" : "hidden"}`,
          opacity: `${isOpen ? "1" : "0"}`,
          transitionDelay: "0.2s",
          transition: "all 0.3s cubic-bezier(1, 0.885, 0.72, 1)",
        }}
      >
        <ul className={styles.sortDropdownMenuItems}>
          {options?.map((el: any, id: number) => (
            <li
              key={id}
              onClick={() => setOption(id)}
              className={`${selectedOption === el && styles.active}`}
            >
              {el?.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortDropdown;
