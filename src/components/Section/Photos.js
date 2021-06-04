import React from "react";
import Img1 from "../../assets/imgs/photo1.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import simpleIcons from "simple-icons";
import useData from "../../customHooks/useData";
function Photos() {
  const [data] = useData(
    "https://jsonplaceholder.typicode.com/posts/?_page=1&_limit=3"
  );
  console.log(data);

  return (
    <>
      <Head>Our team</Head>
      <Container>
        {data.map((item) => {
          return (
            <Card key={item.title}>
              <Face>
                <CardImg src={item.avatar} />
                <Title>{item.title}</Title>{" "}
                <Content>
                  <p>{item.body}</p>
                  <Links></Links>
                </Content>
              </Face>
            </Card>
          );
        })}
      </Container>
    </>
  );
}

export default Photos;

const Container = styled.div`
  width: 100%;
  display: grid;
  max-width: 1300px;
  grid-template-columns: repeat(3, 1fr);
  margin: 5rem auto;
  justify-content: space-evenly;
  justify-items: center;
  align-content: space-evenly;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
const Head = styled.h1`
  text-align: center;
  margin-top: 30px;
  font-size: 3rem;
  text-transform: uppercase;
`;
const Links = styled(Link)``;
const Card = styled.div`
  width: 300px;
  margin: 10px 10px;
  text-align: center;
`;
const Face = styled.div``;
const Content = styled.div`
  p {
    text-align: center;
  }
`;
const CardImg = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background: red;
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 1.9rem;
`;
