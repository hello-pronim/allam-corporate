import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { homesFilterState } from "@states/atoms/homes";
import { ArrowButton, ImageButton } from "@components/Common/Common";
import FilterDropdown from "@components/FilterDropdown/FilterDropdown";
import FilterDropdownMulti from "@components/FilterDropdownMulti/FilterDropdownMulti";
import {
  landBlockSizes,
  storeysList,
  bedsList,
  bathsList,
} from "@libs/constants";
import styles from "./HomeFilter.module.scss";

export interface IHomeFilterProps {
  toggleFilter: () => void;
  setShowMap: (value: boolean) => void;
  showMap?: boolean;
  suburbList?: string[];
}

const HomeFilter = ({
  showMap = false,
  suburbList = [],
  setShowMap,
  toggleFilter,
}: IHomeFilterProps) => {
  const [openStoreyMenu, setOpenStoreyMenu] = useState(false);
  const [openBedMenu, setOpenBedMenu] = useState(false);
  const [openBathMenu, setOpenBathMenu] = useState(false);
  const [openBlockMenu, setOpenBlockMenu] = useState(false);
  const [openLocationMenu, setOpenLocationMenu] = useState(false);
  const [homeFilter, setHomeFilters] = useRecoilState(homesFilterState);

  return (
    <div className={styles.homeFilter}>
      <div className={styles.homeFilterWrapper}>
        <div className={styles.homeFilterMobile}>
          <ImageButton
            onClick={() => setShowMap(!showMap)}
            icon={showMap ? "grid-view" : "map"}
            label={showMap ? "Grid view" : "Map view"}
          />
          <ArrowButton label="Filter" onClick={toggleFilter} />
        </div>

        <div className={styles.homeFilterDesktop}>
          <div className={styles.homeFilterDesktopSortBy}>
            <span>Filter</span>
            <FilterDropdown
              options={storeysList}
              isOpen={openStoreyMenu}
              placeholderLabel="Storeys"
              closeDropdown={() => setOpenStoreyMenu(false)}
              toggleDropdown={() => setOpenStoreyMenu(!openStoreyMenu)}
              setFilterValue={setHomeFilters}
              filterStateValue={homeFilter}
            />
            <FilterDropdown
              options={bedsList}
              isOpen={openBedMenu}
              placeholderLabel="Beds"
              closeDropdown={() => setOpenBedMenu(false)}
              toggleDropdown={() => setOpenBedMenu(!openBedMenu)}
              setFilterValue={setHomeFilters}
              filterStateValue={homeFilter}
            />
            <FilterDropdown
              options={bathsList}
              isOpen={openBathMenu}
              placeholderLabel="Baths"
              closeDropdown={() => setOpenBathMenu(false)}
              toggleDropdown={() => setOpenBathMenu(!openBathMenu)}
              setFilterValue={setHomeFilters}
              filterStateValue={homeFilter}
            />

            <FilterDropdownMulti
              options={suburbList}
              isOpen={openLocationMenu}
              placeholderLabel="Location"
              closeDropdown={() => setOpenLocationMenu(false)}
              toggleDropdown={() => setOpenLocationMenu(!openLocationMenu)}
              setFilterValue={setHomeFilters}
              filterStateValue={homeFilter}
            />
            {/* <FilterDropdown
              options={landBlockSizes}
              isOpen={openBlockMenu}
              placeholderLabel="Block Size"
              closeDropdown={() => setOpenBlockMenu(false)}
              toggleDropdown={() => setOpenBlockMenu(!openBlockMenu)}
              setFilterValue={setHomeFilters}
              filterStateValue={homeFilter}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFilter;
