import React from "react";
import Data from "../../data/data";
import Img1 from "../../assets/imgs/photo1.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import simpleIcons from "simple-icons";
import useData from "../../customHooks/useData";
function Photos() {
  const [data] = useData("https://jsonplaceholder.typicode.com/posts");
  console.log(data);
  return (
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
  );
}

export default Photos;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10rem auto;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
const Links = styled(Link)``;
const Card = styled.div`
  width: min-content;
  margin: 10px auto;
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
  font-size: 3rem;
`;
