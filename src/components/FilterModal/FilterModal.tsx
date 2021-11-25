import React from "react";
import Icon from "@components/Icons/Icons";
import styles from "./FilterModal.module.scss";
import { Button } from "@components/Common/Common";
import { filteredEstates } from "@states/atoms/estates";

export interface IFilterModalProps {
  style: any;
  closeModal: () => void;
  resultCount: number;
  setFilterValue: (val: any) => void;
  filterStateValue: any;
  children: React.ReactNode;
}

const FilterModal = ({
  style,
  closeModal,
  resultCount = 0,
  children,
  filterStateValue,
  setFilterValue,
  ...props
}: IFilterModalProps) => {
  return (
    <div className={styles.filterModal} style={style} {...props}>
      <div className={styles.filterModalTop}>
        <div className={styles.filterModalTopIcon}>
          <Icon type="close" onClick={closeModal} />
        </div>
        <p>
          <b>Filter</b>
        </p>
        <p
          onClick={() =>
            setFilterValue({
              ...filterStateValue,
              reset: !filterStateValue.reset,
            })
          }
        >
          Clear
        </p>
      </div>

      <div className={styles.filterModalList}>{children}</div>

      <div className={styles.filterModalBottom}>
        <Button
          size="large"
          color="dark-secondary"
          rounded
          onClick={closeModal}
        >
          Show results ({resultCount})
        </Button>
      </div>
    </div>
  );
};

export default FilterModal;
