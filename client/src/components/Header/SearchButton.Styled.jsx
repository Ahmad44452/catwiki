import styled from "styled-components";

export const SearchBar = styled.div`
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
    font-family: "Montserrat", sans-serif;
    background: #fff;
    width: 100%;
    padding: 1.5rem 4.2rem 1.5rem 2rem;
    border: none;
    outline: none;
    border-radius: 999px;
    font-size: 2rem;
    font-weight: 500;

    &::placeholder {
      font-size: 2rem;
      color: #291507;
    }

    &:focus + div {
      display: block;
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
  z-index: 100;

  ul {
    overflow-y: scroll;
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
