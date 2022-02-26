import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";

import {
  allInspectionState,
  filteredInspection,
  inspectionFilterState,
} from "@states/atoms/inspection";
import { ChoiceModel } from "@models";

import { Redactor } from "@components/Common/Common";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import FilterModal from "@components/FilterModal/FilterModal";
import FilterByChoiceGroup from "@components/FilterByChoiceGroup/FilterByChoiceGroup";
import HomeFilter from "@sections/OpenInspection/HomeFilter/HomeFilter";

import { getSuburbs } from "@utils/getSuburbs";
import { transformLocations } from "@utils/transformLocations";
import styles from "./Hero.module.scss";

type IHeroProps = {
  heading?: string;
  introBlurb?: string;
  showMap?: boolean;
  setShowMap: (value: boolean) => void;
};

const Hero = ({
  heading,
  introBlurb = "",
  showMap = false,
  setShowMap,
}: IHeroProps) => {
  const [isOpenFilter, setOpenFilter] = useState(false);
  const filteredHomesList = useRecoilValue(filteredInspection);

  const [suburbList, setSuburbList] = useState<string[]>([]);
  const [newSuburbList, setNewSuburbList] = useState<ChoiceModel[]>([]);
  const homesList = useRecoilValue(allInspectionState);
  const [homesFilter, setHomesFilters] = useRecoilState(inspectionFilterState);

  useEffect(() => {
    setSuburbList(getSuburbs(homesList));
  }, [homesList]);

  useEffect(() => {
    setNewSuburbList(transformLocations(suburbList ?? []));
  }, [suburbList]);

  const resetEstateFilter = () => {
    setHomesFilters({
      locations: ["All"],
      reset: false,
    });
  };

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <h1>{heading}</h1>
          <div className={styles.heroContentText}>
            <Redactor>{introBlurb}</Redactor>
          </div>
        </div>
      </div>

      <div className={styles.heroFilterBar}>
        <HomeFilter
          showMap={showMap}
          setShowMap={setShowMap}
          suburbList={suburbList}
          toggleFilter={() => setOpenFilter(!isOpenFilter)}
        />
      </div>

      <FilterModal
        style={{
          visibility: `${isOpenFilter ? "visible" : "hidden"}`,
          opacity: `${isOpenFilter ? "1" : "0"}`,
          transitionDelay: "0.2s",
          transition: "all 0.3s cubic-bezier(1, 0.885, 0.72, 1)",
        }}
        resultCount={filteredHomesList.length}
        setFilterValue={setHomesFilters}
        filterStateValue={homesFilter}
        closeModal={() => setOpenFilter(false)}
      >
        <FilterByChoiceGroup
          label="Filter by Locations:"
          name="location"
          options={newSuburbList}
          setFilterValue={setHomesFilters}
          filterStateValue={homesFilter}
          resetEstateFilter={resetEstateFilter}
          isMultiChoice
        />
      </FilterModal>
    </div>
  );
};

export default Hero;
