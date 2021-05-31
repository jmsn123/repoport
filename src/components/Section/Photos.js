import React from "react";
import Data from "../../data/data";
import Img1 from "../../assets/imgs/photo1.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import simpleIcons from "simple-icons";
function Photos() {
  //   console.log(Data[0].img);'
  return (
    <Container>
      <Card>
        <Face>
          <CardImg />
          <Title>design</Title>{" "}
          <Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              odit eveniet earum temporibus accusamus in minima quam eos
              facilis. Quibusdam
            </p>
            <Links></Links>
          </Content>
        </Face>
      </Card>
      <Card>
        <Face>
          <CardImg />
          <Title>design</Title>{" "}
          <Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              odit eveniet earum temporibus accusamus in minima quam eos
              facilis. Quibusdam
            </p>
            <Links></Links>
          </Content>
        </Face>
      </Card>
      <Card>
        <Face>
          <CardImg />
          <Title>design</Title>{" "}
          <Content>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              odit eveniet earum temporibus accusamus in minima quam eos
              facilis. Quibusdam
            </p>
            <Links></Links>
          </Content>
        </Face>
      </Card>
    </Container>
  );
}

export default Photos;

const Container = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 10rem auto;
`;
const Links = styled(Link)``;
const Card = styled.div`
  width: min-content;
  margin: 10px auto;
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
