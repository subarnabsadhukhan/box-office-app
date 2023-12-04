import { useParams } from "react-router-dom";
import { showMovieDetails } from "../api/omdbapi";
import { useQuery } from "@tanstack/react-query";
import MoviesMainData from "../componenets/movies/MoviesMainData";

const Movies = () => {
  const { imdbID } = useParams();

  const { data, error } = useQuery({
    queryKey: ["movie", imdbID],
    queryFn: () => showMovieDetails(imdbID),
    networkMode: "always",
  });

  if (error) return <div>{error.message}</div>;
  if (data) {
    console.log(data);

    return (
      <div>
        <MoviesMainData data={data} />
      </div>
    );
  }

  return (
    <>
      <div>Data is Loading...</div>
    </>
  );
};
export default Movies;
