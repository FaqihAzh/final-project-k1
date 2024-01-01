import React, { useState } from "react";
import { Heading, Paragraph } from "../Typography";
import FormInput from "../Form";
import FadeIn from "../FadeIn";
import Button from "../Button";
import darkLogo from "../../assets/images/darkLogo.svg";
import forgotIllustration from "../../assets/images/forgotIllustration.png";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authResendOtpAct } from "../../redux/actions/authActions/User/authResendOtp";

const ActivateAccount = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResendOtpUser = async () => {
    const success = await dispatch(authResendOtpAct(formData));
    if (success) {
      navigate("/check/otp/resend");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleResendOtpUser();
    }
  };

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-screen h-screen bg-softGrey">
        <div className="md:order-2 lg:md:order-1 flex-1 rounded-none md:rounded-br-none md:rounded-tr-[3rem] md:rounded-tl-[3rem] lg:rounded-tl-none lg:rounded-br-[3rem] lg:rounded-tr-[3rem] bg-white shadow-lg h-full flex pt-20 md:pt-0 items-start md:items-center">
          <div className="flex w-full py-4 px-4 md:px-24 lg:px-32 flex-col gap-4">
            <FadeIn delay={0.3} direction="down" fullWidth>
              <Heading variant="h3" className="text-darkGrey">
                Send Activated Link
              </Heading>
            </FadeIn>
            <FadeIn delay={0.4} direction="down" fullWidth>
              {renderFormInput(
                "Enter your not activated email",
                "Not Activated Email",
                "email",
                "email",
                "darkGrey",
                handleEnterPress
              )}
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth>
              <Button
                onClick={handleResendOtpUser}
                isBlock
                className="px-5 py-3 bg-darkOrange text-white rounded-full"
              >
                Get Activated Link
              </Button>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth className="-mt-1">
              <Paragraph className="text-xs text-center text-lightGrey">
                For security, Please enter an
                <span className="text-darkOrange">
                  {" "}
                  active email that you have used to register previously on
                  coursehub,{" "}
                </span>
                because we will
                <span className="text-darkOrange">
                  {" "}
                  send a activate link{" "}
                </span>{" "}
                to that email.
              </Paragraph>
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
              <Button type="link" href="/">
                <img src={darkLogo} alt="darkLogo" className="mb-4" />
              </Button>
            </FadeIn>
            <FadeIn delay={0.2} direction="down" fullWidth>
              <Heading variant="h1" className="text-darkGrey z-20 mb-1">
                Not activated?
                <span className="text-darkOrange mx-2 z-20">Relax </span>and
                <span className="text-darkOrange mx-2 z-20">
                  Let's Activated!
                </span>
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph className="text-center text-lightGrey font-thin z-20">
                Enter your email and our team will send you activate link for
                activated your account
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

export default ActivateAccount;
