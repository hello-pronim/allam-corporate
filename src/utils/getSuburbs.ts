import { map, sortBy } from "lodash";

export const getSuburbs = (list: any[]) => {
  const suburbs = map(list, "suburb").map((el) => el.toLowerCase());
  const filterDuplicates = suburbs.reduce(
    (acc, item) => (acc.includes(item) ? acc : [...acc, item]),
    []
  );
  return sortBy(filterDuplicates);
};
