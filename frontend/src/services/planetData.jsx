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
    pictureInfo: "HothInfo",
    people: [13, 80],
  },
  Naboo: {
    long: 0.3401,
    lat: 46.5802,
    picture: nabooPic,
    size: 6,
    bgsize: 150,
    timezone: 0,
    idApi: 8,
    pictureInfo: "HothInfo",
    people: [13, 80],
  },
  Coruscant: {
    long: 74.3141,
    lat: 31.5656,
    picture: coruscantPic,
    size: 6,
    bgsize: 130,
    timezone: 5,
    idApi: 9,
    pictureInfo: "HothInfo",
    people: [13, 80],
  },
  Kashyyyk: {
    long: -60.0257,
    lat: -3.117,
    picture: kashyyykPic,
    size: 6,
    bgsize: 170,
    timezone: -4,
    idApi: 14,
    pictureInfo: "HothInfo",
    people: ["Chewbacca", "Tarfful"],
    creatures: ["Cancell"],
  },
  Hoth: {
    long: -18.0,
    lat: -77.0,
    picture: hothPic,
    size: 3,
    bgsize: 140,
    timezone: +9,
    idApi: 4,
    pictureInfo: "HothInfo",
    people: [13, 80],
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
  },
};

export default planets;
