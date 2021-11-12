import { atom, selector } from "recoil";
import { EstateModel } from "@models";

export const allEstateState = atom<EstateModel[]>({
  key: "allEstateState",
  default: [],
});

export const estateFilterState = atom({
  key: "estateFilterState",
  default: {
    locations: [],
    type: "All",
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
            (estate) =>
              filters.type === "All" ||
              estate.retirementLiving === isRetirementLiving
          );
    return filterType;
    // return players.filter(
    //   (player) => filters.length === 0 || filters.includes(player.position),
    // );
  },
});
