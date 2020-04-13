import { createStore } from "./storeKoen";
import templateCardDpData from "../data/CardDpData";
import { movies } from "../data/MoviesData";

export default createStore({
  currentDigitalProduct: {},
  digitalProducts: templateCardDpData.valueProps,
  currentApplication: {},
  movies: movies,
  currentMovies: {},
});
