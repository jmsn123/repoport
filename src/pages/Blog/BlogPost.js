import React from "react";
import styled from "styled-components";
import Girl from "../../assets/imgs/girl.jpg";
import Melo from "../../assets/imgs/melo.jpg";
import Knight from "../../assets/imgs/smile.jpg";
import useData from "../../customHooks/useData";

const data = [
  {
    articleName: "article",
    title: "Supercharged !",
    body: "The new supercar is here, 543 cv and 140 000$. This is best racing GT about 7 years on",
    author: "Jean Jacques",
    data: "20 mars 2029 - 6 min read ",
  },
];

function BlogPost() {
  const [data] = useData();
  return (
    <Container>
      {data.data.map((item) => (
        <div key={item.id}>
          <TitleContainer>
            <Title></Title>
          </TitleContainer>
          <Card>
            <CardContent>
              <CardImg src={item.avatar} />
              <h2>{`${item.first_name} ${item.last_name}`}</h2>
              <CardTitle></CardTitle>
              <p></p>
            </CardContent>
          </Card>
        </div>
      ))}
    </Container>
  );
}

export default BlogPost;
const Container = styled.div`
  max-width: 1400px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;
const Card = styled.div`
  height: 20vh;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.5);
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  h2 {
    width: 100%;
    justify-content: flex-start;
  }
`;
const CardTitle = styled.h2``;
const TitleContainer = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.h2`
  text-align: center;
  text-transform: capitalize;
`;
const CardImg = styled.img`
  height: 100px;
  width: 100px;
  background: red;
  z-index: 30;
  margin: 0 20px;
  /* align-self: center; */
`;
