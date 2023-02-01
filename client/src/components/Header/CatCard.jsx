import styled from "styled-components";

const Container = styled.div``;

const CatImage = styled.img`
  width: 100%;
`;

const CatCard = () => {
  return (
    <Container>
      <CatImage src="/images/image 2.png" />
    </Container>
  );
};

export default CatCard;
