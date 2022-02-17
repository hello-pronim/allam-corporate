export type OverViewPageProps = {
  pageData?: any;
  newsList?: any;
  trustMakers?: any;
  listingData?: any;
  layoutData?: any;
  homesList?: any;
};

export type AllamAdvPageProps = {
  layoutData?: any;
  easyBuy?: any;
  allamAdvantages?: any;
};

export type NormalPageProps = {
  layoutData?: any;
  pageData?: any;
  trustMakers?: any;
  estateList?: any;
};

export type PageProps = NormalPageProps | OverViewPageProps;

export type NavItemModel = {
  linkName: string;
  hyperlink: {
    slug: string;
  }[];
};

export type AdvantageModel = {
  label: string;
  description: string;
  icon: CraftImage[];
};

export type LocationOptionModel = { label: any; selected: boolean };

export type EasyBuyStepModel = {
  heading: string;
  description: string;
};

export type CraftImage = {
  height?: number;
  width?: number;
  url: string;
  title?: string;
};

export type VideoModel = {
  title: string;
  description?: string;
  videoLink: string;
  titleImage: CraftImage[];
  dateCreated: string;
};
export type Asset = {
  url: string;
};

export type CTAModel = {
  label: string;
  uri?: string;
  hyperlink: {
    slug: string;
  }[];
};

export type ButtonModel = {
  buttonLabel?: string;
  buttonLink?: string;
  buttonType?: string;
};

export type HeroModel = {
  heading?: string;
  description?: string;
  subHeading?: string;
  textColor?: string;
  backgroundImage?: CraftImage[];
  buttons?: ButtonModel[];
  cta?: CTAModel[];
  icon: CraftImage[];
  bannerHyperlink: {
    slug: string;
  }[];
};

export type TrustFeature = {
  heading?: string;
  subHeading?: string;
  icon?: CraftImage[];
};

export type TrustMakersModel = {
  heading?: string;
  description?: string;
  hascta?: boolean;
  cta?: CTAModel[];
};

export type HomeLayoutModel = {
  heading?: string;
  headingRedactor?: string;
  description?: string;
  textcolor?: string;
  buttons?: ButtonModel[];
  icon?: CraftImage[];
  backgroundImage?: CraftImage[];
};

export type PromotionLayout = {
  leftHeadingRedactor?: string;
  leftSubHeading?: string;
  leftLabel?: string;
  leftLink?: {
    slug: string;
  }[];
  rightHeading?: string;
  rightSubHeading?: string;
  rightLabel?: string;
  rightLink?: {
    slug: string;
  }[];
  image?: CraftImage[];
};

export type NeighborhoodModel = {
  title: string;
  amenities: AmenityModel[];
};

export type AmenityModel = {
  amenityCategory: AmenityCategoryModel[];
  amenityName: string;
  address: string;
  suburb: string;
  latitude: string;
  longitude: string;
  externalUrl: string;
};

export type AmenityCategoryModel = {
  title: string;
};

export type LocationModel = {
  title: string;
  officeName: string;
  linkedEstates?: EstateModel[];
  streetAddress?: string;
  suburb: string;
  locationState?: string;
  postcode?: string;
  daysOpen?: string;
  hoursOpen?: string;
  phoneNumber?: string;
  directionsLink?: string;
};

export type EstateModel = {
  slug?: string;
  title: string;
  introText: string;
  estateState: string;
  streetAddress: string;
  stateStatus: "completed" | "";
  retirementLiving: "yes" | "no";
  logo: CraftImage[];
  postcode: string;
  suburb: string;
  latitude: string;
  longitude: string;
  geojson: string;
  galleryImages: CraftImage[];
  offersLink: any[];
  salesCentre: LocationModel[];
  neighborhood: NeighborhoodModel[];
  masterPlanImage: CraftImage[];
  masterplanDownload: Asset[];
  downloadableBrochure: Asset[];
};

export type HomeModel = {
  slug?: string;
  title: string;
  landOnly: boolean;
  lotNumber?: string;
  address: string;
  suburb: string;
  homeDesign?: {
    title: string;
  }[];
  sellingLabel?: string;
  openForInspection?: boolean;
  inspectionTimes?: string;
  buildingSize?: number;
  percentageComplete?: number;
  completionDate?: string;
  bedrooms?: number;
  bathrooms?: number;
  car?: number;
  landSize: number;
  latitude: number;
  longitude: number;
  introBlurb?: string;
  features?: string;
  gallery3dUrl?: string;
  images?: CraftImage[];
  featuresInclusion: InclusionModel[];
  downloadableBrochure?: CraftImage[];
};

export type LandModel = {
  slug: string;
  title: string;
  landOnly: boolean;
  lotNumber?: string;
  address: string;
  suburb: string;
  buildingSize?: number;
  landSize: number;
  latitude: string;
  longitude: string;
  introBlurb?: string;
  features?: string;
  gallery3dUrl?: string;
  images?: CraftImage[];
  downloadableBrochure?: CraftImage[];
};

export type OfferModel = {
  slug: string;
  title: string;
  textColor: string;
  shortDescription: string;
  description: string;
  introBlurb: string;
  titleImage: CraftImage[];
  filesDownloads: Asset[];
  linkedEstates: EstateModel[];
};

export type NewsModel = {
  slug?: string;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  publishDate: string;
  linkedEstates: EstateModel[];
  titleImage: CraftImage[];
  filesDownloads: Asset[];
};

export type InclusionModel = {
  inclusionLevel: string;
  featuredInclusions: string;
  fullInclusionTable: InclusionTableModel[];
};

export type InclusionTableModel = {
  inclusionCategory: string;
  inclusionList: {
    inclusionName: string;
  }[];
};

export type ChoiceModel = {
  label: string;
  value: string;
};

// Filter Models
export type EstateFilterModel = {
  locations: string[];
  type: string;
  reset: boolean;
};
export type HomeFilterModel = {
  locations: string[];
  storeys?: string;
  beds?: string;
  baths?: string;
  blockSize?: string;
  reset: boolean;
};
export type LandFilterModel = {
  locations: string[];
  blockSize: string;
  reset: boolean;
};

// Marker Popup Model
export type MarkerPopupModel = {
  data: any;
  type: string;
};
