const MoviesGrid = ({ search, starMeClick, isStarred }) => {
  const { Title, Poster, imdbID } = search;

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
        <a href={`/movie/${imdbID}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button type="button" onClick={() => starMeClick(imdbID)}>
          {isStarred ? "UNSTAR ME" : "STAR ME"}
        </button>
      </div>
    </>
  );
};

export default MoviesGrid;
