"use client";
import React, { useEffect } from "react";
import { Payment } from "../../components/Payment";

const PaymentPage = () => {
  useEffect(() => {
    const snapUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const clientKey = process.env.REACT_APP_MIDTRANS_CLIENT_KEY;
    const script = document.createElement("script");
    script.src = snapUrl;
    script.setAttribute("data-client-key", clientKey);
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Payment />
    </>
  );
};

export default PaymentPage;
