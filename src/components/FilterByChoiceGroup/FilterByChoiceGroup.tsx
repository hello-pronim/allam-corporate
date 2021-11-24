import React, { useState } from "react";
import styles from "./FilterByChoiceGroup.module.scss";

export interface IFilterByChoiceGroupProps {
  label?: string;
  name: string;
  options?: any[];
  isMultiChoice?: boolean;
}

const FilterByChoiceGroup = ({
  label,
  name,
  options,
  isMultiChoice = false,
}: IFilterByChoiceGroupProps) => {
  const [selectedFilter, setSelectedFilter] = useState([]);

  return (
    <div className={styles.filterByChoiceGroup}>
      <h5>{label}</h5>

      <div className={styles.filterByChoiceGroupOptions}>
        <form className={styles.filterByChoiceGroupOptionsList}>
          {options?.map((option: any, id: number) => (
            <div key={id}>
              <label>
                <input
                  // defaultChecked={defaultChecked}
                  type={`${isMultiChoice ? "checkbox" : "radio"}`}
                  value={option?.value || ""}
                  name={name}
                  // onChange={()}
                />
                <div></div>
                <span>{option?.label || ""}</span>
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default FilterByChoiceGroup;
