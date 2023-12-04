import React from "react";
import FadeIn from "./FadeIn";
import succes from "../../src/assets/images/paymentSuccessIllustration.png";
import { Heading } from "./Typography";
import Button from "./Button";

const PaymentSucces = () => {
  return (
    <>
      <div className="bg-softGrey pt-10 flex flex-col justify-center gap-24 w-screen min-h-screen">
        <FadeIn
          delay={0.3}
          direction="down"
          className="flex flex-col items-center gap-4"
        >
          <Heading variant="h2">Congratulations!</Heading>
          <img
            src={succes}
            alt="SuccessIllustration"
            className="w-[80%] lg:w-[30%]"
          />
          <span className="text-darkGrey font-bold text-center">
            Premium class payment transaction successful!
          </span>
          <span className="text-darkGrey">
            E-receipt has been sent to email
          </span>
        </FadeIn>

        <FadeIn
          delay={0.3}
          direction="up"
          className="flex flex-col items-center gap-4"
        >
          <Button className="px-5 py-3 bg-darkOrange text-white rounded-full md:w-1/4">
            Start Learning
          </Button>
          <Button type="link" href="/" className="text-sm text-darkOrange">
            Back to HomePage
          </Button>
        </FadeIn>
      </div>
    </>
  );
};

export default PaymentSucces;
