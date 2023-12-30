import React, { useEffect, useState } from "react";
import FadeIn from "../FadeIn";
import { Heading, Paragraph } from "../Typography";
import Button from "../Button";
import otpIllustration from "../../assets/images/otpIllustration.png";
import logo from "../../assets/images/darkLogo.svg";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { authOtpUserAct } from "../../redux/actions/authActions/User/authOtpUser";

const OtpUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [otp, setOtp] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const otpValue = searchParams.get("otp");
    const tokenValue = searchParams.get("token");

    if (tokenValue) {
      setOtp(otpValue);
      setToken(tokenValue);
    }
  }, [location.search]);

  const handleOtpUser = async () => {
    const success = await dispatch(authOtpUserAct(otp, token));
    if (success) {
      navigate("/login");
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
              src={otpIllustration}
              alt="LoginIllustration"
              className="w-[90%] h-auto "
            />
          </FadeIn>
        </div>
        <div className="flex-1 bg-white rounded-t-[3rem] lg:rounded-l-[3rem] shadow-[0px_2px_20px_#cbd1f5] flex justify-center items-start md:items-center pt-20 md:pt-0">
          <div className="flex flex-col justify-center items-center gap-4 w-full px-4 md:px-12 lg:px-32">
            <FadeIn delay={0.2} direction="down" fullWidth>
              <Heading variant="h3" className="text-darkGrey">
                Account Activated
              </Heading>
            </FadeIn>

            <FadeIn delay={0.3} direction="down" fullWidth>
              <Button
                onClick={handleOtpUser}
                isBlock
                className="px-5 py-2 bg-darkOrange text-white rounded-full !text-xl"
              >
                Verify Account
              </Button>
            </FadeIn>
            <FadeIn
              delay={0.2}
              direction="down"
              fullWidth
              className="text-center"
            >
              <Paragraph className="text-xs text-center text-lightGrey">
                By click Verify Account you have agreed to CourseHub's
                <span className="text-darkOrange"> Terms & Condition</span> and
                <span className="text-darkOrange"> Privacy Policy.</span>
              </Paragraph>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpUser;
