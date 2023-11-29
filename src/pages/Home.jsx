import { useState } from "react";
import { searchMovie } from "../api/omdbapi";

function Home() {
  const [searchStr, setSearchStr] = useState(``);
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataError] = useState(null);

  const onSearchInputChange = (e) => {
    setSearchStr(e.target.value);
  };
  const onSearch = async (e) => {
    e.preventDefault();

    try {
      setApiDataError(null);
      const result = await searchMovie(searchStr);
      if (result.Response === "False") throw new Error(result.Error);

      setApiData(result.Search);
    } catch (e) {
      setApiDataError(e);
    }
  };
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error: {apiDataError.message}</div>;
    }
    if (apiData) {
      return apiData.map((movie) => <p key={movie.imdbID}>{movie.Title}</p>);
    }
    return null;
  };
  return (
    <>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={onSearchInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </>
  );
}

export default Home;
