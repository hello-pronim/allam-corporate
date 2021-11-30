import React, { useState } from "react";
import { ImageButton } from "@components/Common/Common";
import SortDropdown from "@components/SortDropdown/SortDropdown";
import { sortHomesKeys } from "@libs/constants";
import styles from "./SortByOptions.module.scss";

export interface ISortByOptionsProps {
  resultCount: number;
  showMap?: boolean;
  setShowMap: (value: boolean) => void;
  setSortKey: (value: string) => void;
}

const SortByOptions = ({
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
              options={sortHomesKeys}
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
