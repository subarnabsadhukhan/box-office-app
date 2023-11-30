import { useState } from "react";
import { searchMovie } from "../api/omdbapi";
import SearchForm from "../componenets/SearchForm";
import { searchActors } from "../api/tvmaze";

function Home() {
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearch = async ({ searchStr, searchOption }) => {
    try {
      setApiDataError(null);
      if (searchOption === "movies") {
        const result = await searchMovie(searchStr);
        if (result.Response === "False") throw new Error(result.Error);
        setApiData(result.Search);
      } else if (searchOption === "actors") {
        const result = await searchActors(searchStr);
        console.log(result === `[]`);

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
          return <p key={search.imdbID}>{search.Title}</p>;
        } else if (search.person) {
          return <p key={search.person.id}>{search.person.name}</p>;
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
