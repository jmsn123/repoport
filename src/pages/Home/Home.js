import React from "react";
import { InfoSection } from "../../components";
import Hero from "../../components/Section/Hero";
import Photos from "../../components/Section/Photos";
import { homeObjOne, homeObjTwo, homeObjThree } from "./data";
const Home = () => {
  return (
    <>
      <Hero />
      <Photos />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
