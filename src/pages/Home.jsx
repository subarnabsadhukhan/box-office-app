import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "../api/omdbapi";
import { searchActors } from "../api/tvmaze";
import SearchForm from "../componenets/SearchForm";
import MoviesGrid from "../componenets/movies/MoviesGrid";
import ActorsGrid from "../componenets/actors/ActorsGrid";
import { useStarredMovies } from "../lib/useStarredMovies";
import { FlexGrid } from "../componenets/common/FlexGrid";
import { TextCenter } from "../componenets/common/TextCenter";

function Home() {
  const [filter, setFilter] = useState(null);
  const [starredMovies, dispatch] = useStarredMovies();

  const starMeClick = (imdbID) => {
    const isStarred = starredMovies.includes(imdbID);

    dispatch({ type: isStarred ? "UNSTAR" : "STAR", imdbID });
  };
  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ["search", filter],
    queryFn: async () => {
      if (filter.searchOption === "movies") {
        const result = await searchMovie(filter.searchStr);

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
      return <TextCenter>Error: {apiDataError.message}</TextCenter>;
    }

    if (apiData) {
      return apiData.map((search) => {
        if (search.imdbID) {
          return (
            <MoviesGrid
              key={search.imdbID}
              search={search}
              starMeClick={starMeClick}
              isStarred={starredMovies.includes(search.imdbID)}
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
      <FlexGrid>{renderApiData()}</FlexGrid>
    </>
  );
}

export default Home;
