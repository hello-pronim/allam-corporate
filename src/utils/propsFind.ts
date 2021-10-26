import find from "lodash/find";

export const propsFind = (array: any[], keyWord: string) => {
  return find(array, (el: any) => el.__typename === keyWord);
};
