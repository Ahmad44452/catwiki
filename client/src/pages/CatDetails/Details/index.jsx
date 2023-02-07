import React from "react";
import Qualities from "../../../components/Qualities";
import Infographics from "../../../components/Infographics";

import * as Stl from "./Styled";

const Details = ({ breedInfo }) => {
  return (
    <Stl.MainContainer>
      <Stl.MainImageContainer>
        <Stl.MainImage src={breedInfo.referenceImage} alt="cat" />
      </Stl.MainImageContainer>
      <Stl.MainDetailsContainer>
        <Stl.Name>{breedInfo.name}</Stl.Name>
        <Stl.Description>{breedInfo.description}</Stl.Description>
        <Qualities heading={"Temperament"} qualities={breedInfo.temperament} />
        <Qualities heading={"Origin"} qualities={breedInfo.origin} />
        <Qualities
          heading={"Life Span"}
          qualities={`${breedInfo.lifeSpan} years`}
        />
        <Infographics heading={"Adaptability"} level={breedInfo.adaptability} />
        <Infographics
          heading={"Affection level"}
          level={breedInfo.affectionLevel}
        />
        <Infographics
          heading={"Child Friendly"}
          level={breedInfo.childFriendly}
        />
        <Infographics heading={"Grooming"} level={breedInfo.grooming} />
        <Infographics heading={"Intelligence"} level={breedInfo.intelligence} />
        <Infographics
          heading={"Health issues"}
          level={breedInfo.healthIssues}
        />
        <Infographics heading={"Social needs"} level={breedInfo.socialNeeds} />
        <Infographics
          heading={"Stranger friendly"}
          level={breedInfo.strangerFriendly}
        />
      </Stl.MainDetailsContainer>
    </Stl.MainContainer>
  );
};

export default Details;
