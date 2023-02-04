import { createGlobalStyle } from "styled-components";
import { device } from "./utils/ScreenSizes";

const GlobalStyles = createGlobalStyle`
  
  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body {
    padding: 0 7rem;
    font-family: 'Montserrat', sans-serif;

    @media ${device.mobileL} {
      padding: 0rem;
    }
    @media ${device.tablet} {
      padding: 0rem;
    }
  }
`;

export default GlobalStyles;
