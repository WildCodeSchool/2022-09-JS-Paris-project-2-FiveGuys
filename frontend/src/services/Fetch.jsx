import axios from "axios";

function fetchData(data) {
  return axios
    .get(
      `https://api.open-meteo.com/v1/forecast?latitude=${data.lat}&longitude=${data.long}&daily=weathercode&timezone=Europe%2FBerlin`
    )
    .then((res) => res.data);
}

export default fetchData;
