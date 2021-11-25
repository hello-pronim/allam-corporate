import React, { useEffect, useRef, useState } from "react";
import Icon from "@components/Icons/Icons";
import { LocationOptionModel } from "@models";
import styles from "./FilterDropdownMulti.module.scss";

export interface IFilterDropdownMultiProps {
  isOpen: boolean;
  options: any[];
  placeholderLabel?: string;
  closeDropdown: () => void;
  toggleDropdown: () => void;
  setFilterValue: (val: any) => void;
  filterStateValue: any;
}

const FilterDropdownMulti = ({
  isOpen,
  closeDropdown,
  placeholderLabel,
  options,
  toggleDropdown,
  setFilterValue,
  filterStateValue,
}: IFilterDropdownMultiProps) => {
  const ALL_SUBURBS_LABEL = "All Suburbs";
  const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
  const [selectedOptions, setSelectedOptions] = useState<LocationOptionModel[]>(
    []
  );
  const dropdownRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setSelectedOptions(
      options.map((option) => {
        return {
          label: option,
          selected: true,
        };
      })
    );
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

  useEffect(() => {
    let newArray = selectedOptions.filter((option) => option.selected === true);
    const isLengthSame = newArray.length === selectedOptions.length;
    setIsAllSelected(isLengthSame);

    setFilterValue({
      ...filterStateValue,
      locations: isLengthSame ? ["All"] : newArray.map((el) => el.label),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  const setOption = (optionLabel: any) => {
    const newOptions = selectedOptions.map((option) =>
      optionLabel == option.label
        ? {
            label: option.label,
            selected: !option.selected,
          }
        : option
    );

    setSelectedOptions(newOptions);
  };

  const selectAll = () => {
    const allSelected = !isAllSelected;
    setFilterValue({
      ...filterStateValue,
      locations: allSelected ? ["All"] : [],
    });

    const newOptions = selectedOptions.map((option) => {
      return { selected: allSelected, label: option.label };
    });
    setSelectedOptions(newOptions);
  };

  return (
    <div className={styles.filterDropdown} ref={dropdownRef}>
      <div className={styles.filterDropdownButton} onClick={toggleDropdown}>
        <span>{placeholderLabel}</span>
        <p>
          {`${
            selectedOptions.filter((option) => option.selected === true).length
          } selected`}
        </p>
        <div className={styles.filterDropdownButtonIcon}>
          <Icon type="chevron-down" />
        </div>
      </div>
      <div
        className={styles.filterDropdownMenu}
        style={{
          visibility: `${isOpen ? "visible" : "hidden"}`,
          opacity: `${isOpen ? "1" : "0"}`,
          transition: "all 0.3s cubic-bezier(1, 0.885, 0.72, 1)",
        }}
      >
        <ul className={styles.filterDropdownMenuItems}>
          <li onClick={selectAll}>
            {ALL_SUBURBS_LABEL}
            <div
              className={styles.filterDropdownMenuItemCheck}
              style={{
                visibility: `${isAllSelected ? "visible" : "hidden"}`,
                opacity: `${isAllSelected ? "1" : "0"}`,
                transition: "all 0.2s cubic-bezier(1, 0.885, 0.72, 1)",
              }}
            >
              <Icon type="check" />
            </div>
          </li>

          {selectedOptions?.map((option: any, id: number) => (
            <li key={id} onClick={() => setOption(option.label)}>
              {option.label}
              <div
                className={styles.filterDropdownMenuItemCheck}
                style={{
                  visibility: `${
                    option.selected === true ? "visible" : "hidden"
                  }`,
                  opacity: `${option.selected === true ? "1" : "0"}`,
                  transition: "all 0.2s cubic-bezier(1, 0.885, 0.72, 1)",
                }}
              >
                <Icon type="check" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterDropdownMulti;
