import React, { useState } from "react";
import FormInput from "../Form";
import Header from "../Header";
import { Heading, Paragraph } from "../Typography";
import Button from "../Button";
import logo from "../../assets/images/darkLogo.svg";
import FadeIn from "../FadeIn";
import loginIllustration from "../../assets/images/loginIllustration.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authLoginUserAct } from "../../redux/actions/authActions/User/authLoginUser";
import { CookieKeys, CookieStorage } from "../../utils/constants/cookies";
import axios from "axios";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import { API_ENDPOINT } from "../../utils/constants/endpoint";
import { setToken } from "../../redux/reducers/authSlice/User/authUserSlice";

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginUser = async () => {
    const success = await dispatch(authLoginUserAct(formData));
    if (success) {
      navigate("/");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleLoginUser();
    }
  };

  const renderFormInput = (
    placeholder,
    label,
    name,
    type,
    text,
    onKeyPress
  ) => (
    <FormInput
      placeholder={placeholder}
      label={label}
      name={name}
      value={formData[name]}
      onChange={handleInputChange}
      type={type}
      text={text}
      onKeyPress={onKeyPress}
    />
  );

  const loginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER}${API_ENDPOINT.USER_LOGIN_AUTH}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      dispatch(setToken(token));
      CookieStorage.set(CookieKeys.AuthToken, token);

      toast("Login Success", {
        position: "bottom-center",
        className: "custom-toast-success",
      });

      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return;
      }
      toast("Login Failed", {
        position: "bottom-center",
        className: "custom-toast-error",
      });
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) => {
      loginWithGoogleAction(codeResponse.access_token);
    },
  });

  return (
    <>
      <div className="block md:hidden">
        <Header />
      </div>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-screen h-screen bg-softGrey">
        <div className="hidden md:flex flex-1 flex-col justify-center lg:justify-end items-center gap-6">
          <FadeIn delay={0.4} direction="up">
            <Button type="link" href="/">
              <img src={logo} alt="CourseHub Logo" />
            </Button>
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <div className="px-10 xl:px-32 3xl:px-40 flex flex-col gap-3 text-center">
              <Heading variant="h1">
                Sign in to
                <span className="text-darkOrange"> learn a New Skill </span>
                Anytime, and Anywhere
              </Heading>
              <Paragraph className="font-thin text-lightGrey ">
                Join the learning adventure by login, where the opportunity to
                acquire a diverse set of skills awaits you. Anytime, and from
                Anywhere
              </Paragraph>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.5}
            direction="up"
            fullWidth
            className="hidden lg:flex justify-center"
          >
            <img
              src={loginIllustration}
              alt="LoginIllustration"
              className="w-[35%] lg:w-[40%] 3xl:w-[50%] h-auto"
            />
          </FadeIn>
        </div>
        <div className="flex-1 bg-white rounded-t-[3rem] lg:rounded-l-[3rem] lg:rounded-tr-none shadow-[0px_2px_20px_#cbd1f5] flex justify-center items-start md:items-center pt-20 md:pt-0">
          <div className="flex flex-col justify-center items-center gap-4 w-full px-4 md:px-12 lg:px-32 xl:px-40 3xl:px-48">
            <FadeIn delay={0.2} direction="down" fullWidth>
              <Heading variant="h3" className="text-grey">
                Sign in
              </Heading>
            </FadeIn>
            <FadeIn delay={0.3} direction="down" fullWidth>
              {renderFormInput(
                "Enter your email address",
                "Email Address",
                "email",
                "email",
                "darkGrey"
              )}
            </FadeIn>
            <FadeIn delay={0.4} direction="down" fullWidth>
              {renderFormInput(
                "Enter your password",
                "Password",
                "password",
                "password",
                "darkGrey",
                handleEnterPress
              )}
            </FadeIn>
            <FadeIn
              delay={0.4}
              direction="up"
              fullWidth
              className="text-darkOrange flex justify-end"
            >
              <Button type="link" href="/forgot/password" className="text-sm">
                Forget Password
              </Button>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth>
              <Button
                onClick={handleLoginUser}
                isBlock
                className="px-5 py-3 bg-darkOrange text-white rounded-full"
              >
                Sign in
              </Button>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph variant="small" className="text-center text-lightGrey">
                Or sign in with
              </Paragraph>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" fullWidth>
              <div className="">
                <Button
                  onClick={loginWithGoogle}
                  className="px-5 py-3 font-semibold bg-transparent rounded-full border border-darkOrange text-darkGrey w-full flex gap-2 items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 34 34"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M33.32 17.3864C33.32 16.181 33.2118 15.0219 33.0109 13.9091H17V20.4851H26.1491C25.755 22.6101 24.5573 24.4105 22.7568 25.616V29.8814H28.2509C31.4654 26.9219 33.32 22.5637 33.32 17.3864Z"
                      fill="#4285F4"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 34.0001C21.59 34.0001 25.4382 32.4778 28.2509 29.8814L22.7568 25.616C21.2345 26.636 19.2873 27.2387 17 27.2387C12.5722 27.2387 8.82451 24.2482 7.48769 20.23H1.80814V24.6346C4.60541 30.1905 10.3545 34.0001 17 34.0001Z"
                      fill="#34A853"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.48768 20.2301C7.14768 19.2101 6.9545 18.1206 6.9545 17.0001C6.9545 15.8796 7.14768 14.7901 7.48768 13.7701V9.36554H1.80812C0.656758 11.6605 -6.10352e-05 14.2569 -6.10352e-05 17.0001C-6.10352e-05 19.7433 0.656758 22.3397 1.80812 24.6347L7.48768 20.2301Z"
                      fill="#FBBC05"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 6.76144C19.4959 6.76144 21.7368 7.61916 23.4986 9.30371L28.3745 4.4278C25.4304 1.68461 21.5823 6.10352e-05 17 6.10352e-05C10.3545 6.10352e-05 4.60541 3.80961 1.80814 9.36553L7.48769 13.7701C8.82451 9.75189 12.5722 6.76144 17 6.76144Z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="text-darkGrey">Sign in with Google</span>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" className={"mt-4 -mb-2"}>
              <Paragraph variant="small" className="text-lightGrey">
                Don't have an account yet?{" "}
                <Button
                  type="link"
                  href="/register"
                  className="text-darkOrange font-semibold"
                >
                  Create an Account
                </Button>
              </Paragraph>
            </FadeIn>
            <FadeIn delay={0.2} direction="up">
              <Paragraph variant="small" className="text-lightGrey">
                Not activated yet?{" "}
                <Button
                  type="link"
                  href="/activate"
                  className="text-darkOrange font-semibold"
                >
                  Activate now
                </Button>
              </Paragraph>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
