export type EstatesPageProps = {
  pageData?: any;
  trustMakers?: any;
  estatesData?: any;
};

export type NormalPageProps = {
  pageData?: any;
  trustMakers?: any;
};

export type PageProps = NormalPageProps | EstatesPageProps;

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

export type EstateModel = {
  title: string;
  introText: string;
  estateState: string;
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
