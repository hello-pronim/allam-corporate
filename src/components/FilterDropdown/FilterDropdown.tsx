import React, { useEffect, useRef, useState } from "react";
import Icon from "@components/Icons/Icons";
import styles from "./FilterDropdown.module.scss";

export interface IFilterDropdownProps {
  isOpen: boolean;
  options: any[];
  placeholderLabel?: string;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  setFilterValue: (val: any) => void;
}

const FilterDropdown = ({
  isOpen,
  closeDropdown,
  placeholderLabel,
  options,
  toggleDropdown,
  setFilterValue,
}: IFilterDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const dropdownRef = useRef<HTMLHeadingElement>(null);

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
    if (placeholderLabel === "Type") {
      setFilterValue({
        type: id === 0 ? "All" : options[id],
      });
    }
    closeDropdown();
  };

  return (
    <div className={styles.filterDropdown} ref={dropdownRef}>
      <div className={styles.filterDropdownButton} onClick={toggleDropdown}>
        <span>{placeholderLabel}</span>
        <p>{selectedOption}</p>
        <div className={styles.filterDropdownButtonIcon}>
          <Icon type="chevron-down" />
        </div>
      </div>
      <div
        className={styles.filterDropdownMenu}
        style={{
          visibility: `${isOpen ? "visible" : "hidden"}`,
          opacity: `${isOpen ? "1" : "0"}`,
          transitionDelay: "0.2s",
          transition: "all 0.3s cubic-bezier(1, 0.885, 0.72, 1)",
        }}
      >
        <ul className={styles.filterDropdownMenuItems}>
          {options?.map((el: any, id: number) => (
            <li
              key={id}
              onClick={() => setOption(id)}
              className={`${selectedOption === el && styles.active}`}
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterDropdown;
