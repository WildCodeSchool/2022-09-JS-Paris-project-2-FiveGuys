import tatooinePic from "../style/assets/Tatooine.png";
import nabooPic from "../style/assets/Naboo.png";
import coruscantPic from "../style/assets/coruscant.png";
import kashyyykPic from "../style/assets/kashyyyk.png";
import hothPic from "../style/assets/hoth.png";
import deathStarPic from "../style/assets/deathstar.png";

const planets = {
  Tatooine: {
    long: 22.5384,
    lat: 5.6979,
    picture: tatooinePic,
    size: 5,
    bgsize: 120,
    position: {
      top: 10,
      left: 10,
    },
  },
  Naboo: {
    long: 47.5694,
    lat: 0.3443,
    picture: nabooPic,
    size: 5,
    bgsize: 150,
    position: {
      top: 10,
      left: 20,
    },
  },
  Coruscant: {
    long: 22.5384,
    lat: 5.6979,
    picture: coruscantPic,
    size: 5,
    bgsize: 130,
    position: {
      top: 10,
      left: 30,
    },
  },
  Kashyyyk: {
    long: 22.5384,
    lat: 5.6979,
    picture: kashyyykPic,
    size: 5,
    bgsize: 170,
    position: {
      top: 10,
      left: 40,
    },
  },
  Hoth: {
    long: 90.0,
    lat: 0.0,
    picture: hothPic,
    size: 3,
    bgsize: 140,
    position: {
      top: 10,
      left: 50,
    },
  },
  Death_Star: {
    long: 22.5384,
    lat: 5.6979,
    picture: deathStarPic,
    size: 1,
    bgsize: 140,
    position: {
      top: 10,
      left: 60,
    },
  },
};

export default planets;
