import React, { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  allLandsState,
  landsFilterState,
  filteredLands,
} from "@states/atoms/lands";
import { Redactor } from "@components/Common/Common";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import FilterModal from "@components/FilterModal/FilterModal";
import FilterByChoiceGroup from "@components/FilterByChoiceGroup/FilterByChoiceGroup";
import LandFilter from "@sections/FindLand/LandFilter/LandFilter";
import { ChoiceModel } from "@models";
import { getSuburbs } from "@utils/getSuburbs";
import { transformLocations } from "@utils/transformLocations";
import { landBlockSizes } from "@libs/constants";
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
  const landsList = useRecoilValue(allLandsState);
  const filteredLandList = useRecoilValue(filteredLands);
  const [isOpenFilter, setOpenFilter] = useState(false);
  const [suburbList, setSuburbList] = useState<string[]>([]);
  const [newSuburbList, setNewSuburbList] = useState<ChoiceModel[]>([]);
  const [landFilter, setLandFilters] = useRecoilState(landsFilterState);

  useEffect(() => {
    setSuburbList(getSuburbs(landsList));
  }, [landsList]);

  useEffect(() => {
    setNewSuburbList(transformLocations(suburbList ?? []));
  }, [suburbList]);

  const resetEstateFilter = () => {
    setLandFilters({
      locations: ["All"],
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
        <LandFilter
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
        resultCount={filteredLandList.length}
        setFilterValue={setLandFilters}
        filterStateValue={landFilter}
        closeModal={() => setOpenFilter(false)}
      >
        <FilterByChoiceGroup
          label="Filter by Locations:"
          name="location"
          options={newSuburbList}
          setFilterValue={setLandFilters}
          filterStateValue={landFilter}
          resetEstateFilter={resetEstateFilter}
          isMultiChoice
        />
        <FilterByChoiceGroup
          label="Filter by Block Size:"
          name="block"
          options={landBlockSizes}
          setFilterValue={setLandFilters}
          filterStateValue={landFilter}
          resetEstateFilter={resetEstateFilter}
        />
      </FilterModal>

      {/* <FilterModal
        style={{
          visibility: `${isOpenFilter ? "visible" : "hidden"}`,
          opacity: `${isOpenFilter ? "1" : "0"}`,
          transitionDelay: "0.2s",
          transition: "all 0.3s cubic-bezier(1, 0.885, 0.72, 1)",
        }}
        closeModal={() => setOpenFilter(false)}
      >
        <FilterByChoiceGroup
          label="Filter by Locations:"
          name="location"
          options={newSuburbList}
          isMultiChoice
        />
        <FilterByChoiceGroup
          label="Filter by type:"
          name="type"
          options={typeObj}
        />
      </FilterModal> */}
    </div>
  );
};

export default Hero;
