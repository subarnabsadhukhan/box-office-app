import styled from "styled-components";

export const FlexGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  animation: 0.5s ease-in 0s 1 normal forwards running fadein;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
