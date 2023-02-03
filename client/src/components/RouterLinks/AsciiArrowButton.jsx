import styled from "styled-components";
import { Link } from "react-router-dom";

const BottomHeadlineLink = styled(Link)`
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

const AsciiArrowButton = ({ children, to }) => {
  return (
    <BottomHeadlineLink to={to}>
      {...children} <span>→</span>
    </BottomHeadlineLink>
  );
};

export default AsciiArrowButton;
