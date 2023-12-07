import { Link, useParams } from "react-router-dom";
import { showMovieDetails } from "../api/omdbapi";
import { useQuery } from "@tanstack/react-query";
import MoviesMainData from "../componenets/movies/MoviesMainData";
import styled from "styled-components";
import { TextCenter } from "../componenets/common/TextCenter";

const Movies = () => {
  const { imdbID } = useParams();

  const { data, error } = useQuery({
    queryKey: ["movie", imdbID],
    queryFn: () => showMovieDetails(imdbID),
    networkMode: "always",
  });

  if (error) return <TextCenter>{error.message}</TextCenter>;
  if (data) {
    console.log(data);

    return (
      <ShowPageWrapper>
        <BackHomeWrapper>
          <Link to="/">Go Back to Home</Link>
        </BackHomeWrapper>

        <MoviesMainData data={data} />
      </ShowPageWrapper>
    );
  }

  return <TextCenter>Data is Loading...</TextCenter>;
};
export default Movies;

const BackHomeWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  a {
    padding: 10px;
    color: ${({ theme }) => theme.mainColors.dark};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ShowPageWrapper = styled.div`
  margin: auto;
  @media only screen and (min-width: 768px) {
    max-width: 700px;
  }
  @media only screen and (min-width: 992px) {
    max-width: 900px;
  }
`;
