import { APIKEY } from "./api-key";

const BASE_URL = `https://www.omdbapi.com`;

const apiGet = async function (queryString) {
  const response = await fetch(`${BASE_URL}/?apikey=${APIKEY}&${queryString}`);
  const data = await response.json();

  return data;
};

export const searchMovie = (searchStr) => apiGet(`s=${searchStr}&page=1`);

export const showMovieDetails = (imdbID) => apiGet(`i=${imdbID}&plot=full`);

export const showMovieDetailsByIDs = async (imdbIDArray) => {
  const result = imdbIDArray.map((imdbID) => apiGet(`i=${imdbID}`));
  return Promise.all(result);
};
