import React, { useEffect } from "react";
import CourseDetails from "../../components/CourseDetails";
import {
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} from "../../redux/reducers/courseSlice/courseSlice";
import { useDispatch } from "react-redux";

const CourseDetailsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsMyCourse(false));
    dispatch(setIsNotif(false));
    dispatch(setIsProfile(false));
  }, []);

  return <CourseDetails />;
};

export default CourseDetailsPage;
