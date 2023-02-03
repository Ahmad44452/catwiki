import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20rem 15rem;
`;

export const SectionText = styled.div`
  width: 50%;
  padding: 0 3rem 0 1rem;
  margin-right: 2rem;
`;

export const SectionHeading = styled.h2`
  font-weight: 700;
  font-size: 5rem;
  color: #291507;
  position: relative;
  padding-top: 3rem;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 5px;
    width: 20%;
    background-color: #4d270c;
  }
`;

export const SectionDescription = styled.p`
  font-weight: 500;
  font-size: 2rem;
  color: #291507;
  margin: 8rem 0;
`;

export const SectionImages = styled.div`
  width: 50%;
  margin-left: 2rem;
  display: grid;
  gap: 15px;

  grid-template-areas:
    "img1 img1 img2"
    ". img3 img2"
    ". img3 .";
  align-content: center;

  img {
    width: 100%;
  }

  img:nth-child(1) {
    grid-area: img1;
  }

  img:nth-child(2) {
    grid-area: img2;
  }

  img:nth-child(3) {
    grid-area: img3;
  }
`;
