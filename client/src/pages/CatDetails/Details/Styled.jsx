import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 4rem 8rem;
  gap: 2rem;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 4rem;
  }

  @media only screen and (max-width: 834px) {
    padding: 1rem 0rem;
  }

  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

export const MainImageContainer = styled.div`
  width: 40%;
`;

export const MainDetailsContainer = styled.div`
  width: 60%;
  @media only screen and (max-width: 834px) {
    width: 90%;
  }
`;

export const MainImage = styled.img`
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 24px;
  @media only screen and (max-width: 1024px) {
    width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 834px) {
    width: 270px;
    height: 270px;
  }
  @media only screen and (max-width: 425px) {
    width: 350px;
    height: 350px;
  }
`;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  line-height: 1.5;
`;
