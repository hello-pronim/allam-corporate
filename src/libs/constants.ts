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

export const aboutTimelineCards = [
  {
    featured: true,
    title: "Our journey begins in November 1991.",
    subtitle: "Allam Bros Australia Py Ltd (Incorporated)",
    year: 1991,
    background: "/assets/images/temp/yellow-card.png",
  },
  {
    featured: false,
    title: "Our first home is completed in Cranebrooke, NSW.",
    subtitle: "",
    year: 1992,
    background: "",
  },
  {
    featured: false,
    title: "Allam Homes enters top 10 list of ~Sydney Builders.~",
    subtitle: "",
    year: 1992,
    background: "",
  },
  {
    featured: false,
    title: "~Max Walker~ becomes the face of Allam Maxi Homes",
    subtitle: "Allam Bros Australia Py Ltd (Incorporated)",
    year: 1992,
    textColor: "white",
    background: "/assets/images/temp/temp-grey.jpg",
  },
  {
    featured: false,
    title: "Our first home is completed in Cranebrooke, NSW.",
    subtitle: "",
    year: 2000,
    background: "",
  },
  {
    featured: false,
    title: "Our first home is completed in Cranebrooke, NSW.",
    subtitle: "",
    year: 2005,
    background: "",
  },
  {
    featured: false,
    title: "Our first home is completed in Cranebrooke, NSW.",
    subtitle: "",
    year: 2008,
    background: "",
  },
  {
    featured: false,
    title: "Our first home is completed in Cranebrooke, NSW.",
    subtitle: "",
    year: 2012,
    background: "",
  },
];

export const offerRegisterPanelData = {
  headingRedactor:
    "<h2><strong>To take advantage fo this offer,</strong><br /> Simply register your interest today</h2>",
  description:
    "<h5>Available at selected estates<br/>Offer available from 18 June to 19 July, 2021</h5><p>Excludes garden and dual occupancy homes and land Includes: solar panels, inverter & battery Terms and conditions apply</p>",
};
