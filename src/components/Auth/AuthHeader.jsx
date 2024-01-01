import React from "react";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <header>
      <div className="fixed w-screen top-0 left-0 z-50 bg-lightBlue py-4 px-4 md:px-12 lg:px-24 flex md:hidden items-center justify-center">
        <Link to="/">
          <img src={logo} alt="CourseHub Logo" />
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;
