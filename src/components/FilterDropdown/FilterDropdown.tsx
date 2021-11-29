import React, { useEffect, useRef, useState } from "react";
import { ChoiceModel } from "@models";
import Icon from "@components/Icons/Icons";
import styles from "./FilterDropdown.module.scss";

export interface IFilterDropdownProps {
  isOpen: boolean;
  options: ChoiceModel[];
  placeholderLabel?: string;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  setFilterValue: (val: any) => void;
  filterStateValue: any;
}

const FilterDropdown = ({
  isOpen,
  closeDropdown,
  placeholderLabel,
  options,
  toggleDropdown,
  setFilterValue,
  filterStateValue,
}: IFilterDropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<ChoiceModel>();
  const dropdownRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setSelectedOption(options[0]);
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
    if (placeholderLabel === "Type") {
      setFilterValue({
        ...filterStateValue,
        type: options[id]?.value ?? "All",
      });
    } else if (placeholderLabel === "Block Size") {
      setFilterValue({
        ...filterStateValue,
        blockSize: options[id]?.value ?? "All",
      });
    } else if (placeholderLabel === "Storeys") {
      setFilterValue({
        ...filterStateValue,
        storeys: options[id]?.value ?? "All",
      });
    } else if (placeholderLabel === "Beds") {
      setFilterValue({
        ...filterStateValue,
        beds: options[id]?.value ?? "All",
      });
    } else if (placeholderLabel === "Baths") {
      setFilterValue({
        ...filterStateValue,
        baths: options[id]?.value ?? "All",
      });
    }
    closeDropdown();
  };

  return (
    <div className={styles.filterDropdown} ref={dropdownRef}>
      <div className={styles.filterDropdownButton} onClick={toggleDropdown}>
        <span>{placeholderLabel}</span>
        <p>{selectedOption?.label}</p>
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
              {el?.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterDropdown;
