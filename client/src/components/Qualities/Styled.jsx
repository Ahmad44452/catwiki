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
    @media ${device.mobileL} {    
        font-size: 14px;
    }
`;
