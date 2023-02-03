import React from "react";
import * as Stl from "./Styled";

const index = ({ heading, level }) => {
  const hidden = 5 - level;
  return (
    <Stl.StyledQualities>
      <Stl.Heading>
        {heading}
        {":  "}
      </Stl.Heading>
      <Stl.Levels>
        {Array(level)
          .fill(0)
          .map((e) => (
            <Stl.Level></Stl.Level>
          ))}
        {Array(hidden)
          .fill(0)
          .map((e) => (
            <Stl.HiddenLevel></Stl.HiddenLevel>
          ))}
      </Stl.Levels>
    </Stl.StyledQualities>
  );
};

export default index;
