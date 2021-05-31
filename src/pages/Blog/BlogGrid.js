import React from "react";
import styled from "styled-components";

function BlogGrid() {
  return (
    <Container>
      <GridWrapper>
        <GridItem>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro rerum,
          perferendis nobis repudiandae cum eaque mollitia magni fuga in
          corporis consequatur architecto laudantium necessitatibus minus
          explicabo veniam iste non quae!
        </GridItem>
        <GridItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
          aut. Maiores doloribus laboriosam explicabo, voluptatum nam qui
          reiciendis! Quia vel eligendi id distinctio ipsum nam dolorum dolore
          omnis quisquam voluptas?
        </GridItem>
        <GridItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          omnis possimus sunt quasi facilis provident corrupti delectus eveniet
          quos aliquid magni maiores soluta esse iure vel, eum ratione error
          eligendi!
        </GridItem>
        <GridItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam
          sit alias possimus deleniti! Ut fugit iure soluta sunt molestiae
          laudantium nulla voluptates accusantium mollitia exercitationem, ad
          ratione quas voluptas.
        </GridItem>
        <GridItem>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam
          sit alias possimus deleniti! Ut fugit iure soluta sunt molestiae
          laudantium nulla voluptates accusantium mollitia exercitationem, ad
          ratione quas voluptas.
        </GridItem>
      </GridWrapper>
    </Container>
  );
}

export default BlogGrid;

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  height: 50vh;
`;
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  min-height: 100%;
  margin-top: 4rem;
  grid-gap: 10px;
  @media screen and (max-width: 650px) {
    display: block;
  }
`;
const GridItem = styled.div`
  background: blue;

  &:nth-child(1) {
    grid-row: span 2;
    background: red;
  }
  &:nth-child(4) {
    grid-column: span 2;
    background: green;
  }
  &:nth-child(5) {
    grid-column: span 3;
    background: orange;
  }
`;
