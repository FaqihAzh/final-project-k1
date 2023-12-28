import React, { useEffect } from "react";
import { Akun } from "../components/Akun";
import {
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} from "../redux/reducers/courseSlice/courseSlice";
import { useDispatch } from "react-redux";

export const AccountPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsMyCourse(false));
    dispatch(setIsNotif(false));
    dispatch(setIsProfile(true));
  }, []);

  return (
    <div>
      <Akun />
    </div>
  );
};
