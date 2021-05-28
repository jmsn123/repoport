import React from "react";
import styled from "styled-components";
// import { Button } from "../../Global";
import Video from "../../assets/videos/video1.mp4";
import { Button } from "../elements/Button";
const hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeorContent>
        <HeroItems>
          <HeroText>Unreal Resluts Proven And Tested </HeroText>
          <HeroCta> Come Work With me today ! </HeroCta>
          <Button primary="true" big="true" to="/trips" round="true">
            Contact Me
          </Button>
        </HeroItems>
      </HeorContent>
    </HeroContainer>
  );
};
export default hero;
const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: -80px;
  width: 100%;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2), transparent 100%);
  }
`;
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;
const HeorContent = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  height: calc(100vh - 80px);
  align-items: center;
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
const HeroItems = styled.div`
  color: white;
  padding: 0;
  text-align: center;
  font-weight: bold;
  line-height: 1.1;
  max-height: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const HeroText = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem; ;
`;
const HeroCta = styled.p`
  margin-bottom: 2rem;
  font-size: clamp(1rem, 3vw, 3rem);
`;

// const HeroContainer = styled.div``;
