import { atom, selector } from "recoil";
import { HomeModel, HomeFilterModel } from "@models";

export const allHomesState = atom<HomeModel[]>({
  key: "allHomesState",
  default: [],
});

export const homesFilterState = atom<HomeFilterModel>({
  key: "homesFilterState",
  default: {
    locations: ["All"],
    storeys: "All",
    beds: "All",
    baths: "All",
    blockSize: "All",
    reset: false,
  },
});

export const filteredHomes = selector({
  key: "filteredHomes",
  get: ({ get }) => {
    const homes = get(allHomesState);
    const filters = get(homesFilterState);

    /* Range Filter */
    // const handleBlockFilter = (
    //   landSize: number,
    //   blockSize: string
    // ): boolean => {
    //   const array = blockSize.split(",");
    //   const minSize = parseInt(array[0]);
    //   if (landSize >= minSize) {
    //     return array.length > 1 ? landSize <= parseInt(array[1]) : true;
    //   }
    //   return false;
    // };

    const handleBedsBath = (
      widgetCount: number,
      filterVal: string
    ): boolean => {
      const isGreater = filterVal.includes("+");
      const filterInteger = parseInt(filterVal);
      return isGreater
        ? widgetCount >= filterInteger
        : widgetCount === filterInteger;
    };

    const filterLocation =
      filters.locations?.[0] === "All"
        ? homes
        : homes?.filter((home) =>
            filters?.locations?.some((location) => location === home.suburb)
          );

    const filterBlock =
      filters.blockSize === "All"
        ? filterLocation
        : filterLocation.filter((home) =>
            handleBedsBath(home.landSize, filters?.blockSize ?? "1")
          );

    const filterStorey =
      filters.storeys === "All"
        ? filterBlock
        : filterBlock.filter(
            (home) => home.car === parseInt(filters?.storeys ?? "1")
          );

    const filterBeds =
      filters.beds === "All"
        ? filterStorey
        : filterStorey.filter((home) =>
            handleBedsBath(home?.bedrooms || 1, filters?.beds ?? "1")
          );

    const filterBaths =
      filters.baths === "All"
        ? filterBeds
        : filterBeds.filter((home) =>
            handleBedsBath(home?.bathrooms || 1, filters?.baths ?? "1")
          );
    return filterBaths;
  },
});
