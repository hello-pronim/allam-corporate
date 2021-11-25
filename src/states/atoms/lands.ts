import { atom, selector } from "recoil";
import { LandModel, LandFilterModel } from "@models";

export const allLandsState = atom<LandModel[]>({
  key: "allLandsState",
  default: [],
});

export const landsFilterState = atom<LandFilterModel>({
  key: "landsFilterState",
  default: {
    locations: ["All"],
    blockSize: "All",
    reset: false,
  },
});

export const filteredLands = selector({
  key: "filteredLands",
  get: ({ get }) => {
    const lands = get(allLandsState);
    const filters = get(landsFilterState);

    const filterLocation =
      filters.locations?.[0] === "All"
        ? lands
        : lands?.filter((land) =>
            filters?.locations?.some((location) => location === land.suburb)
          );

    const handleBlockFilter = (
      landSize: number,
      blockSize: string
    ): boolean => {
      const array = blockSize.split(",");
      const minSize = parseInt(array[0]);
      if (landSize >= minSize) {
        return array.length > 1 ? landSize <= parseInt(array[1]) : true;
      }
      return false;
    };

    const filterBlock =
      filters.blockSize === "All"
        ? filterLocation
        : filterLocation.filter((land) =>
            handleBlockFilter(land?.landSize, filters.blockSize)
          );
    return filterBlock;
  },
});
