import React from "react";
import * as Stl from "./Styled";
import BengalOther from "../../../assets/DummyPhotos/BengalOther.png";

const Photos = () => {
  return (
    <Stl.MainContainer>
      <Stl.Heading>Other Photos</Stl.Heading>
      <Stl.OtherImagesGrid>
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
      </Stl.OtherImagesGrid>
    </Stl.MainContainer>
  );
};

export default Photos;
