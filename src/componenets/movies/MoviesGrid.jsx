import styled from "styled-components";
import { SearchCard, SearchImgWrapper } from "../common/SearchCard";
import { StarIcon } from "../common/StarIcon";
import { useRef } from "react";
import { Link } from "react-router-dom";

const MoviesGrid = ({ search, starMeClick, isStarred }) => {
  const { Title, Poster, imdbID, Plot } = search;
  const StarBtnRef = useRef();
  const handleStarClick = () => {
    starMeClick(imdbID);
    const starBtnEl = StarBtnRef.current;
    if (!starBtnEl) return;
    if (isStarred) {
      starBtnEl.classList.remove("animate");
    } else {
      starBtnEl.classList.add("animate");
    }
  };
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
        <Link to={`/movie/${imdbID}`} target="_blank" rel="noreferrer">
          Read More
        </Link>
        <StarBtn ref={StarBtnRef} type="button" onClick={handleStarClick}>
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
  &.animate {
    ${StarIcon} {
      animation: increase 0.75s ease-in forwards;
      @keyframes increase {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(3) rotate(45deg);
        }
        100% {
          transform: scale(1);
        }
      }
    }
  }
`;
