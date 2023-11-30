const ActorsGrid = ({ person }) => {
  const { name, country, birthday, deathday, gender, image } = person;
  return (
    <>
      <div>
        <img src={image ? image.medium : `./image-not-found.png`} alt={name} />
      </div>
      <h1>
        {name}
        {gender && ` (${gender})`}
      </h1>
      <p>{country ? `Comes from ${country.name}` : `No Country known`}</p>
      {!!birthday && <p>Born on {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : `Alive`}</p>
    </>
  );
};

export default ActorsGrid;
