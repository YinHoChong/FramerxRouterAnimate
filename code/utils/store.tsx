import { createStore } from "./storeKoen";
import templateCardDpData from "../data/CardDpData";
// import { movies } from "../data/MoviesData";
import { moviesData } from "../data/MoviesData";

const movies = [1, 2, 3, 4];

export default createStore({
  currentDigitalProduct: {},
  digitalProducts: templateCardDpData.valueProps,
  currentApplication: {},

  // ATTENTION
  //valueTable = moviesData[1: 2: 3: 4:]
  movies,
  moviesData,
  selectedMovie: movies[0],
});
