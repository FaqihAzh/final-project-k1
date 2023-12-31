import React from "react";
import { Heading, Paragraph } from "../Typography";
import FadeIn from "../FadeIn";
import Button from "../Button";
import check_email2 from "../../assets/images/checkEmailIllustration.png";

const ResendEmailCheck = () => {
  return (
    <>
      <div className="bg-softGrey flex flex-col justify-center items-center w-screen min-h-screen px-4 md:px-12 lg:px-24 pb-8">
        <div className="flex flex-col justify-center items-center h-full w-full gap-4">
          <FadeIn
            delay={0.3}
            direction="down"
            className="flex items-center justify-center w-full"
          >
            <img
              src={check_email2}
              alt="checkEmailIllustration"
              className="max-w-[60%] md:max-w-[45%] lg:max-w-[30%]"
            />
          </FadeIn>
          <FadeIn
            delay={0.3}
            direction="down"
            className="flex flex-col items-center justify-center w-full"
          >
            <Heading variant="h2" className="text-darkGrey text-center">
              OTP Link Resend Successfully
            </Heading>

            <Paragraph className="text-lightGrey font-thin text-center">
              The activated link has been resend to your email, please check and
              activate your your account.
            </Paragraph>
          </FadeIn>

          <FadeIn
            delay={0.3}
            direction="up"
            fullWidth
            className="flex items-center justify-center mt-4 w-full"
          >
            <Button
              type="link"
              href="/login"
              className="px-5 py-3 bg-darkOrange text-white rounded-full text-center w-full md:w-1/3 lg:w-1/4 text-lg"
            >
              Back to login
            </Button>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default ResendEmailCheck;
