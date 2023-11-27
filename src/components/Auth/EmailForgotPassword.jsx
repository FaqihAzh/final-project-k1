import React, { useState } from "react";
import { Heading, Paragraph } from "../Typography";
import FormInput from "../Form";
import FadeIn from "../FadeIn";
import Button from "../Button";
import darkLogo from "../../assets/images/darkLogo.svg";
import forgotIllustration from "../../assets/images/forgotIllustration.png";

const EmailForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderFormInput = (placeholder, label, name, type, text) => (
    <FormInput
      placeholder={placeholder}
      label={label}
      name={name}
      value={formData[name]}
      onChange={handleInputChange}
      type={type}
      text={text}
    />
  );

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-screen h-screen bg-softGrey">
        <div className="md:order-2 lg:md:order-1 flex-1 rounded-none md:rounded-br-none md:rounded-tr-[3rem] md:rounded-tl-[3rem] lg:rounded-tl-none lg:rounded-br-[3rem] lg:rounded-tr-[3rem] bg-white shadow-lg h-full flex pt-20 md:pt-0 items-start md:items-center">
          <div className="flex w-full py-4 px-4 md:px-24 lg:px-32 flex-col gap-4">
            <FadeIn delay={0.3} direction="down" fullWidth>
              <Heading variant="h3" className="text-darkGrey">
                Forgot Password
              </Heading>
            </FadeIn>
            <FadeIn delay={0.4} direction="down" fullWidth>
              {renderFormInput(
                "Enter your registered email on CourseHub",
                "Registered Email",
                "email",
                "email",
                "darkGrey"
              )}
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth className="-mt-1">
              <Paragraph className="text-xs text-center text-lightGrey">
                Please enter an
                <span className="text-darkOrange">
                  {" "}
                  active email that has been registered on coursehub,{" "}
                </span>
                because we will
                <span className="text-darkOrange">
                  {" "}
                  send a password reset link{" "}
                </span>{" "}
                to that email.
              </Paragraph>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth>
              <Button
                isBlock
                className="px-5 py-3 bg-darkOrange text-white rounded-full"
              >
                Get Reset Password Link
              </Button>
            </FadeIn>
          </div>
        </div>
        <div className="md:order-1 lg:md:order-2 overflow-hidden flex-1 hidden md:flex flex-col h-full items-center text-center px-4 md:px-16">
          <div className="flex flex-col items-center justify-center lg:justify-end text-center flex-1">
            <FadeIn
              delay={0.3}
              direction="down"
              fullWidth
              className="flex justify-center"
            >
              <img src={darkLogo} alt="darkLogo" className="mb-4" />
            </FadeIn>
            <FadeIn delay={0.2} direction="down" fullWidth>
              <Heading variant="h1" className="text-darkGrey z-20 mb-1">
                Forgot your password?
                <span className="text-darkOrange mx-2 z-20">Relax </span>and
                <span className="text-darkOrange mx-2 z-20">don't worry!</span>
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph className="text-center text-lightGrey font-thin z-20">
                Enter your email and our team will send you reset password link
                for set your new password
              </Paragraph>
            </FadeIn>
          </div>
          <div className="hidden lg:flex relative flex-1 w-1/2 lg:w-full h-full">
            <FadeIn delay={0.3} direction="up" fullWidth>
              <img
                src={forgotIllustration}
                alt="registIllustration"
                className="z-10 absolute scale-110"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailForgotPassword;
