import React from "react";
import * as Stl from "./Styled";

const index = ({ heading, qualities }) => {
  return (
    <Stl.StyledQualities>
      <Stl.Heading>
        {heading}
        {":  "}
      </Stl.Heading>
      {qualities}
    </Stl.StyledQualities>
  );
};

export default index;
