import { ChoiceModel } from "@models";

export const transformLocations = (locations: string[]): ChoiceModel[] => {
  // const list: string[] = ["All Suburbs"].concat(locations);
  return locations.map((el) => ({
    label: el,
    value: el,
  }));
};
