import React from "react";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import LogoMoving from "../components/LogoMoving";
import Categories from "../components/Categories";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Advantages />
      <Categories />
      <LogoMoving />
    </div>
  );
};

export default HomePage;
