import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  overflow: hidden;
  border-radius: 100px;
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

export const TopSearch = styled.div`
  position: relative;
  max-width: 30rem;
  line-height: 1;

  svg {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    fill: #000;
    width: 2rem;
    height: 2rem;
  }

  input {
    background: #fff;
    width: 100%;
    padding: 1.5rem 4.2rem 1.5rem 2rem;
    border: none;
    outline: none;
    border-radius: 999px;
    font-size: 2rem;

    &::placeholder {
      font-size: 2rem;
      color: #291507;
    }
  }
`;

export const Bottom = styled.div`
  background-color: #e3e1dc;
  padding: 6rem 10rem 12rem 10rem;
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
  margin-top: 5rem;
`;

export const BottomHeadline = styled.h1`
  font-weight: 700;
  font-size: 5rem;
  color: #291507;
  flex-basis: 50%;
`;

export const BottomHeadlineLink = styled(Link)`
  font-weight: 700;
  font-size: 2rem;
  color: rgba(41, 21, 7, 0.6);
  text-decoration: none;

  span {
    transition: all 0.3s;
    display: inline-block;
  }

  &:hover span {
    transform: translateX(8px);
  }
`;

export const BottomCatCardContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  column-gap: 10px;
  /* flex-wrap: wrap; */
`;
