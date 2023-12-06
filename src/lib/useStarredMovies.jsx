import { useEffect, useReducer } from "react";

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persistedValue = localStorage.getItem(localStorageKey);
    return persistedValue ? JSON.parse(persistedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state, localStorageKey]);

  return [state, dispatch];
};

const starredMoviesReducer = (currentStarred, action) => {
  switch (action.type) {
    case "STAR":
      return currentStarred.concat(action.imdbID);
    case "UNSTAR":
      return currentStarred.filter((movieId) => movieId !== action.imdbID);
    default:
      return currentStarred;
  }
};

export const useStarredMovies = () => {
  return usePersistedReducer(starredMoviesReducer, [], "starredShows");
};
