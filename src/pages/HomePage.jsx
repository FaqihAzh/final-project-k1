import React from "react";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import LogoMoving from "../components/LogoMoving";
import Categories from "../components/Categories";
import CourseSample from "../components/CourseSample";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Advantages />
      <CourseSample allCourse={true} />
      <Categories />
      <CourseSample allCourse={false} />
      <LogoMoving />
    </div>
  );
};

export default HomePage;
