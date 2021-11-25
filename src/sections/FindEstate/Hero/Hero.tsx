import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { estateFilterState, filteredEstates } from "@states/atoms/estates";
import { Redactor } from "@components/Common/Common";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import FilterModal from "@components/FilterModal/FilterModal";
import FilterByChoiceGroup from "@components/FilterByChoiceGroup/FilterByChoiceGroup";
import EstateFilter from "@sections/FindEstate/EstateFilter/EstateFilter";
import { ChoiceModel } from "@models";
import { estateTypeList } from "@libs/constants";
import { transformLocations } from "@utils/transformLocations";
import styles from "./Hero.module.scss";

type IHeroProps = {
  heading?: string;
  introBlurb?: string;
  showMap?: boolean;
  suburbList?: string[];
  setShowMap: (value: boolean) => void;
};

const Hero = ({
  heading,
  introBlurb = "",
  showMap = false,
  suburbList,
  setShowMap,
}: IHeroProps) => {
  const estatesList = useRecoilValue(filteredEstates);
  const [isOpenFilter, setOpenFilter] = useState(false);
  const [newSuburbList, setNewSuburbList] = useState<ChoiceModel[]>([]);
  const [estateFilter, setEstateFilters] = useRecoilState(estateFilterState);

  useEffect(() => {
    setNewSuburbList(transformLocations(suburbList ?? []));
  }, [suburbList]);

  const resetEstateFilter = () => {
    setEstateFilters({
      locations: ["All"],
      type: "All",
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
        <EstateFilter
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
        resultCount={estatesList.length}
        setFilterValue={setEstateFilters}
        filterStateValue={estateFilter}
        closeModal={() => setOpenFilter(false)}
      >
        <FilterByChoiceGroup
          label="Filter by Locations:"
          name="location"
          options={newSuburbList}
          setFilterValue={setEstateFilters}
          filterStateValue={estateFilter}
          resetEstateFilter={resetEstateFilter}
          isMultiChoice
        />
        <FilterByChoiceGroup
          label="Filter by type:"
          name="type"
          options={estateTypeList}
          setFilterValue={setEstateFilters}
          filterStateValue={estateFilter}
          resetEstateFilter={resetEstateFilter}
        />
      </FilterModal>
    </div>
  );
};

export default Hero;
