export const convertGeoJSON = (geoJson: string) => {
  const newJson = JSON.parse(JSON.stringify(geoJson));
  return JSON.parse(`${newJson}`);
};
