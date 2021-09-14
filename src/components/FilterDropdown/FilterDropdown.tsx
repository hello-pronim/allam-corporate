import React, { useEffect, useRef } from "react";
import styles from "./FilterDropdown.module.scss";

export interface IFilterDropdownProps {
  isOpen: boolean;
  options: any[];
  closeDropdown: () => void;
  children: React.ReactNode;
}

const FilterDropdown = ({
  isOpen,
  closeDropdown,
  options,
  children,
}: IFilterDropdownProps) => {
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

  return (
    <div className={styles.filterDropdown} ref={dropdownRef}>
      {children}
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
            <li key={id}>{el.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterDropdown;
