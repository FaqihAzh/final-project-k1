import React, { useEffect, useState } from "react";
import { Heading, Paragraph } from "../Typography";
import FadeIn from "../FadeIn";
import Button from "../Button";
import FormInput from "../Form";
import darkLogo from "../../assets/images/darkLogo.svg";
import resetIllustration from "../../assets/images/resetIllustration.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authResetPasswordAct } from "../../redux/actions/authActions/User/authResetPassword";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });

  const [resetToken, setResetToken] = useState("");

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

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tokenValue = searchParams.get("token");

    if (tokenValue) {
      setResetToken(tokenValue);
    }
  }, [location.search]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetPasswordUser = async () => {
    const success = await dispatch(authResetPasswordAct(resetToken, formData));
    if (success) {
      navigate("/reset/password/success");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleResetPasswordUser();
    }
  };

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-screen h-screen bg-softGrey">
        <div className="md:order-2 lg:md:order-1 flex-1 rounded-none md:rounded-br-none md:rounded-tr-[3rem] md:rounded-tl-[3rem] lg:rounded-tl-none lg:rounded-br-[3rem] lg:rounded-tr-[3rem] bg-white shadow-lg h-full flex pt-20 md:pt-0 items-start md:items-center">
          <div className="flex w-full py-4 px-4 md:px-24 lg:px-32 flex-col gap-4">
            <FadeIn delay={0.3} direction="down" fullWidth>
              <Heading variant="h3" className="text-darkGrey">
                Reset Password
              </Heading>
            </FadeIn>
            <FadeIn delay={0.4} direction="down" fullWidth>
              {renderFormInput(
                "Enter your new password",
                "New Password",
                "password",
                "password",
                "darkGrey"
              )}
            </FadeIn>
            <FadeIn delay={0.4} direction="up" fullWidth>
              {renderFormInput(
                "Reenter your new password",
                "Confirm Password",
                "confirm_password",
                "password",
                "darkGrey",
                handleEnterPress
              )}
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth>
              <Button
                onClick={handleResetPasswordUser}
                isBlock
                className="px-5 py-3 bg-darkOrange text-white rounded-full"
              >
                Save
              </Button>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth>
              <Paragraph className="text-xs text-center text-lightGrey">
                Please
                <span className="text-darkOrange">
                  {" "}
                  remember your new password,{" "}
                </span>
                it will be used
                <span className="text-darkOrange"> will be used </span> for the
                next login.
              </Paragraph>
            </FadeIn>
          </div>
        </div>
        <div className="md:order-1 lg:md:order-2 overflow-hidden flex-1 hidden md:flex flex-col h-full items-center text-center px-4 md:px-16 lg:px-16">
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
                Don't worry, Let's
                <span className="text-darkOrange mx-2 z-20">continue</span>your
                <span className="text-darkOrange mx-2 z-20">exploration!</span>
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph className="text-center text-lightGrey font-thin z-20">
                Input your new password and continue your exploration of
                breaking through the impossible.
              </Paragraph>
            </FadeIn>
          </div>
          <div className="hidden lg:flex relative flex-1 w-1/2 lg:w-full h-full">
            <FadeIn delay={0.3} direction="up" fullWidth>
              <img
                src={resetIllustration}
                alt="registIllustration"
                className="z-10 absolute scale-110 -top-5"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
