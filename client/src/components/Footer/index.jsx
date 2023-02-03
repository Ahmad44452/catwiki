import * as Stl from "./Styled";
import CatImg from "../../assets/CatwikiLogo.svg";

const Footer = () => {
  return (
    <Stl.Container>
      <img src={CatImg} />
      <p>
        Developed By{" "}
        <a
          href="https://www.linkedin.com/in/ahmadghani/"
          target="_blank"
          rel="noreferrer"
        >
          Ahmad Ghani
        </a>
        &nbsp;- devChallenges.io 2023
      </p>
    </Stl.Container>
  );
};

export default Footer;
