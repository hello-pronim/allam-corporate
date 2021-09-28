import React, { useState } from "react";
import BreadCrumb from "@components/BreadCrumb/BreadCrumb";
import EstateFilter from "@components/EstateFilter/EstateFilter";
import FilterModal from "@components/FilterModal/FilterModal";
import FilterByChoiceGroup from "@components/FilterByChoiceGroup/FilterByChoiceGroup";
import { locationObj, typeObj } from "./constant";
import styles from "./Hero.module.scss";

export interface IHeroProps {}

const Hero = () => {
  const [isOpenFilter, setOpenFilter] = useState(false);

  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroBreadcrumb}>
          <BreadCrumb />
        </div>
        <div className={styles.heroContent}>
          <h1>Find your perfect home</h1>
          <p>
            Aliquam leo aliquam ut turpis sed mattis varius. Enim augue
            tincidunt phasellus blandit tempor commodo, tempor ut egestas in.
            Amet, in donec quis purus. Ultrices in dui facilisis sit hac porta.
          </p>
        </div>
      </div>

      <div className={styles.heroFilterBar}>
        <EstateFilter toggleFilter={() => setOpenFilter(!isOpenFilter)} />
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
