export const formateDate = (date: string): string => {
  const d = date && new Date(date);
  var options = { day: "numeric", month: "long", year: "numeric" };
  //@ts-ignore
  const writtenDate = d && d.toLocaleDateString("en-AU", options);
  return writtenDate;
};
