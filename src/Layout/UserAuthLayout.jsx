import React from "react";
import AuthHeader from "../components/Auth/AuthHeader";

const UserAuthLayout = ({ children }) => {
  return (
    <>
      <AuthHeader />
      <main>{children}</main>
    </>
  );
};

export default UserAuthLayout;
