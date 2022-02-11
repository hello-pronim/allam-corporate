import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { inspectionFilterState } from "@states/atoms/inspection";
import { ArrowButton, ImageButton } from "@components/Common/Common";
import FilterDropdownMulti from "@components/FilterDropdownMulti/FilterDropdownMulti";
import styles from "./HomeFilter.module.scss";

export interface IHomeFilterProps {
  toggleFilter: () => void;
  setShowMap: (value: boolean) => void;
  showMap?: boolean;
  suburbList: string[];
}

const HomeFilter = ({
  showMap = false,
  setShowMap,
  toggleFilter,
  suburbList,
}: IHomeFilterProps) => {
  const [openLocationMenu, setOpenLocationMenu] = useState(false);
  const [homeFilter, setHomeFilters] = useRecoilState(inspectionFilterState);

  return (
    <div className={styles.estateFilter}>
      <div className={styles.estateFilterWrapper}>
        <div className={styles.estateFilterMobile}>
          <ImageButton
            onClick={() => setShowMap(!showMap)}
            icon={showMap ? "grid-view" : "map"}
            label={showMap ? "Grid view" : "Map view"}
          />
          <ArrowButton label="Filter" onClick={toggleFilter} />
        </div>

        <div className={styles.estateFilterDesktop}>
          <div className={styles.estateFilterDesktopViewBy}>
            <span>View by</span>
            <ImageButton
              icon="grid-view"
              label="Grid view"
              onClick={() => setShowMap(false)}
              selected={!showMap}
            />
            <ImageButton
              icon="map"
              label="Map view"
              onClick={() => setShowMap(true)}
              selected={showMap}
            />
          </div>

          <div className={styles.estateFilterDesktopSortBy}>
            <span>Filter by</span>
            <FilterDropdownMulti
              options={suburbList}
              isOpen={openLocationMenu}
              placeholderLabel="Location"
              closeDropdown={() => setOpenLocationMenu(false)}
              toggleDropdown={() => setOpenLocationMenu(!openLocationMenu)}
              setFilterValue={setHomeFilters}
              filterStateValue={homeFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFilter;
