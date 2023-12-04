import React, { useState } from "react";
import FadeIn from "../FadeIn";
import { Heading, Paragraph } from "../Typography";
import Button from "../Button";
import loginIllustration from "../../assets/images/loginIllustration.png";
import logo from "../../assets/images/darkLogo.svg";
import FormInput from "../Form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authOtpUserAct } from "../../redux/actions/authActions/User/authOtpUser";
import { EmailMasking } from "../../utils/constants/function";

const OtpUser = () => {
  const otpEmail = useSelector((store) => store.authUser.registerEmail);
  const [formData, setFormData] = useState({
    email: otpEmail,
    otp: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOtpUser = async () => {
    const success = await dispatch(authOtpUserAct(formData));
    if (success) {
      navigate("/login");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleOtpUser();
    }
  };

  return (
    <>
      <div className="grid grid-rows-1 grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 w-screen h-screen bg-softGrey">
        <div className="hidden md:flex flex-1 flex-col justify-center lg:justify-end items-center gap-6">
          <FadeIn delay={0.4} direction="up">
            <img src={logo} alt="CourseHub Logo" />
          </FadeIn>
          <FadeIn delay={0.4} direction="up">
            <div className="px-10 flex flex-col gap-3 text-center">
              <Heading variant="h1">
                One last step to
                <span className="text-darkOrange"> join</span> us
              </Heading>
              <Paragraph className="font-thin text-lightGrey ">
                Check your email and enter the code you received
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
              className="w-[50%] h-auto "
            />
          </FadeIn>
        </div>
        <div className="flex-1 bg-white rounded-t-[3rem] lg:rounded-l-[3rem] shadow-[0px_2px_20px_#cbd1f5] flex justify-center items-start md:items-center pt-20 md:pt-0">
          <div className="flex flex-col justify-center items-center gap-4 w-full px-4 md:px-12 lg:px-32">
            <FadeIn delay={0.2} direction="down" fullWidth>
              <Heading variant="h3" className="text-darkGrey">
                OTP Input
              </Heading>
            </FadeIn>
            <FadeIn
              delay={0.4}
              direction="down"
              fullWidth
              className="text-center"
            >
              <Paragraph
                variant="small"
                className="text-darkGrey flex justify-center gap-1"
              >
                Type the 6 digit code sent to the
                <span className="text-darkOrange">
                  <EmailMasking email={otpEmail} />
                </span>
              </Paragraph>
            </FadeIn>
            <FadeIn delay={0.3} direction="down" fullWidth>
              <FormInput
                placeholder="OTP"
                label=" "
                name="otp"
                value={formData.otp}
                onChange={handleInputChange}
                type="text"
                text="darkGrey"
                className="!text-center !tracking-[2rem] focus:!caret-transparent pl-[3.3rem] !text-2xl placeholder:font-normal font-semibold placeholder:text-xl"
                maxLength={6}
                onKeyPress={handleEnterPress}
              />
            </FadeIn>
            <FadeIn
              delay={0.4}
              direction="up"
              fullWidth
              className="flex justify-center"
            >
              <Paragraph variant="small" className="text-darkGrey">
                Resend OTP in 60 seconds
              </Paragraph>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth>
              <Button
                onClick={handleOtpUser}
                isBlock
                className="px-5 py-2 bg-darkOrange text-white rounded-full !text-xl"
              >
                Verify OTP
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpUser;
