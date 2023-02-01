import * as Stl from "./Styled";
import logoImg from "./CatwikiLogo.svg";
import CatCard from "../../../components/Header/CatCard";

const Header = () => {
  return (
    <Stl.Header>
      <Stl.Top>
        <Stl.TopLogo src={logoImg} />
        <Stl.TopDescription>
          Get to know more about your cat breed
        </Stl.TopDescription>
        <Stl.TopSearch>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
          </svg>

          <input placeholder="Enter your breed" />
        </Stl.TopSearch>
      </Stl.Top>
      <Stl.Bottom>
        <Stl.BottomHeading>Most Searched Breeds</Stl.BottomHeading>
        <Stl.BottomHeadlineContainer>
          <Stl.BottomHeadline>
            66+ Breeds For you to discover
          </Stl.BottomHeadline>
          <Stl.BottomHeadlineLink to={"/"}>
            See More <span>→</span>
          </Stl.BottomHeadlineLink>
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
