import { ChoiceModel } from "@models";
import React, { useEffect, useState } from "react";
import styles from "./FilterByChoiceGroup.module.scss";

export interface IFilterByChoiceGroupProps {
  label?: string;
  name: string;
  options: ChoiceModel[];
  isMultiChoice?: boolean;
  setFilterValue: (val: any) => void;
  filterStateValue: any;
  resetEstateFilter: () => void;
}

const FilterByChoiceGroup = ({
  label,
  name,
  options,
  isMultiChoice = false,
  setFilterValue,
  filterStateValue,
  resetEstateFilter,
}: IFilterByChoiceGroupProps) => {
  const ALL_SUBURBS_LABEL = "All Suburbs";
  const [isAllSelected, setIsAllSelected] = useState<boolean>(true);
  const [selectedMultiFilter, setSelectedMultiFilter] = useState<any[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<ChoiceModel>();

  const resetFilter = () => {
    if (options.length < 1) return;

    if (isMultiChoice) {
      setSelectedMultiFilter(
        options.map((option) => ({
          ...option,
          isChecked: true,
        }))
      );
    } else {
      setSelectedFilter(options[0]);
    }
  };

  useEffect(() => {
    resetFilter();
    resetEstateFilter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, filterStateValue.reset]);

  useEffect(() => {
    const filteredArray = selectedMultiFilter.filter(
      (option) => option.isChecked === true
    );
    const isLengthSame = selectedMultiFilter.every((item) => item.isChecked);
    setIsAllSelected(isLengthSame);

    if (name === "location") {
      let newVal = isLengthSame ? ["All"] : filteredArray.map((el) => el.label);

      setFilterValue({
        ...filterStateValue,
        locations: newVal,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMultiFilter]);

  useEffect(() => {
    if (name === "type") {
      setFilterValue({
        ...filterStateValue,
        type: selectedFilter?.value ?? "All",
      });
    } else if (name === "block") {
      setFilterValue({
        ...filterStateValue,
        blockSize: selectedFilter?.value ?? "All",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilter]);

  const handleChange = (e: any, option: any) => {
    let elValue = e.target.value;
    let checked = e.target.checked;
    if (isMultiChoice) {
      if (elValue === "All") {
        setIsAllSelected(checked);
        setSelectedMultiFilter(
          selectedMultiFilter.map((item) => ({ ...item, isChecked: checked }))
        );
      } else {
        let newArray = selectedMultiFilter.map((item) =>
          item.value === elValue ? { ...item, isChecked: checked } : item
        );
        setSelectedMultiFilter(newArray);
        setIsAllSelected(newArray.every((item) => item.isChecked));
      }
    } else {
      checked && setSelectedFilter(option);
    }
  };

  return (
    <div className={styles.filterByChoiceGroup}>
      <h5>{label}</h5>

      <div className={styles.filterByChoiceGroupOptions}>
        <form className={styles.filterByChoiceGroupOptionsList}>
          {isMultiChoice && (
            <div>
              <label>
                <input
                  type="checkbox"
                  value={"All"}
                  name={name}
                  checked={isAllSelected}
                  onChange={(e) => handleChange(e, { value: "All" })}
                />
                <div></div>
                <span>{ALL_SUBURBS_LABEL}</span>
              </label>
            </div>
          )}
          {options?.map((option: ChoiceModel, id: number) => (
            <div key={id}>
              <label>
                <input
                  type={`${isMultiChoice ? "checkbox" : "radio"}`}
                  value={option?.value}
                  name={name}
                  checked={
                    isMultiChoice
                      ? selectedMultiFilter.find(
                          (el) => option?.value === el.value
                        )?.isChecked ?? false
                      : option.value === selectedFilter?.value
                  }
                  onChange={(e) => handleChange(e, option)}
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
