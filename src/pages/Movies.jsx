import { useParams } from "react-router-dom";
import { showMovieDetails } from "../api/omdbapi";
import { useQuery } from "@tanstack/react-query";

const Movies = () => {
  const { imdbID } = useParams();

  const { data, error } = useQuery({
    queryKey: ["movie", imdbID],
    queryFn: () => showMovieDetails(imdbID),
    networkMode: "always",
  });

  if (error) return <div>{error.message}</div>;
  if (data) return <div>{data.Actors}</div>;

  return (
    <>
      <div>Data is Loading...</div>
    </>
  );
};
export default Movies;
