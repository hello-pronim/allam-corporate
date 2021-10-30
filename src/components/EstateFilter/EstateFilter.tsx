import React, { useState } from "react";
import { ArrowButton, ImageButton } from "@components/Common/Common";
import FilterDropdown from "@components/FilterDropdown/FilterDropdown";
import { locationObj, typeObj } from "@sections/FindEstate/Hero/constant";
import styles from "./EstateFilter.module.scss";

export interface IEstateFilterProps {
  toggleFilter: () => void;
  setShowMap: (value: boolean) => void;
  showMap?: boolean;
}

const EstateFilter = ({
  showMap = false,
  setShowMap,
  toggleFilter,
}: IEstateFilterProps) => {
  const [openLocationMenu, setOpenLocationMenu] = useState(false);
  const [openTypeMenu, setOpenTypeMenu] = useState(false);

  const toggleLocationMenu = () => {
    setOpenLocationMenu(!openLocationMenu);
  };

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
            />
            <ImageButton
              icon="map"
              label="Map view"
              onClick={() => setShowMap(true)}
            />
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

            <FilterDropdown
              options={typeObj}
              isOpen={openTypeMenu}
              closeDropdown={() => setOpenTypeMenu(false)}
            >
              <ArrowButton
                label="Type"
                onClick={() => setOpenTypeMenu(!openTypeMenu)}
              />
            </FilterDropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateFilter;
