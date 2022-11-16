const weatherCode = {
  Clear_sky: [0],
  Cloudy: [1, 2, 3],
  Foggy: [45, 48],
  Drizzle: [51, 53, 55],
  Freezing_drizzle: [56, 57],
  Rainy: [61, 63, 65],
  Freezing_rain: [66, 67],
  Snow: [71, 73, 75],
  Snow_grains: [77],
  Rain_shower: [80, 81, 82],
  Snow_shower: [85, 86],
  Thunderstorm: [95, 96, 99],
};

const Weathername = (code) => {
  return Object.entries(weatherCode).map(([key, value]) => {
    return (
      value.find((el) => el === code) && key.replace("_", " ").toUpperCase()
    );
  });
};

export default Weathername;
