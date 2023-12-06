import { useQuery } from "@tanstack/react-query";
import { useStarredMovies } from "../lib/useStarredMovies";
import { showMovieDetailsByIDs } from "../api/omdbapi";
import MoviesGrid from "../componenets/movies/MoviesGrid";

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
        console.log(result);

        return result;
      }),

    networkMode: "always",
    enabled: !!starredMoviesIDs,
    refetchOnWindowFocus: false,
  });

  if (starredMovies && starredMovies.length === 0)
    return <div>No Movies were Starred</div>;
  if (starredMovies && starredMovies.length > 0)
    return (
      <div>
        {starredMovies.map((movies) => (
          <MoviesGrid
            key={movies.imdbID}
            search={movies}
            starMeClick={starMeClick}
            isStarred={starredMoviesIDs.includes(movies.imdbID)}
          />
        ))}
      </div>
    );
  if (starredMoviesError)
    return <div>Error Occurred: {starredMoviesError.message}</div>;

  return <div>Data is Loading...</div>;
}

export default Starred;
