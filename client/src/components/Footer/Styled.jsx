import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  border-radius: 70px 70px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem 8rem;

  p {
    line-height: 1;
    color: #fff;
    font-size: 1.5rem;
    text-align: center;

    a {
      font-weight: 700;
      color: #fff;
      font-size: 1.8rem;
    }
  }

  @media only screen and (max-width: 730px) {
    flex-direction: column;
    padding: 2rem 0.5rem;

    p {
      margin-top: 1.5rem;
    }
  }
`;
