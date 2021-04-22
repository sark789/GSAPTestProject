import styled from "styled-components";

export const Wrapper1 = styled.div`
  background-color: red;
  height: 1500px;

  @media only screen and (min-width: 1000px) {
    height: 1750px;
  }
`;

export const Wrapper2 = styled.div`
  background-color: green;
  font-size: 50px;
`;

export const OutterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0;

  @media only screen and (min-width: 1000px) {
    flex-direction: column;
    padding: 4rem 0;
  }
`;

export const InnerWrapper = styled.div`
  background-color: blue;
  padding: 2rem 0;
  background-color: yellow;
  height: fit-content;

  @media only screen and (min-width: 1000px) {
    padding: 4rem 0;
  }
`;
