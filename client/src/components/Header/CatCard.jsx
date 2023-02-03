import styled from "styled-components";

const Container = styled.div``;

const CatImage = styled.img`
  width: 100%;
`;

const CatBreed = styled.p`
  font-weight: 600;
  font-size: 2rem;
  color: #291507;
  margin-top: 1.5rem;
`;

const CatCard = () => {
  return (
    <Container>
      <CatImage src="/images/image 2.png" />
      <CatBreed>Breed Name</CatBreed>
    </Container>
  );
};

export default CatCard;
