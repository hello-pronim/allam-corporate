import React from "react";
import Select from "react-select";

export interface ICustomSelectProps {
  options: any[];
  defaultValue: any;
}

const CustomSelect = ({ options, ...props }: ICustomSelectProps) => {
  return (
    <Select
      options={options}
      className="selector"
      classNamePrefix="selector"
      {...props}
    />
  );
};

export default CustomSelect;
