import React from "react";
import Qualities from "../../../components/Qualities";
import Infographics from "../../../components/Infographics";

import * as Stl from "./Styled";
import BengalMain from "../../../assets/DummyPhotos/BengalMain.png";

const Details = () => {
  return (
    <Stl.MainContainer>
      <Stl.MainImageContainer>
        <Stl.MainImage src={BengalMain} alt="cat" />
      </Stl.MainImageContainer>
      <Stl.MainDetailsContainer>
        <Stl.Name>Bengal</Stl.Name>
        <Stl.Description>
          Bengals are a lot of fun to live with, but they're definitely not the
          cat for everyone, or for first-time cat owners. Extremely intelligent,
          curious and active, they demand a lot of interaction and woe betide
          the owner who doesn't provide it.
        </Stl.Description>
        <Qualities
          heading={"Temperament"}
          qualities={"Alert, Agile, Energetic, Demanding, Intelligent"}
        />
        <Qualities heading={"Origin"} qualities={"United States"} />
        <Qualities heading={"Life Span"} qualities={"12 - 15 years"} />
        <Infographics heading={"Adaptability"} level={5} />
        <Infographics heading={"Affection level"} level={5} />
        <Infographics heading={"Child Friendly"} level={4} />
        <Infographics heading={"Grooming"} level={1} />
        <Infographics heading={"Intelligence"} level={5} />
        <Infographics heading={"Health issues"} level={3} />
        <Infographics heading={"Social needs"} level={5} />
        <Infographics heading={"Stranger friendly"} level={3} />
      </Stl.MainDetailsContainer>
    </Stl.MainContainer>
  );
};

export default Details;
