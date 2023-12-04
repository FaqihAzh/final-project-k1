import React from 'react'
import { Heading } from '../Typography'
import FadeIn from '../FadeIn'
import Button from '../Button'
import check_email2 from "../../assets/images/checkEmailIllustration.png";

const CheckEmail = () => {
  return (
    <>
      <div className="bg-softGrey pt-10 flex flex-col justify-center gap-24 w-screen min-h-screen">
        <FadeIn
          delay={0.3}
          direction="down"
          className="flex flex-col items-center gap-4"
        >
          <Heading variant="h2">Check Your Email!</Heading>
          <img
            src={check_email2}
            alt="checkEmailIllustration"
            className="w-[70%] lg:w-[20%]"
          />
          <span className="text-darkGrey text-xl text-center px-2 md:px-0">
            We have sent a password recover to your email
          </span>
        </FadeIn>

        <FadeIn
          delay={0.3}
          direction="up"
          className="flex flex-col items-center gap-4"
        >
          <Button 
            type="link"
            href="/login" 
            className="px-5 py-3 bg-darkOrange text-white rounded-full md:w-1/4 text-center">
              Back to login
          </Button>
        </FadeIn>
      </div>
    </>
  )
}

export default CheckEmail