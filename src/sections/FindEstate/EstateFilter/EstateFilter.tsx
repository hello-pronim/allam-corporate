import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { estateFilterState } from "@states/atoms/estates";
import { ArrowButton, ImageButton } from "@components/Common/Common";
import FilterDropdown from "@components/FilterDropdown/FilterDropdown";
import FilterDropdownMulti from "@components/FilterDropdownMulti/FilterDropdownMulti";
import { estateTypeList } from "@libs/constants";
import styles from "./EstateFilter.module.scss";

export interface IEstateFilterProps {
  toggleFilter: () => void;
  setShowMap: (value: boolean) => void;
  showMap?: boolean;
  suburbList?: string[];
}

const EstateFilter = ({
  showMap = false,
  suburbList = [],
  setShowMap,
  toggleFilter,
}: IEstateFilterProps) => {
  const [estateFilter, setEstateFilters] = useRecoilState(estateFilterState);
  const [openLocationMenu, setOpenLocationMenu] = useState(false);
  const [openTypeMenu, setOpenTypeMenu] = useState(false);

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
              setFilterValue={setEstateFilters}
              filterStateValue={estateFilter}
            />

            <FilterDropdown
              options={estateTypeList}
              isOpen={openTypeMenu}
              placeholderLabel="Type"
              closeDropdown={() => setOpenTypeMenu(false)}
              toggleDropdown={() => setOpenTypeMenu(!openTypeMenu)}
              setFilterValue={setEstateFilters}
              filterStateValue={estateFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateFilter;
