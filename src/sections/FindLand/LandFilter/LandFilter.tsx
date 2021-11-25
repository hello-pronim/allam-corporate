import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { landsFilterState } from "@states/atoms/lands";
import { ArrowButton, ImageButton } from "@components/Common/Common";
import FilterDropdown from "@components/FilterDropdown/FilterDropdown";
import FilterDropdownMulti from "@components/FilterDropdownMulti/FilterDropdownMulti";
import { landBlockSizes } from "@libs/constants";
import styles from "./LandFilter.module.scss";

export interface ILandFilterProps {
  toggleFilter: () => void;
  setShowMap: (value: boolean) => void;
  showMap?: boolean;
  suburbList?: string[];
}

const LandFilter = ({
  showMap = false,
  suburbList = [],
  setShowMap,
  toggleFilter,
}: ILandFilterProps) => {
  const [openTypeMenu, setOpenTypeMenu] = useState(false);
  const [openLocationMenu, setOpenLocationMenu] = useState(false);
  const [landFilter, setLandFilters] = useRecoilState(landsFilterState);

  return (
    <div className={styles.landFilter}>
      <div className={styles.landFilterWrapper}>
        <div className={styles.landFilterMobile}>
          <ImageButton
            onClick={() => setShowMap(!showMap)}
            icon={showMap ? "grid-view" : "map"}
            label={showMap ? "Grid view" : "Map view"}
          />
          <ArrowButton label="Filter" onClick={toggleFilter} />
        </div>

        <div className={styles.landFilterDesktop}>
          <div className={styles.landFilterDesktopSortBy}>
            <span>Filter</span>
            <FilterDropdownMulti
              options={suburbList}
              isOpen={openLocationMenu}
              placeholderLabel="Location"
              closeDropdown={() => setOpenLocationMenu(false)}
              toggleDropdown={() => setOpenLocationMenu(!openLocationMenu)}
              setFilterValue={setLandFilters}
              filterStateValue={landFilter}
            />

            <FilterDropdown
              options={landBlockSizes}
              isOpen={openTypeMenu}
              placeholderLabel="Block Size"
              closeDropdown={() => setOpenTypeMenu(false)}
              toggleDropdown={() => setOpenTypeMenu(!openTypeMenu)}
              setFilterValue={setLandFilters}
              filterStateValue={landFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandFilter;
