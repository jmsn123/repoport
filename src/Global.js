import styled, { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{


@import url('https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');
font-family: 'Barlow', sans-serif; 
box-sizing:border-box;
margin:0;
padding:0;   


}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;
export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4b59f7" : "#0467fb")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "20px 64px" : "15px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#0467fb" : "##4b59f7")};
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
export default Global;
