import styled from "styled-components";

export const Header = styled.div`
  overflow: hidden;
  border-radius: 80px;
`;

export const Top = styled.div`
  background-color: #000;
  background-image: url("./images/HeroImagelg.png");
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: right;
  padding: 15rem 10rem;
`;

export const TopLogo = styled.img`
  height: 10rem;
`;

export const TopDescription = styled.p`
  color: #fff;
  font-size: 2.4rem;
  margin: 0 0 5rem 0;
  max-width: 45rem;
`;

export const Bottom = styled.div`
  background-color: #e3e1dc;
  padding: 10rem 10rem 12rem 10rem;
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
`;

export const BottomHeadlineContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin: 5rem 0;
`;

export const BottomHeadline = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  color: #291507;
  flex-basis: 50%;
`;

export const BottomCatCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 8rem;
`;
