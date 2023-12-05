import { useState, useReducer, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../api/omdbapi";
import { searchActors } from "../api/tvmaze";
import SearchForm from "../componenets/SearchForm";
import MoviesGrid from "../componenets/movies/MoviesGrid";
import ActorsGrid from "../componenets/actors/ActorsGrid";

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
function Home() {
  const [filter, setFilter] = useState(null);
  const [starredMovies, dispatch] = usePersistedReducer(
    starredMoviesReducer,
    [],
    "starredShows"
  );
  console.log(starredMovies);

  const starMeClick = (imdbID) => {
    const isStarred = starredMovies.includes(imdbID);

    dispatch({ type: isStarred ? "UNSTAR" : "STAR", imdbID });
  };
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: async () => {
      if (filter.searchOption === "movies") {
        const result = await searchMovie(filter.searchStr);
        console.log(result);

        if (result.Response === "False") throw new Error(result.Error);
        return result.Search;
      } else if (filter.searchOption === "actors") {
        const result = await searchActors(filter.searchStr);

        if (result.length === 0) throw new Error(`Actor Not Found`);
        return result;
      }
    },
    networkMode: "always",
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  const onSearch = async ({ searchStr, searchOption }) => {
    setFilter({ searchStr, searchOption });
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData.map((search) => {
        if (search.imdbID) {
          return (
            <MoviesGrid
              key={search.imdbID}
              search={search}
              starMeClick={starMeClick}
            />
          );
        } else if (search.person) {
          return <ActorsGrid key={search.person.id} person={search.person} />;
        }
      });
    }
    return null;
  };
  return (
    <>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </>
  );
}

export default Home;
