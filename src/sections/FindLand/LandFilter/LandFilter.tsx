import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { landsFilterState } from "@states/atoms/lands";
import { ArrowButton, ImageButton } from "@components/Common/Common";
import FilterDropdown from "@components/FilterDropdown/FilterDropdown";
import FilterDropdownMulti from "@components/FilterDropdownMulti/FilterDropdownMulti";
import styles from "./LandFilter.module.scss";

export interface ILandFilterProps {
  toggleFilter: () => void;
  setShowMap: (value: boolean) => void;
  showMap?: boolean;
  suburbList?: string[];
}

const typeList = ["All / Both", "House & Land", "Retirement Living"];

const LandFilter = ({
  showMap = false,
  suburbList = [],
  setShowMap,
  toggleFilter,
}: ILandFilterProps) => {
  const [LandFilter, setLandFilters] = useRecoilState(landsFilterState);
  const [openLocationMenu, setOpenLocationMenu] = useState(false);
  const [openTypeMenu, setOpenTypeMenu] = useState(false);

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
          <div className={styles.landFilterDesktopViewBy}>
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

          <div className={styles.landFilterDesktopSortBy}>
            <span>Filter</span>
            <FilterDropdownMulti
              options={suburbList}
              isOpen={openLocationMenu}
              placeholderLabel="Location"
              closeDropdown={() => setOpenLocationMenu(false)}
              toggleDropdown={() => setOpenLocationMenu(!openLocationMenu)}
              setFilterValue={setLandFilters}
              filterStateValue={LandFilter}
            />

            <FilterDropdown
              options={typeList}
              isOpen={openTypeMenu}
              placeholderLabel="Block Size"
              closeDropdown={() => setOpenTypeMenu(false)}
              toggleDropdown={() => setOpenTypeMenu(!openTypeMenu)}
              setFilterValue={setLandFilters}
              filterStateValue={LandFilter}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandFilter;
