import React from "react";
import * as Stl from "./Styled";
// import BengalOther from "../../../assets/DummyPhotos/BengalOther.png";

const Photos = ({ images }) => {
  return (
    <Stl.MainContainer>
      <Stl.Heading>Other Photos</Stl.Heading>
      <Stl.OtherImagesGrid>
        {images.map((url, i) => {
          if (i < 8) return <Stl.Image src={url} key={i} />;
          else return null;
        })}
        {/* <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} />
        <Stl.Image src={BengalOther} /> */}
      </Stl.OtherImagesGrid>
    </Stl.MainContainer>
  );
};

export default Photos;
