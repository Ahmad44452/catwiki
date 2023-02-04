import styled from "styled-components";

export const SearchBar = styled.div`
  position: relative;
  max-width: 30rem;
  line-height: 1;
  display: inline-block;

  svg {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    fill: #000;
    width: 2rem;
    height: 2rem;
  }

  input[type="button"] {
    display: none;
    text-align: left;
    color: #000;
    font-weight: 500;
    padding: 1.5rem 7rem 1.5rem 2rem;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  input {
    font-family: "Montserrat", sans-serif;
    background: #fff;
    width: 100%;
    padding: 1.5rem 4.2rem 1.5rem 2rem;
    border: none;
    outline: none;
    border-radius: 999px;
    font-size: 2rem;
    font-weight: 500;
    border: 1px solid #000;

    &::placeholder {
      font-size: 2rem;
      color: #291507;
    }

    &:focus + div {
      display: block;
    }
  }

  & > div button {
    display: none;
    border: none;
    outline: none;
    background-color: rgba(151, 151, 151, 0.1);
    border-radius: 8px;
    padding: 0.7rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media only screen and (max-width: 730px) {
    input[type="button"] {
      display: block;
    }

    /* input[type="text"] + div {
      display: block;
    } */

    & > div {
      display: ${({ showInputOnMobile }) =>
        showInputOnMobile ? "block" : "none"};
      background-color: #fff;
      min-height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 100;
      text-align: right;
      padding: 1rem;

      button {
        display: inline-block;
        cursor: pointer;
      }

      svg {
        position: static;
        transform: translate(0);
      }
    }

    input[type="text"] {
      margin: 2rem 0 0.5rem 0;
    }
  }
`;

export const FoundItemsBox = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 1rem;
  z-index: 150;
  text-align: left;

  ul {
    overflow-y: auto;
    list-style-type: none;
    max-height: 22rem;

    scrollbar-color: #bdbdbd #f2f2f2;
    scrollbar-width: thin;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      &-track {
        background-color: #f2f2f2;
        border-radius: 10px;
      }
      &-thumb {
        background-color: #bdbdbd;
        background-image: none;
        border-radius: 10px;
      }
    }
  }

  @media only screen and (max-width: 730px) {
    position: static;
    width: 100%;
    display: block;

    ul {
      max-height: 100%;
    }
  }
`;

export const FoundItem = styled.li`
  color: #000;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 1.5rem 1rem;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background: #9797971a;
  }
`;
