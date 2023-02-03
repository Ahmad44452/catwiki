import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 4rem 8rem;
`;

export const MainImageContainer = styled.div`
  width: 40%;
`;

export const MainDetailsContainer = styled.div`
  width: 60%;
`;

export const MainImage = styled.img`
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 24px;
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
