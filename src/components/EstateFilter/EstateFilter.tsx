import React, { useState } from "react";
import { ArrowButton, ImageButton } from "@components/Common/Common";
import FilterDropdown from "@components/FilterDropdown/FilterDropdown";
import { locationObj, typeObj } from "@sections/FindEstate/Hero/constant";
import styles from "./EstateFilter.module.scss";

export interface IEstateFilterProps {
  toggleFilter: () => void;
}

const EstateFilter = ({ toggleFilter }: IEstateFilterProps) => {
  const [viewMode, setViewMode] = useState(false);
  const [openLocationMenu, setOpenLocationMenu] = useState(false);
  const [openTypeMenu, setOpenTypeMenu] = useState(false);

  const changeViewMode = () => {
    setViewMode(!viewMode);
  };

  const toggleLocationMenu = () => {
    setOpenLocationMenu(!openLocationMenu);
  };

  return (
    <div className={styles.estateFilter}>
      <div className={styles.estateFilterWrapper}>
        <div className={styles.estateFilterMobile}>
          <ImageButton
            onClick={changeViewMode}
            icon={viewMode ? "grid-view" : "map"}
            label={viewMode ? "Grid view" : "Map view"}
          />
          <ArrowButton label="Filter" onClick={toggleFilter} />
        </div>

        <div className={styles.estateFilterDesktop}>
          <div className={styles.estateFilterDesktopViewBy}>
            <span>View by</span>
            <ImageButton icon="grid-view" label="Grid view" />
            <ImageButton icon="map" label="Map view" />
          </div>

          <div className={styles.estateFilterDesktopSortBy}>
            <span>Sort by</span>
            <FilterDropdown
              options={locationObj}
              isOpen={openLocationMenu}
              closeDropdown={() => setOpenLocationMenu(false)}
            >
              <ArrowButton label="Location" onClick={toggleLocationMenu} />
            </FilterDropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateFilter;
