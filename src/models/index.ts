export type PageProps = {
  pageData?: any;
  trustMakers?: any;
};

export type CraftImage = {
  height?: number;
  width?: number;
  url: string;
  title?: string;
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

export type HeroSliderModel = {
  heading?: string;
  subHeading?: string;
  backgroundImage?: CraftImage[];
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
