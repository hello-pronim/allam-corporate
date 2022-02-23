import { atom } from "recoil";

export const videoModalState = atom({
  key: "videoModalState",
  default: {
    isOpen: false,
    videoUrl: "",
    coverImageUrl: "",
    isvirtualtour: false
  },
});
