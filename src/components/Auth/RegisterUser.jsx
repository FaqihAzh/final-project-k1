import React, { useState } from "react";
import FormInput from "../Form";
import Button from "../Button";
import darkLogo from "../../assets/images/darkLogo.svg";
import registIllustration from "../../assets/images/registIllustration.png";
import { Heading, Paragraph } from "../Typography";
import FadeIn from "../FadeIn";
import AuthHeader from "./AuthHeader";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authRegisterUserAct } from "../../redux/actions/authActions/User/authRegisterUser";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegisterUser = async () => {
    const success = await dispatch(authRegisterUserAct(formData));
    if (success) {
      navigate("/check/email");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleRegisterUser();
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

  return (
    <>
      <AuthHeader />
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-screen h-screen bg-softGrey ">
        <div className="overflow-hidden flex-1 hidden md:flex flex-col h-full items-center text-center px-4 md:px-16 xl:px-32">
          <div className="flex flex-col items-center justify-center lg:justify-end text-center flex-1">
            <FadeIn
              delay={0.3}
              direction="down"
              fullWidth
              className="flex justify-center"
            >
              <Button type="link" href="/">
                <img src={darkLogo} alt="darkLogo" className="mb-4" />
              </Button>{" "}
            </FadeIn>
            <FadeIn delay={0.2} direction="down" fullWidth>
              <Heading variant="h1" className="text-darkGrey z-20 mb-1">
                Let's Join
                <span className="text-darkOrange mx-2 z-20">
                  World's largest
                </span>
                Learning Platform!
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph className="text-center text-lightGrey font-thin z-20">
                Start learning by very easy registering for 100% free!
              </Paragraph>
            </FadeIn>
          </div>
          <div className="hidden lg:flex relative flex-1 w-1/2 lg:w-full h-full">
            <FadeIn delay={0.3} direction="up" fullWidth>
              <img
                src={registIllustration}
                alt="registIllustration"
                className="z-10 absolute scale-110"
              />
            </FadeIn>
          </div>
        </div>
        <div className="flex-1 rounded-none md:rounded-bl-none md:rounded-tl-[3rem] md:rounded-tr-[3rem] lg:rounded-bl-[3rem] lg:rounded-tl-[3rem] lg:rounded-tr-none bg-white shadow-lg h-full flex pt-20 md:pt-0 items-start md:items-center">
          <div className="flex w-full py-4 px-4 md:px-24 lg:px-32 xl:px-40 3xl:px-48 flex-col gap-4">
            <FadeIn delay={0.2} direction="down" fullWidth>
              <Heading variant="h3" className="text-darkGrey">
                Create Account
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2} direction="down" fullWidth>
              {renderFormInput(
                "Enter your username",
                "Username",
                "nickname",
                "text",
                "darkGrey"
              )}
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
                "Enter your phone number",
                "Phone Number",
                "phone_number",
                "text",
                "darkGrey"
              )}
            </FadeIn>
            <FadeIn delay={0.4} direction="up" fullWidth>
              {renderFormInput(
                "Enter your password",
                "Password",
                "password",
                "password",
                "darkGrey",
                handleEnterPress
              )}
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth>
              <Button
                onClick={handleRegisterUser}
                isBlock
                className="px-5 py-3 bg-darkOrange text-white rounded-full"
              >
                Sign Up
              </Button>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph className="text-xs text-center text-lightGrey">
                By creating an account you have agreed to CourseHub's
                <span className="text-darkOrange"> Terms & Condition</span> and
                <span className="text-darkOrange"> Privacy Policy.</span>
              </Paragraph>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph
                variant="small"
                className="text-lightGrey text-center mt-4 -mb-2"
              >
                Already have an account?
                <Button
                  type="link"
                  href="/login"
                  className="text-darkOrange font-semibold ml-1"
                >
                  Let's Sign in!
                </Button>
              </Paragraph>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" className="flex justify-center">
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

export default RegisterUser;
