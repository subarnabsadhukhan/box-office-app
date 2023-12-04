import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../api/omdbapi";
import { searchActors } from "../api/tvmaze";
import SearchForm from "../componenets/SearchForm";
import MoviesGrid from "../componenets/movies/MoviesGrid";
import ActorsGrid from "../componenets/actors/ActorsGrid";

function Home() {
  const [filter, setFilter] = useState(null);

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
