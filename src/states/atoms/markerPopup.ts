import { atom } from "recoil";
import { MarkerPopupModel } from "@models";

export const markerPopupState = atom<MarkerPopupModel>({
  key: "markerPopupState",
  default: {
    data: null,
    type: "",
  },
});
