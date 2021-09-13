import React from "react";
import Icon from "@components/Icons/Icons";
import styles from "./FilterModal.module.scss";
import { Button } from "@components/Common/Common";

export interface IFilterModalProps {
  style: any;
  closeModal: () => void;
  children: React.ReactNode;
}

const FilterModal = ({
  style,
  closeModal,
  children,
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
        <p>Clear</p>
      </div>

      <div className={styles.filterModalList}>{children}</div>

      <div className={styles.filterModalBottom}>
        <Button size="large" color="dark-secondary" rounded>
          Show results (22)
        </Button>
      </div>
    </div>
  );
};

export default FilterModal;
