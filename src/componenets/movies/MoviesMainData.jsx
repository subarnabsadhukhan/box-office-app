const MoviesMainData = (props) => {
  const {
    Title,
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Plot,
    Poster,
    Released,
    Type,
    Writer,
    imdbRating,
  } = props.data;
  console.log(Poster);

  return (
    <>
      <img src={Poster} />
      <h2>{Title}</h2>
      <p>
        <strong>IMDB Rating: </strong>
        {imdbRating}
      </p>
      <p>{Awards}</p>
      <p>{Plot}</p>
      <p>
        <strong>Type: </strong>
        {Type}
      </p>
      <p>
        <strong>Genre:</strong> {Genre}
      </p>
      <p>
        <strong> Released on</strong> {Released}
      </p>
      <p>
        <strong>Director: </strong>
        {Director}
      </p>
      <p>
        <strong>Actors: </strong>
        {Actors}
      </p>
      <p>
        <strong>Writers: </strong>
        {Writer}
      </p>
      <p>
        <strong>Country of Origin: </strong>
        {Country}
      </p>
    </>
  );
};
export default MoviesMainData;
