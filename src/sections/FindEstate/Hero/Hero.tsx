import React, { useState } from "react";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import FilterModal from "@components/FilterModal/FilterModal";
import { Redactor } from "@components/Common/Common";
import EstateFilter from "@sections/FindEstate/EstateFilter/EstateFilter";
import FilterByChoiceGroup from "@components/FilterByChoiceGroup/FilterByChoiceGroup";
import { locationObj, typeObj } from "./constant";
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
  const [isOpenFilter, setOpenFilter] = useState(false);

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
        closeModal={() => setOpenFilter(false)}
      >
        <FilterByChoiceGroup
          label="Filter by Locations:"
          name="location"
          options={locationObj}
          isMultiChoice
        />
        <FilterByChoiceGroup
          label="Filter by type:"
          name="type"
          options={typeObj}
        />
      </FilterModal>
    </div>
  );
};

export default Hero;
