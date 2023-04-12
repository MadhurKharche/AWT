import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
  &:hover ${Image} {
    opacity: 0.5;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: black;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  font-weight: 800;
  color: grey;
`;

export default function CategoryItem({ item }) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}
