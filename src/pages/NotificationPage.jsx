import React, { useEffect } from "react";
import Notification from "../components/Notification";
import {
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} from "../redux/reducers/courseSlice/courseSlice";
import { useDispatch } from "react-redux";

const NotificationPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsMyCourse(false));
    dispatch(setIsNotif(true));
    dispatch(setIsProfile(false));
  }, []);

  return (
    <>
      <Notification />
    </>
  );
};

export default NotificationPage;
