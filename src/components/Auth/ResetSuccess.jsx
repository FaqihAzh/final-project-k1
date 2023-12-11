import React from "react";
import { Heading, Paragraph } from "../Typography";
import FadeIn from "../FadeIn";
import Button from "../Button";
import ResetPasswordIllustration from "../../assets/images/ResetPasswordIllustration.png";

const ResetSuccess = () => {
  return (
    <>
      <div className="bg-softGrey flex flex-col justify-center items-center w-screen h-screen px-4 md:px-12 lg:px-24">
        <div className="flex flex-col justify-center items-center h-full w-full gap-4">
          <FadeIn
            delay={0.3}
            direction="down"
            className="flex items-center justify-center w-full"
          >
            <img
              src={ResetPasswordIllustration}
              alt="checkEmailIllustration"
              className="max-w-[60%] md:max-w-[50%]"
            />
          </FadeIn>
          <FadeIn
            delay={0.3}
            direction="down"
            className="flex flex-col items-center justify-center w-full"
          >
            <Heading variant="h2" className="text-darkGrey text-center">
              Reset Password Successfully
            </Heading>

            <Paragraph className="text-lightGrey font-thin text-center">
              Your password has been successfully changed, please take good care
              of it and let's continue your learning.
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

export default ResetSuccess;
