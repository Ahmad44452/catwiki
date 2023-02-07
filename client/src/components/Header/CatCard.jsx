import styled from "styled-components";

const Container = styled.div`
  /* max-height: 220px; */
  /* max-width: 220px; */
`;

const CatImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  border-radius: 5px;
`;

const CatBreed = styled.p`
  font-weight: 600;
  font-size: 2rem;
  color: #291507;
  margin-top: 1.5rem;
`;

const CatCard = ({ breed }) => {
  return (
    <Container>
      <CatImage src={breed.referenceImage} />
      <CatBreed>{breed.name}</CatBreed>
    </Container>
  );
};

export default CatCard;
