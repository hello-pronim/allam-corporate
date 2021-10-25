export type CraftImage = {
  height?: number;
  width?: number;
  url: string;
  title?: string;
};

export type HeroSliderModel = {
  heading?: string;
  subHeading?: string;
  backgroundImage?: CraftImage[];
};
