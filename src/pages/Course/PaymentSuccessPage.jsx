import React, { useEffect } from "react";
import PaymentSucces from "../../components/PaymentSucces";
import {
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} from "../../redux/reducers/courseSlice/courseSlice";
import { useDispatch } from "react-redux";

const PaymentSuccessPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsMyCourse(false));
    dispatch(setIsNotif(false));
    dispatch(setIsProfile(false));
  }, []);

  return (
    <>
      <PaymentSucces />
    </>
  );
};

export default PaymentSuccessPage;
