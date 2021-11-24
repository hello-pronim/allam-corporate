import { ChoiceModel } from "@models";

export const transformLocations = (locations: string[]): ChoiceModel[] => {
  const list: string[] = ["All Suburbs"].concat(locations);
  return list.map((el) => {
    return {
      label: el,
      value: el,
    };
  });
};
