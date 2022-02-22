import React, { useCallback, useEffect, useState } from "react";
import classnames from "classnames/bind";
import { AmenityCategoryModel, AmenityModel, NeighborhoodModel } from "@models";
import NeighborhoodMap from "@components/NeighborhoodMap/NeighborhoodMap";
import styles from "./Neighborhood.module.scss";

type NeighborhoodProps = {
  data: NeighborhoodModel;
  categoryList: AmenityCategoryModel[];
  isSinglePage?: boolean;
};

const cx = classnames.bind(styles);

const Neighborhood = ({
  data,
  categoryList,
  isSinglePage = false,
}: NeighborhoodProps) => {
  const { title, amenities } = data;
  const [selectedCategory, SetSelectedCategory] = useState("");
  const [filteredAmenities, setFilteredAmenities] =
    useState<AmenityModel[]>(amenities);

  useEffect(() => {
    setFilteredAmenities(amenities);
  }, [amenities]);

  useEffect(() => {
    SetSelectedCategory(selectedCategory);
  }, [selectedCategory]);

  const getFilteredAmenity = useCallback(
    (key) => {
      return amenities.filter((el) => el.amenityCategory[0].title === key);
    },
    [amenities]
  );

  const handleCategoryClick = useCallback((category: string) => {
    SetSelectedCategory(category);
  }, []);

  useEffect(() => {
    selectedCategory === "All"
      ? setFilteredAmenities(amenities)
      : setFilteredAmenities(getFilteredAmenity(selectedCategory));
  }, [amenities, getFilteredAmenity, selectedCategory]);

  return (
    <div
      className={cx("neighborhood", {
        neighborhoodSingle: isSinglePage,
      })}
    >
      <div className={styles.neighborhoodWrapper}>
        <div className={styles.neighborhoodContent}>
          <h2>Explore your neighbourhood{isSinglePage ? ` - ${title}` : ""}</h2>
          <NeighborhoodMap data={filteredAmenities} />

          <div className={styles.neighborhoodCategories}>
            {amenities.map((category) => (
              <div
                key={category.amenityCategory[0].title}
                className={styles.neighborhoodCategoriesItem}
              >
                <h5
                  onClick={() =>
                    handleCategoryClick(category.amenityCategory[0].title)
                  }
                  className={`${
                    selectedCategory === category.amenityCategory[0].title
                      ? styles.isActive
                      : ""
                  }`}
                >
                  {category.amenityCategory[0].title}
                </h5>
                {selectedCategory === category.amenityCategory[0].title && (
                  <div className={styles.neighborhoodResult}>
                    <ul>
                      {getFilteredAmenity(selectedCategory).map((amenity) => (
                        <li key={amenity.amenityName}>
                          <span>•</span>
                          <div>
                            <h6>{amenity.amenityName}</h6>
                            <p>{amenity.address}</p>
                            <p>{amenity.suburb}</p>
                            {amenity.externalUrl && (
                              <a
                                href={amenity.externalUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                View more
                              </a>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neighborhood;
