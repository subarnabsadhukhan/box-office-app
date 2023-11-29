import { APIKEY } from "./api-key";

const BASE_URL = `http://www.omdbapi.com`;

const apiGet = async function (queryString) {
  const response = await fetch(`${BASE_URL}/?apikey=${APIKEY}&${queryString}`);
  const data = await response.json();

  return data;
};

export const searchMovie = (searchStr) => apiGet(`s=${searchStr}&page=1`);
