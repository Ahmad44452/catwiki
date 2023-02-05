import styled from "styled-components";

export const Header = styled.div`
  overflow: hidden;
  border-radius: 80px;
  @media only screen and (max-width: 834px) {
    border-radius: 50px;
  }
`;

export const Top = styled.div`
  background-color: #000;
  background-image: url("./images/HeroImagelg.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right;
  padding: 15rem 10rem;

  @media only screen and (max-width: 1024px) {
    padding: 10rem 5rem;
  }

  @media only screen and (max-width: 834px) {
    padding: 2rem 3rem;
  }
`;

export const TopLogo = styled.img`
  height: 10rem;

  @media only screen and (max-width: 685px) {
    height: 4.5rem;
  }
`;

export const TopDescription = styled.p`
  color: #fff;
  font-size: 2.4rem;
  margin: 0 0 5rem 0;
  max-width: 45rem;

  @media only screen and (max-width: 685px) {
    max-width: 50%;
    font-size: 1.8rem;
    margin: 0 0 1.2rem 0;
  }
`;

export const Bottom = styled.div`
  background-color: #e3e1dc;
  padding: 10rem 10rem 12rem 10rem;

  @media only screen and (max-width: 1024px) {
    padding: 5rem 5rem 8rem 5rem;
  }

  @media only screen and (max-width: 834px) {
    padding: 5rem 3rem 7rem 3rem;
  }
`;

export const BottomHeading = styled.h3`
  color: #291507;
  font-size: 2rem;
  position: relative;
  display: inline-block;
  padding: 0.5rem 0;

  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    height: 3px;
    width: 30%;
    background-color: #4d270c;
  }

  @media only screen and (max-width: 560px) {
    font-size: 1.8rem;
  }
`;

export const BottomHeadlineContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 5rem 0;

  @media only screen and (max-width: 834px) {
    margin: 1.5rem 0 2.5rem 0;
  }

  @media only screen and (max-width: 560px) {
    a {
      display: none;
    }
  }
`;

export const BottomHeadline = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  color: #291507;
  flex-basis: 50%;

  @media only screen and (max-width: 834px) {
    flex-basis: 70%;
  }

  @media only screen and (max-width: 560px) {
    flex-basis: 100%;
    font-size: 4rem;
  }
`;

export const BottomCatCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 8rem;
`;
