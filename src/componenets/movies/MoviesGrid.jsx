const MoviesGrid = ({ search }) => {
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
        <button type="button">Star Me</button>
      </div>
    </>
  );
};

export default MoviesGrid;
