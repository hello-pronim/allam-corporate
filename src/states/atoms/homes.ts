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

    const filterLocation =
      filters.locations?.[0] === "All"
        ? homes
        : homes?.filter((home) =>
            filters?.locations?.some((location) => location === home.suburb)
          );
    return filterLocation;
  },
});
