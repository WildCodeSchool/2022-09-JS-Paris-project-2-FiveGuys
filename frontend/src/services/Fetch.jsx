import axios from "axios";

function fetchData(lat, long) {
  return axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FBerlin`
    )
    .then((res) => res.data);
}

// function fetchData(lat, long) {
//   return axios
//     .get("https://api.open-meteo.com/v1/forecast/get", {
//       params: {
//         latitude: lat,
//         longitude: long,
//         daily: ["weathercode", "temperature_2m_max"],
//       },
//     })
//     .then((res) => res.data);
// }

/// https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.long}&daily=weathercode&timezone=Europe%2FBerlin

export default fetchData;
