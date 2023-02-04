import styled from "styled-components";

export const MainContainer = styled.main`
  padding: 4rem 8rem;
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

export const OtherImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  margin-top: 2rem;
  justify-items: center;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 24px;
  object-fit: cover;
`;
