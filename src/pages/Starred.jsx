import { useQuery } from "@tanstack/react-query";
import { useStarredMovies } from "../lib/useStarredMovies";
import { showMovieDetailsByIDs } from "../api/omdbapi";
import MoviesGrid from "../componenets/movies/MoviesGrid";
import { FlexGrid } from "../componenets/common/FlexGrid";
import { TextCenter } from "./../componenets/common/TextCenter";

function Starred() {
  const [starredMoviesIDs, dispatch] = useStarredMovies();
  const starMeClick = (imdbID) => {
    const isStarred = starredMoviesIDs.includes(imdbID);

    dispatch({ type: isStarred ? "UNSTAR" : "STAR", imdbID });
  };
  const { data: starredMovies, error: starredMoviesError } = useQuery({
    queryKey: ["search", starredMoviesIDs],
    queryFn: () =>
      showMovieDetailsByIDs(starredMoviesIDs).then((result) => {
        return result;
      }),

    networkMode: "always",
    enabled: !!starredMoviesIDs,
    refetchOnWindowFocus: false,
  });

  if (starredMovies && starredMovies.length === 0)
    return <TextCenter>No Movies were Starred</TextCenter>;
  if (starredMovies && starredMovies.length > 0)
    return (
      <FlexGrid>
        {starredMovies.map((movies) => (
          <MoviesGrid
            key={movies.imdbID}
            search={movies}
            starMeClick={starMeClick}
            isStarred={starredMoviesIDs.includes(movies.imdbID)}
          />
        ))}
      </FlexGrid>
    );
  if (starredMoviesError)
    return (
      <TextCenter>Error Occurred: {starredMoviesError.message}</TextCenter>
    );

  return <TextCenter>Data is Loading...</TextCenter>;
}

export default Starred;
