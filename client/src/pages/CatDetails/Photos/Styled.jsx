import styled from "styled-components";
import { device } from "../../../utils/ScreenSizes";
export const MainContainer = styled.main`
  padding: 4rem 8rem;
  @media ${device.mobileL} {
    padding: 1rem 5px;
  }
`;

export const Heading = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

export const OtherImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  grid-gap: 2rem;
  margin-top: 2rem;
  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 24px;
  object-fit: cover;
  @media ${device.mobileL} {
    width: 350px;
    height: 350px;
  }
`;
