import styled from "styled-components";
import { device } from "../../../utils/ScreenSizes";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  padding: 4rem 8rem;

  @media ${device.mobileL} {
    flex-direction: column;
    padding: 5px;
    gap: 1rem;
  }
`;

export const MainImageContainer = styled.div`
  width: 40%;
  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const MainDetailsContainer = styled.div`
  width: 60%;
  @media ${device.mobileL} {
    width: 100%;
    padding: 5px;
  }
`;

export const MainImage = styled.img`
  width: 380px;
  height: 380px;
  object-fit: cover;
  border-radius: 24px;
`;

export const Name = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #000;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  line-height: 1.5;
`;
