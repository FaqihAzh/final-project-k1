import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import LogoMoving from "../components/LogoMoving";
import Categories from "../components/Categories";
import CourseSample from "../components/CourseSample";
import {
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} from "../redux/reducers/courseSlice/courseSlice";
import { useDispatch } from "react-redux";
import { CookieKeys, CookieStorage } from "../utils/constants/cookies";

const HomePage = () => {
  const dispatch = useDispatch();
  const token = CookieStorage.get(CookieKeys.AuthToken);
  const isLogin = token ? true : false;

  useEffect(() => {
    dispatch(setIsMyCourse(false));
    dispatch(setIsNotif(false));
    dispatch(setIsProfile(false));
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Advantages />
      <CourseSample allCourse={true} />
      <Categories />
      {isLogin && <CourseSample allCourse={false} />}
      <LogoMoving />
    </div>
  );
};

export default HomePage;
