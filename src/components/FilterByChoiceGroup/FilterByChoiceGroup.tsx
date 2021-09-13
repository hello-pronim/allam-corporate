import React, { useState } from "react";
import classnames from "classnames/bind";
import styles from "./FilterByChoiceGroup.module.scss";

export interface IFilterByChoiceGroupProps {
  label?: string;
  name: string;
  options?: any[];
  isMultiChoice?: boolean;
}

const cx = classnames.bind(styles);

const FilterByChoiceGroup = ({
  label,
  name,
  options,
  isMultiChoice = false,
}: IFilterByChoiceGroupProps) => {
  const [selectedFilter, setSelectedFilter] = useState([]);

  // const handleFilter = (value) => {};

  return (
    <div className={styles.filterByChoiceGroup}>
      <h5>{label}</h5>

      <div className={styles.filterByChoiceGroupOptions}>
        <form className={styles.filterByChoiceGroupOptionsList}>
          {options?.map((option: any, id: number) => (
            <div key={id}>
              <label>
                <input
                  className="RadioButton__input"
                  // defaultChecked={defaultChecked}
                  type={`${isMultiChoice ? "checkbox" : "radio"}`}
                  value={option.value}
                  name={name}
                />
                <div></div>
                <span>{option.label}</span>
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default FilterByChoiceGroup;
