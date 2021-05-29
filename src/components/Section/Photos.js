import React from "react";
import Data from "../../data/data";
import Img1 from "../../assets/imgs/photo1.jpg";
import styled from "styled-components";
function Photos() {
  //   console.log(Data[0].img);
  return (
    <Container>
      <Title>Hello World</Title>
      <CardContainer>
        {Data.map((item) => (
          <FlipCard>
            <FlipCardInner>
              <FlipCardFront>
                <Image key={item.img} src={Img1} />
              </FlipCardFront>
              <FlipCardBack>
                <h1>John Doe</h1>
                <p>Architect & Engineer</p>
                <p>We love that guy</p>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        ))}
      </CardContainer>
    </Container>
  );
}

export default Photos;
const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;
const Container = styled.div`
  height: 50vh;
  width: calc(100vw + 10px);
  margin: 100px 0;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  margin-right: 10px; ;
`;
const FlipCardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;
const FlipCard = styled.div`
  background-color: transparent;
  width: 500px;
  height: 500px;
  border: 1px solid #f1f1f1;
  perspective: 1000px;
  border: none;
  outline: none;
  margin-right: 10px;

  :hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

const FlipCardBack = styled.div`
  background-color: orange;
  color: white;
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
const FlipCardFront = styled.div`
  background-color: #bbb;
  color: black;

  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
`;
