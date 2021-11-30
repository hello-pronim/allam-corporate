import { ChoiceModel } from "@models";

export const statesAU: ChoiceModel[] = [
  {
    value: "nsw",
    label: "nsw",
  },
  {
    value: "vic",
    label: "vic",
  },
  {
    value: "qld",
    label: "qld",
  },
];

export const estateTypeList: ChoiceModel[] = [
  {
    label: "All / Both",
    value: "All",
  },
  {
    label: "House & Land",
    value: "House & Land",
  },
  {
    label: "Retirement Living",
    value: "Retirement Living",
  },
];

export const landBlockSizes = [
  {
    label: "All Blocks",
    value: "All",
  },
  {
    label: "300 - 400",
    value: "300,400",
  },
  {
    label: "400 - 500",
    value: "400,500",
  },
  {
    label: "500 - 600",
    value: "500,600",
  },
  {
    label: "700+",
    value: "700",
  },
];

export const storeysList = [
  {
    label: "All",
    value: "All",
  },
  {
    label: "Single Storey",
    value: "1",
  },
  {
    label: "Double Storey",
    value: "2",
  },
];

export const bathsList = [
  {
    label: "All Bathrooms",
    value: "All",
  },
  {
    label: "2+ Bathroom",
    value: "2+",
  },
  {
    label: "3+ Bathroom",
    value: "3+",
  },
  {
    label: "4+ Bathroom",
    value: "4+",
  },
];

export const bedsList = [
  {
    label: "All Bedrooms",
    value: "All",
  },
  {
    label: "2 Bedroom",
    value: "2",
  },
  {
    label: "3 Bedroom",
    value: "3",
  },
  {
    label: "4+ Bedroom",
    value: "4+",
  },
];

export const sortHomesKeys = [
  {
    label: "Move in date",
    value: "completionDate",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Suburb",
    value: "suburb",
  },
];

export const sortLandKeys = [
  {
    label: "Location",
    value: "suburb",
  },
  {
    label: "Block Size",
    value: "landSize",
  },
];
