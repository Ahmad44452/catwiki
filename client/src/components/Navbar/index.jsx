import * as Stl from "./Styled";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Stl.Nav>
      <Link to="/">
        <Stl.NavImg src="./images/CatwikiLogo.svg" />
      </Link>
    </Stl.Nav>
  );
};

export default Navbar;
