import Styled from "styled-components";
import { device } from "../../utils/ScreenSizes";

export const StyledQualities = Styled.div`
    margin-top: 2.5rem;   
    font-size: 16px;
    font-weight: 500;

`;

export const Heading = Styled.span`
    font-size: 16px;
    font-weight: 700;
    width:20%;
    @media ${device.mobileL} {    
        font-size: 14px;
    }
`;

export const Levels = Styled.span`
    width:80%;
`;

export const Level = Styled.span`
    content: "•";
    display: inline-block;
    width: 50px;
    height: 10px;
    background-color: #544439;
    border-radius: 10px;
    margin-left: 10px;
    font-size: 10px;    
    @media ${device.mobileL} {
        width: 40px;
    }
`;

export const HiddenLevel = Styled(Level)`
  background-color: #E0E0E0;
`;
