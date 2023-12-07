import { SearchCard, SearchImgWrapper } from "../common/SearchCard";

const ActorsGrid = ({ person }) => {
  const { name, country, birthday, deathday, gender, image } = person;
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image ? image.medium : `./image-not-found.png`} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name}
        {gender && ` (${gender})`}
      </h1>
      <p>{country ? `Comes from ${country.name}` : `No Country known`}</p>
      {!!birthday && <p>Born on {birthday}</p>}
      <p>{deathday ? `Died ${deathday}` : `Alive`}</p>
    </SearchCard>
  );
};

export default ActorsGrid;
