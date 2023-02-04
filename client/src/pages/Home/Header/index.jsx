import * as Stl from "./Styled";
import logoImg from "../../../assets/CatwikiLogo.svg";
import CatCard from "../../../components/Header/CatCard";
import SearchButton from "../../../components/Header/SearchButton";

import AsciiArrowButton from "../../../components/RouterLinks/AsciiArrowButton";

const Header = () => {
  return (
    <Stl.Header>
      <Stl.Top>
        <Stl.TopLogo src={logoImg} />
        <Stl.TopDescription>
          Get to know more about your cat breed
        </Stl.TopDescription>
        <SearchButton />
      </Stl.Top>
      <Stl.Bottom>
        <Stl.BottomHeading>Most Searched Breeds</Stl.BottomHeading>
        <Stl.BottomHeadlineContainer>
          <Stl.BottomHeadline>
            66+ Breeds For you to discover
          </Stl.BottomHeadline>
          <AsciiArrowButton to="/">See More</AsciiArrowButton>
        </Stl.BottomHeadlineContainer>

        <Stl.BottomCatCardContainer>
          <CatCard />
          <CatCard />
          <CatCard />
          <CatCard />
        </Stl.BottomCatCardContainer>
      </Stl.Bottom>
    </Stl.Header>
  );
};

export default Header;
