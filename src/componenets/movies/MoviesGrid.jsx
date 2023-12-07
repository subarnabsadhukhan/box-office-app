import styled from "styled-components";
import { SearchCard, SearchImgWrapper } from "../common/SearchCard";
import { StarIcon } from "../common/StarIcon";

const MoviesGrid = ({ search, starMeClick, isStarred }) => {
  const { Title, Poster, imdbID, Plot } = search;

  return (
    <SearchCard>
      <SearchImgWrapper>
        <img
          src={Poster !== `N/A` ? Poster : `./image-not-found.png`}
          alt={Title}
        />
      </SearchImgWrapper>
      <h1>{Title}</h1>
      <p>{Plot ? `${Plot.split(" ").slice(0, 20).join(" ")}...` : ""}</p>
      <ActionSection>
        <a href={`/movie/${imdbID}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <StarBtn type="button" onClick={() => starMeClick(imdbID)}>
          <StarIcon $active={isStarred} />
        </StarBtn>
      </ActionSection>
    </SearchCard>
  );
};

export default MoviesGrid;

const ActionSection = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration-color: #000;
    color: #000;
    &:hover {
      text-decoration-color: blue;
      color: blue;
    }
  }
`;

const StarBtn = styled.button`
  outline: none;
  border: 1px solid #8e8e8e;
  border-radius: 15px;
  padding: 5px 20px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
