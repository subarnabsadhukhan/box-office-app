import { Link } from "react-router-dom";

const MoviesGrid = ({ search }) => {
  const { Title, Poster } = search;
  return (
    <>
      <div>
        <img
          src={Poster !== `N/A` ? Poster : `./image-not-found.png`}
          alt={Title}
        />
      </div>
      <h1>{Title}</h1>
      <div>
        <Link to={"/"}>Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </>
  );
};

export default MoviesGrid;
