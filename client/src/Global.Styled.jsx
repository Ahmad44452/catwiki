import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;

    @media only screen and (max-width: 75em) { 
      font-size: 56.25%; 
    };

    @media only screen and (max-width: 56.25em) { 
      font-size: 50%;
    };

    @media only screen and (min-width: 112.5em) { 
      font-size: 75%;
     };
  }

  body {
    padding: 0 7rem;
    font-family: 'Montserrat', sans-serif;

    @media only screen and (max-width: 1100px) {
      padding: 0 3rem;
    }

    @media only screen and (max-width: 500px) {
      padding: 0 1.5rem;
    }
  }
`;

export default GlobalStyles;
