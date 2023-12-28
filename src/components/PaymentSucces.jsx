import React from "react";
import FadeIn from "./FadeIn";
import succes from "../../src/assets/images/paymentSuccessIllustration.png";
import { Heading, Paragraph } from "./Typography";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const PaymentSucces = () => {
  const location = useLocation();
  const paymentData = location.state;

  console.log(paymentData, "payment");

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
              src={succes}
              alt="checkEmailIllustration"
              className="max-w-[60%] md:max-w-[60%] pt-0 lg:pt-8"
            />
          </FadeIn>
          <FadeIn
            delay={0.3}
            direction="down"
            className="flex flex-col items-center justify-center w-full"
          >
            <Heading variant="h2" className="text-darkGrey text-center">
              Payment Successful
            </Heading>

            <Paragraph className="text-lightGrey font-thin text-center">
              Join course successfully, let's start learning and get closer to
              your dreams
            </Paragraph>
          </FadeIn>

          <FadeIn
            delay={0.3}
            direction="up"
            fullWidth
            className="flex items-center justify-center flex-col gap-4 w-full mt-4"
          >
            <Button
              type="link"
              href={`/my/course`}
              className="px-5 py-3 text-lg bg-darkOrange text-white rounded-full w-full md:w-1/3 lg:w-1/4 flex justify-center"
            >
              Let's Check My Course
            </Button>
            <Button
              type="link"
              href="/"
              className="text-lg font-thin text-darkOrange"
            >
              Back to HomePage
            </Button>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default PaymentSucces;
