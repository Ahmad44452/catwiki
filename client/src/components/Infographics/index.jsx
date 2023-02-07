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
          .map((e, i) => (
            <Stl.Level key={i}></Stl.Level>
          ))}
        {Array(hidden)
          .fill(0)
          .map((e, i) => (
            <Stl.HiddenLevel key={i}></Stl.HiddenLevel>
          ))}
      </Stl.Levels>
    </Stl.StyledQualities>
  );
};

export default index;
