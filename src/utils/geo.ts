export const getCoordinates = (location: string): [number, number] => {
  const city = location.toLowerCase();
  if (city.includes("rio de janeiro")) return [-22.9068, -43.1729];
  if (city.includes("paris")) return [48.8566, 2.3522];
  if (city.includes("roma")) return [41.9028, 12.4964];
  if (city.includes("pequim")) return [39.9042, 116.4074];
  if (city.includes("arizona")) return [34.0489, -111.0937];
  if (city.includes("sydney")) return [-33.8688, 151.2093];
  if (city.includes("san francisco")) return [37.7749, -122.4194];

  return [0, 0];
};
