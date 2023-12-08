import styled from "styled-components";
import { StarIcon } from "../common/StarIcon";

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

  return (
    <>
      <MainDataWrapper>
        <div className="img-wrap">
          <img
            src={Poster !== "N/A" ? Poster : "./../../image-not-found.png"}
          />
        </div>
        <DataSection>
          <Headline>
            <h1>{Title}</h1>
            <div>
              <StarIcon $active />
              <span>{imdbRating}</span>
            </div>
          </Headline>
          <Summary>
            <p>{Plot !== "N/A" ? Plot : ""}</p>
          </Summary>
          <div>
            <strong>Genre:</strong>
            <Genres>
              {Genre.split(", ").map((genre) => (
                <span key={genre}>{genre}</span>
              ))}
            </Genres>
          </div>
        </DataSection>
      </MainDataWrapper>
      <DetailsDataWrapper>
        <h2>Details</h2>
        <hr />
        <p>
          <strong>Awards: </strong>
          <span>{Awards}</span>
        </p>
        <p>
          <strong>Type: </strong>
          <span>{Type}</span>
        </p>
        <p>
          <strong> Released on</strong>
          <span> {Released}</span>{" "}
        </p>
        <p>
          <strong>Director: </strong>
          <span>{Director}</span>{" "}
        </p>
        <p>
          <strong>Actors: </strong>
          <span>{Actors}</span>{" "}
        </p>
        <p>
          <strong>Writers: </strong>
          <span>{Writer}</span>{" "}
        </p>
        <p>
          <strong>Country of Origin: </strong>
          <span>{Country}</span>
        </p>
      </DetailsDataWrapper>
    </>
  );
};
export default MoviesMainData;

const MainDataWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  .img-wrap {
    width: 275px;
    max-width: 100%;
    margin: 0 auto;
    img {
      width: 100%;
      height: auto;
      border: 1px solid #ddd;
      border-radius: 40px;
    }
  }
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    img {
      margin-bottom: 20px;
      margin: auto;
    }
  }
`;

const DataSection = styled.div`
  margin-left: 20px;
  flex: 1;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Headline = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  h1 {
    margin: 0;
    max-width: 80%;
    border-right: 1px solid #ddd;
    padding-right: 25px;
    margin-right: 20px;
  }
  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }
`;

const Summary = styled.div`
  color: #5f5f5f;
  line-height: 1.5;
`;

const Genres = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  span {
    margin: 6px;
    margin-bottom: 0;
    color: blue;
    background-color: #d0c9ff;
    padding: 3px 13px;
    border-radius: 20px;
    font-size: 14px;
  }
`;
const DetailsDataWrapper = styled.div`
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 20px;
  border: 2px solid #5f5f5f;
  border-radius: 20px;
  padding: 0 15px;
  h2 {
    margin-bottom: 0;
  }
  span {
    color: #5f5f5f;
  }
`;
