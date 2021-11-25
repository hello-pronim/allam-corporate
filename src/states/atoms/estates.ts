import { atom, selector } from "recoil";
import { EstateModel, EstateFilterModel } from "@models";

export const allEstateState = atom<EstateModel[]>({
  key: "allEstateState",
  default: [],
});

export const estateFilterState = atom<EstateFilterModel>({
  key: "estateFilterState",
  default: {
    locations: ["All"],
    type: "All",
    reset: false,
  },
});

export const filteredEstates = selector({
  key: "filteredEstates",
  get: ({ get }) => {
    const estates = get(allEstateState);
    const filters = get(estateFilterState);
    const isRetirementLiving =
      filters.type === "Retirement Living" ? "yes" : "no";

    const filterType =
      filters.type === "All"
        ? estates
        : estates.filter(
            (estate) => estate.retirementLiving === isRetirementLiving
          );

    const filterLocation =
      filters.locations.length > 0
        ? filters.locations?.[0] === "All"
          ? filterType
          : filterType?.filter((estate) =>
              filters?.locations?.some((location) => location === estate.suburb)
            )
        : [];

    return filterLocation;
  },
});
