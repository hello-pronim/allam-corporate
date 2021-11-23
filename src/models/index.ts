export type OverViewPageProps = {
  pageData?: any;
  trustMakers?: any;
  listingData?: any;
};

export type AllamAdvPageProps = {
  easyBuy?: any;
  allamAdvantages?: any;
};

export type NormalPageProps = {
  pageData?: any;
  trustMakers?: any;
};

export type PageProps = NormalPageProps | OverViewPageProps;

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

export type Asset = {
  url: string;
};

export type CTAModel = {
  label: string;
  link: string;
  uri?: string;
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
  backgroundImage?: CraftImage[];
  buttons?: CTAModel[];
  cta?: CTAModel[];
  icon: CraftImage[];
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
  buttons?: ButtonModel[];
  icon?: CraftImage[];
  backgroundImage?: CraftImage[];
};

export type PromotionLayout = {
  leftHeadingRedactor?: string;
  leftSubHeading?: string;
  leftLink?: CTAModel[];
  rightHeading?: string;
  rightSubHeading?: string;
  rightLink?: CTAModel[];
  image?: CraftImage[];
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
  masterPlanImage: CraftImage[];
  downloadableBrochure: Asset[];
};

export type EstateFilterModel = {
  locations: string[];
  type: string;
};

export type HomeModel = {
  title: string;
  landOnly: boolean;
  lotNumber?: string;
  address: string;
  suburb: string;
  openForInspection?: boolean;
  inspectionTimes?: any[];
  buildingSize?: number;
  percentageComplete?: number;
  completionDate?: string;
  bedrooms?: number;
  bathrooms?: number;
  car?: number;
  landSize?: number;
  latitude?: string;
  longitude?: string;
  introBlurb?: string;
  features?: string;
  gallery3dUrl?: string;
  images?: CraftImage[];
  downloadableBrochure?: CraftImage[];
};

export type HomeFilterModel = {
  locations: string[];
  storeys: string | number;
  beds: string | number;
  baths: string | number;
  blockSize: string | number;
};

export type LandModel = {
  title: string;
  landOnly: boolean;
  lotNumber?: string;
  address: string;
  suburb: string;
  buildingSize?: number;
  landSize?: number;
  latitude?: string;
  longitude?: string;
  introBlurb?: string;
  features?: string;
  gallery3dUrl?: string;
  images?: CraftImage[];
  downloadableBrochure?: CraftImage[];
};

export type LandFilterModel = {
  locations: string[];
  blockSize: string | number;
};
