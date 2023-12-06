import { useStarredMovies } from "../lib/useStarredMovies";

function Starred() {
  const [starredMovies] = useStarredMovies();
  return <div>Starred Page {starredMovies.length} </div>;
}

export default Starred;
