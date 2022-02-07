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
    label: "Status",
    value: "sellingLabel",
  },
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
    isImageBg: true,
    title: "Our journey begins in November 1991.",
    subtitle: "Allam Bros Australia Py Ltd (Incorporated)",
    year: "1991",
    background: "/assets/images/temp/yellow-card.png",
  },
  {
    title:
      "<h2>Our first home is completed in Cranebrooke, NSW.</h2><h2>Allam 1st land puchased, Keyville</h2>",
    subtitle: "",
    year: "1992 — 1997",
    background: "",
  },
  {
    title:
      "<h2>Timberline Account and Estimating installed</h2><h2>ATC Allam Challenge launched</h2>",
    subtitle: "",
    year: "1998",
    background: "",
  },
  {
    title:
      "<h2>Allam Homes enters Top 10 Sydney Builders — Homes for Hope</h2><h2>Allam puchases the old 2ka Radio Station & Haydens Theatre</h2><h2>Allam Wins HIA Work Health and Safety Award</h2>",
    subtitle: "",
    year: "1999",
    background: "#ECF0F3",
  },
  {
    isImageBg: true,
    title:
      "<h2><strong>Max Walker</strong> becomes the face of Allam Maxi Homes</h2>",
    year: "1999",
    textColor: "white",
    background: "/assets/images/about/img-about-max.jpg",
  },
  {
    title:
      "<h2>Allam Homes enters Top 5 Sydney Builders</h2><h2>Allam Staff move into new Penrith Office</h2><h2>Allam staff celebrate 10 years at Stepping Out Penrith</h2>",
    subtitle: "",
    year: "2000 — 2001",
    background: "#EEF2F5",
  },
  {
    isImageBg: true,
    title: "<h2><strong>Barney Allam</strong> receives OAM medal</h2>",
    year: "2004",
    textColor: "white",
    background: "/assets/images/about/img-about-barney.jpg",
  },
  {
    title:
      "<h2>Central Coast Project launched at Palm Haven</h2><h2>Projects and spec housing business underway</h2>",
    subtitle: "",
    year: "2004",
    background: "",
  },
  {
    title:
      "<h2>Allam wins UDIA Award for Pavillion on the Park</h2><h2>Kalina — Co-venture with Landcom launched</h2>",
    subtitle: "",
    year: "2007",
    background: "#EEF2F5",
  },
  {
    title:
      "<h2>Allam website launched</h2><h2>Allam Data Centre launch a fully hosted cloud platform</h2>",
    subtitle: "",
    year: "2013",
    background: "",
  },
  {
    title:
      "<h2>First spec home sale over $1,000,000</h2><h2>First Belair Premium Product released</h2>",
    subtitle: "",
    year: "2015",
    background: "",
  },
  {
    title:
      "<h2>‘Come home to Allam’ tagline introduced</h2><h2>First use of the Hii System</h2>",
    subtitle: "",
    year: "2015",
    background: "",
  },
  {
    isImageBg: true,
    title: "<h2>Commenced <strong>Sponsorship</strong> of the Penrith Panthers",
    year: "2015",
    textColor: "white",
    background: "/assets/images/about/img-about-sports.jpg",
  },
  {
    title:
      "<h2>Opening of 1st Display home</h2><h2>16 Active estates</h2><h2>Website relaunched</h2>",
    subtitle: "",
    year: "2016 — 2017",
    background: "",
  },
  {
    title:
      "<h2>13 estates across Sydney, Hunter, South Coast and Central Coast</h2><h2>Launch PropertyBase online reservation system launched and linked to Workflow</h2>",
    subtitle: "",
    year: "2018",
    background: "",
  },
  {
    title:
      "<h2>Purchased first lifestyle estate Monterey, Camden Haven</h2><h2>Head office relocated to Norwest Business Park </h2>",
    subtitle: "",
    year: "2020",
    background: "",
  },
  {
    title:
      "<h2>Alkyra, BeverageFirst Victorian estate launched</h2><h2>Penrith Parthers sponorship extended to 2025</h2><h2>30 year celebrations</h2>",
    subtitle: "",
    year: "2021",
    background: "",
  },
  {
    title:
      "<h2>Commenced building 84 Henry Street, Penrith</h2><h2>New website launched</h2>",
    subtitle: "",
    year: "2021",
    background: "",
  },
  {
    title: "<h2>Barwick 306 Penrith to commence</h2>",
    subtitle: "",
    year: "2022",
    background: "#FFCB05",
  },
  {
    title: "<h2>St Ronans, Sunbury2nd Victorian estate launched</h2>",
    subtitle: "",
    year: "2023",
    background: "#FFCB05",
  },
];

export const offerRegisterPanelData = {
  headingRedactor:
    "<h2><strong>To take advantage fo this offer,</strong><br /> Simply register your interest today</h2>",
  description:
    "<h5>Available at selected estates<br/>Offer available from 18 June to 19 July, 2021</h5><p>Excludes garden and dual occupancy homes and land Includes: solar panels, inverter & battery Terms and conditions apply</p>",
};
