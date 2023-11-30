import { useState } from "react";
import { searchMovie } from "../api/omdbapi";
import SearchForm from "../componenets/SearchForm";
import { searchActors } from "../api/tvmaze";
import MoviesGrid from "../componenets/movies/MoviesGrid";
import ActorsGrid from "../componenets/actors/ActorsGrid";

function Home() {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ searchStr, searchOption }) => {
    try {
      setApiDataError(null);
      if (searchOption === "movies") {
        const result = await searchMovie(searchStr);
        console.log(result);

        if (result.Response === "False") throw new Error(result.Error);
        setApiData(result.Search);
      } else if (searchOption === "actors") {
        const result = await searchActors(searchStr);

        if (result.length === 0) throw new Error(`Actor Not Found`);
        setApiData(result);
      }
    } catch (e) {
      setApiDataError(e);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData.map((search) => {
        if (search.imdbID) {
          return <MoviesGrid key={search.imdbID} search={search} />;
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
