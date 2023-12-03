import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showMovieDetails } from "../api/omdbapi";

const Movies = () => {
  const { imdbID } = useParams();
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await showMovieDetails(imdbID);
        console.log(data);

        setShowData(data);
      } catch (error) {
        setShowError(error.message);
      }
    }
    fetchData();
  }, [imdbID]);

  if (showError) return <div>{showError}</div>;
  if (showData) return <div>{showData.Actors}</div>;

  return (
    <>
      <div>Data is Loading...</div>
    </>
  );
};
export default Movies;
