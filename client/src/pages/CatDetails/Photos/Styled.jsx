import styled from "styled-components";
export const MainContainer = styled.main`
  padding: 4rem 8rem;
  @media only screen and (max-width: 1024px) {
    padding: 2rem 4rem;
  }

  @media only screen and (max-width: 834px) {
    padding: 1rem 0rem;
  }
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

export const OtherImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 1rem;
  margin-top: 2rem;
  justify-items: center;
  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 24px;
  object-fit: cover;
  @media only screen and (max-width: 1024px) {
    width: 200px;
    height: 200px;
  }
  @media only screen and (max-width: 834px) {
    width: 140px;
    height: 140px;
  }
  @media only screen and (max-width: 425px) {
    width: 300px;
    height: 300px;
  }
`;
