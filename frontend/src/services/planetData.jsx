import tatooinePic from "../style/assets/Tatooine.png";
import nabooPic from "../style/assets/Naboo.png";
import coruscantPic from "../style/assets/coruscant.png";
import kashyyykPic from "../style/assets/kashyyyk.png";
import hothPic from "../style/assets/hoth.png";
import deathStarPic from "../style/assets/deathstar.png";

const planets = {
  Tatooine: {
    long: 5.5153,
    lat: 22.8268,
    picture: tatooinePic,
    size: 6,
    bgsize: 120,
    timezone: 0,
    idApi: 1,
    pictureInfo: "Tatooine",
    faction: "Hutt",
    creature: ["C1, C2, C3"],
  },
  Naboo: {
    long: 0.3401,
    lat: 46.5802,
    picture: nabooPic,
    size: 6,
    bgsize: 150,
    timezone: 0,
    idApi: 8,
    pictureInfo: "Naboo",
    faction: "Empire",
    creature: ["C1, C2, C3"],
  },
  Coruscant: {
    long: 74.3141,
    lat: 31.5656,
    picture: coruscantPic,
    size: 6,
    bgsize: 130,
    timezone: 5,
    idApi: 9,
    pictureInfo: "Coruscant",
    people: [13, 80],
    faction: "Empire",
    creature: ["Creature1", "Creature2"],
  },
  Kashyyyk: {
    long: -60.0257,
    lat: -3.117,
    picture: kashyyykPic,
    size: 6,
    bgsize: 170,
    timezone: -4,
    idApi: 14,
    pictureInfo: "Kashyyyk",
    people: [],
    faction: "Rebel",
    creature: ["C1, C2, C3"],
  },
  Hoth: {
    long: -18.0,
    lat: -77.0,
    picture: hothPic,
    size: 3,
    bgsize: 140,
    timezone: +9,
    idApi: 4,
    pictureInfo: "Hoth",
    people: [13, 80],
    faction: "Rebel",
    creature: ["C1, C2, C3"],
  },
  DeathStar: {
    long: 22.5384,
    lat: 5.6979,
    picture: deathStarPic,
    size: 4,
    bgsize: 155,
    timezone: false,
    idApi: 28,
    pictureInfo: "HothInfo",
    people: [13, 80],
    faction: "Empire",
    creature: ["C1, C2, C3"],
  },
};

export default planets;
