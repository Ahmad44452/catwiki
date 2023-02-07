import * as Stl from "./Styled";
import logoImg from "../../../assets/CatwikiLogo.svg";
import CatCard from "../../../components/Header/CatCard";
import SearchButton from "../../../components/Header/SearchButton";

import AsciiArrowButton from "../../../components/RouterLinks/AsciiArrowButton";

import axios from "axios";
import { useEffect, useState } from "react";

const Header = () => {
  const [topSearched, setTopSearched] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    if (topSearched === null) {
      axios
        .get(`${import.meta.env.VITE_API_URI}/api/breed/topsearched`, {
          signal: controller.signal,
        })
        .then((res) => {
          setTopSearched(res.data);
        });
    }

    return () => {
      controller.abort();
    };
  }, []);

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
          {topSearched === null ? (
            <h2>Loading...</h2>
          ) : (
            <>
              <CatCard breed={topSearched[0]} />
              <CatCard breed={topSearched[1]} />
              <CatCard breed={topSearched[2]} />
              <CatCard breed={topSearched[3]} />
            </>
          )}
        </Stl.BottomCatCardContainer>
      </Stl.Bottom>
    </Stl.Header>
  );
};

export default Header;
