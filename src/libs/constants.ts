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
    label: "House and Land",
    value: "House and Land",
  },
  {
    label: "Retirement",
    value: "Retirement",
  },
];

export const landBlockSizes = [
  {
    label: "All Blocks",
    value: "All",
  },
  {
    label: "300+ sqm",
    value: "300+",
  },
  {
    label: "500+ sqm",
    value: "500+",
  },
  {
    label: "700+ sqm",
    value: "700+",
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

export const landRegisterData = {
  headingRedactor:
    "<h2><strong>To take advantage fo this offer,</strong><br /> Simply register your interest today</h2>",
  description:
    "<p>Our history spans 25 years and during that time we’ve helped thousands  of customers find a new home, with homes and estates spread across many of Sydney’s most popular areas.</p>",
};
