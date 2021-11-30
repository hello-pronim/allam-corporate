import React, { useState } from "react";
import { ImageButton } from "@components/Common/Common";
import SortDropdown from "@components/SortDropdown/SortDropdown";
import styles from "./SortByOptions.module.scss";
import { ChoiceModel } from "@models";

export interface ISortByOptionsProps {
  options: ChoiceModel[];
  resultCount: number;
  showMap?: boolean;
  setShowMap: (value: boolean) => void;
  setSortKey: (value: string) => void;
}

const SortByOptions = ({
  options,
  resultCount = 0,
  showMap,
  setShowMap,
  setSortKey,
}: ISortByOptionsProps) => {
  const [openSortMenu, setOpenSortMenu] = useState(false);

  return (
    <div className={styles.sortByOptions}>
      <div className={styles.sortByOptionsContainer}>
        <div className={styles.sortByOptionsDesktop}>
          <div className={styles.sortByOptionsSelect}>
            <span>
              <strong>Sort by</strong>
            </span>
            <SortDropdown
              isOpen={openSortMenu}
              options={options}
              setSortKey={setSortKey}
              closeDropdown={() => setOpenSortMenu(false)}
              toggleDropdown={() => setOpenSortMenu(!openSortMenu)}
            />
          </div>
        </div>
        <div className={styles.sortByOptionsResult}>
          Results ({resultCount})
        </div>

        <div className={styles.sortByOptionsDesktop}>
          <ImageButton
            onClick={() => setShowMap(!showMap)}
            icon={showMap ? "grid-view" : "map"}
            label={showMap ? "Grid view" : "Map view"}
          />
        </div>
      </div>
    </div>
  );
};

export default SortByOptions;
