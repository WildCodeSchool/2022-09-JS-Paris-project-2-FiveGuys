// Cette variable fait le mapping entre le code de l'API (ex: weathercode = 0) et la fonction (qui renvoit clear sky)
const weatherCodeMapping = {
  clear_sky: [0],
  cloudy: [1, 2, 3],
  foggy: [45, 48],
  drizzle: [51, 53, 55],
  freezing_drizzle: [56, 57],
  rainy: [61, 63, 65],
  freezing_rain: [66, 67],
  snow: [71, 73, 75],
  snow_grains: [77],
  rain_shower: [80, 81, 82],
  snow_shower: [85, 86],
  thunderstorm: [95, 96, 99],
};

const Weathername = (code) => {
  if (code === undefined) {
    return "";
  }
  const res = Object.entries(weatherCodeMapping).find(([, value]) => {
    return value.includes(code);
  });
  return res[0].replace("_", " ").toUpperCase();
};

export default Weathername;
