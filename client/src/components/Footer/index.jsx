import * as Stl from "./Styled";
import CatImg from "../../pages/Home/Header/CatwikiLogo.svg";

const Footer = () => {
  return (
    <Stl.Container>
      <img src={CatImg} />
      <p>Developed By Ahmad Ghani</p>
    </Stl.Container>
  );
};

export default Footer;
