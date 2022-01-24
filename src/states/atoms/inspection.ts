import { atom, selector } from "recoil";
import { HomeModel, HomeFilterModel } from "@models";

export const allInspectionState = atom<HomeModel[]>({
  key: "allInspectionState",
  default: [],
});

export const inspectionFilterState = atom<HomeFilterModel>({
  key: "inspectionFilterState",
  default: {
    locations: ["All"],
    reset: false,
  },
});

export const filteredInspection = selector({
  key: "filteredInspection",
  get: ({ get }) => {
    const homes = get(allInspectionState);
    const filters = get(inspectionFilterState);

    const filterLocation =
      filters.locations?.[0] === "All"
        ? homes
        : homes?.filter((home) =>
            filters?.locations?.some(
              (location) => location.toLowerCase() === home.suburb.toLowerCase()
            )
          );

    return filterLocation;
  },
});
