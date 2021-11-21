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
  },
});

export const filteredLands = selector({
  key: "filteredLands",
  get: ({ get }) => {
    const lands = get(allLandsState);
    const filters = get(landsFilterState);

    return lands;
  },
});
