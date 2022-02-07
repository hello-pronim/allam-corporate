import React, { useCallback, useEffect, useState } from "react";
import { AmenityCategoryModel, AmenityModel, NeighborhoodModel } from "@models";
import NeighborhoodMap from "@components/NeighborhoodMap/NeighborhoodMap";
import styles from "./Neighborhood.module.scss";

type NeighborhoodProps = {
  data: NeighborhoodModel;
  categoryList: AmenityCategoryModel[];
};

const Neighborhood = ({ data, categoryList }: NeighborhoodProps) => {
  const { title, amenities } = data;
  const [selectedCategory, SetSelectedCategory] = useState("");
  const [filteredAmenities, setFilteredAmenities] =
    useState<AmenityModel[]>(amenities);

  useEffect(() => {
    setFilteredAmenities(amenities);
  }, [amenities]);
  useEffect(() => {
    SetSelectedCategory(categoryList[0].title);
  }, [categoryList]);

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
    <div className={styles.neighborhood}>
      <div className={styles.neighborhoodWrapper}>
        <div className={styles.neighborhoodContent}>
          {/* <h2>Explore your neighbourhood - {title}</h2> */}
          <h2>Explore your neighborhood</h2>
          <NeighborhoodMap data={filteredAmenities} />

          <div className={styles.neighborhoodCategories}>
            {categoryList.map((category) => (
              <div
                key={category.title}
                className={styles.neighborhoodCategoriesItem}
              >
                <h5
                  onClick={() => handleCategoryClick(category.title)}
                  className={`${
                    selectedCategory === category.title ? styles.isActive : ""
                  }`}
                >
                  {category.title}
                </h5>
                <ul>
                  {getFilteredAmenity(category.title).map((amenity) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Neighborhood;
