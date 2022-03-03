import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  filteredHomes,
  allHomesState,
  homesFilterState,
} from "@states/atoms/homes";
import { Redactor } from "@components/Common/Common";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import FilterModal from "@components/FilterModal/FilterModal";
import FilterByChoiceGroup from "@components/FilterByChoiceGroup/FilterByChoiceGroup";
import HomeFilter from "@sections/FindHome/HomeFilter/HomeFilter";
import { ChoiceModel } from "@models";
import { getSuburbs } from "@utils/getSuburbs";
import { transformLocations } from "@utils/transformLocations";
import {
  landBlockSizes,
  storeysList,
  bedsList,
  bathsList,
} from "@libs/constants";
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
  const homesList = useRecoilValue(allHomesState);
  const filteredHomeList = useRecoilValue(filteredHomes);
  const [isOpenFilter, setOpenFilter] = useState(false);
  const [suburbList, setSuburbList] = useState<string[]>([]);
  const [newSuburbList, setNewSuburbList] = useState<ChoiceModel[]>([]);
  const [homeFilter, setHomeFilters] = useRecoilState(homesFilterState);

  useEffect(() => {
    setSuburbList(getSuburbs(homesList));
  }, [homesList]);

  useEffect(() => {
    setNewSuburbList(transformLocations(suburbList ?? []));
  }, [suburbList]);

  const resetEstateFilter = () => {
    setHomeFilters({
      locations: ["All"],
      storeys: "All",
      beds: "All",
      baths: "All",
      blockSize: "All",
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
        resultCount={filteredHomeList.length}
        setFilterValue={setHomeFilters}
        filterStateValue={homeFilter}
        closeModal={() => setOpenFilter(false)}
      >
        <FilterByChoiceGroup
          label="Filter by Storeys:"
          name="storey"
          options={storeysList}
          setFilterValue={setHomeFilters}
          filterStateValue={homeFilter}
          resetEstateFilter={resetEstateFilter}
        />
        <FilterByChoiceGroup
          label="Filter by Beds:"
          name="bed"
          options={bedsList}
          setFilterValue={setHomeFilters}
          filterStateValue={homeFilter}
          resetEstateFilter={resetEstateFilter}
        />
        <FilterByChoiceGroup
          label="Filter by Bathrooms:"
          name="bath"
          options={bathsList}
          setFilterValue={setHomeFilters}
          filterStateValue={homeFilter}
          resetEstateFilter={resetEstateFilter}
        />
        <FilterByChoiceGroup
          label="Filter by Locations:"
          name="location"
          options={newSuburbList}
          setFilterValue={setHomeFilters}
          filterStateValue={homeFilter}
          resetEstateFilter={resetEstateFilter}
          isMultiChoice
        />
        {/* <FilterByChoiceGroup
          label="Filter by Block Size:"
          name="block"
          options={landBlockSizes}
          setFilterValue={setHomeFilters}
          filterStateValue={homeFilter}
          resetEstateFilter={resetEstateFilter}
        /> */}
      </FilterModal>
    </div>
  );
};

export default Hero;
