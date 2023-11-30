const BASE_URL = ` https://api.tvmaze.com`;

const tvMazeApiGet = async function (queryString) {
  const response = await fetch(`${BASE_URL}/${queryString}`);
  const data = await response.json();

  return data;
};

export const searchActors = (searchStr) =>
  tvMazeApiGet(`search/people?q=${searchStr}`);
