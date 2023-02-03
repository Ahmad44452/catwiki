import * as Stl from "./Styled";
import AsciiArrowButton from "../../../components/RouterLinks/AsciiArrowButton";

const ReasonSection = () => {
  return (
    <Stl.Section>
      <Stl.SectionText>
        <Stl.SectionHeading>Why should you have a cat?</Stl.SectionHeading>
        <Stl.SectionDescription>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety levels.
        </Stl.SectionDescription>
        <AsciiArrowButton to="/">Read More</AsciiArrowButton>
      </Stl.SectionText>
      <Stl.SectionImages>
        <img src="/images/image 2.png"></img>
        <img src="/images/image 3.png"></img>
        <img src="/images/image 1.png"></img>
      </Stl.SectionImages>
    </Stl.Section>
  );
};

export default ReasonSection;
