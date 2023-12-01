import { useParams } from "react-router-dom";

const Movies = () => {
  const { imdbID } = useParams();

  return <>{imdbID}</>;
};
export default Movies;
