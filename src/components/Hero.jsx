import React from "react";
import { Heading, Paragraph } from "./Typography";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import orangeLineUp from "../assets/images/orangeLineUp.svg";
import orangeLineBottom from "../assets/images/orangeLineBottom.svg";
import headerIllustration from "../assets/images/headerIllustration.png";
import DecorationHeader from "../assets/images/DecorationHeader.png";
import Button from "./Button";
import FadeIn from "./FadeIn";

const Hero = () => {
  return (
    <>
      <div className="w-screen bg-lightBlue relative">
        <div className="max-w-[1440px] mx-auto flex flex-col-reverse lg:flex-row  py-24 px-4 md:px-12 lg:px-24 items-center gap-8 lg:gap-4 min-h-screen">
          <div className="flex flex-col gap-2 flex-1 items-center lg:items-start text-center lg:text-left z-40">
            <FadeIn delay={0.2} direction="down" fullWidth>
              <Paragraph
                variant="large"
                className="text-paleOrange font-normal tracking-[0.003rem]"
              >
                START TO SUCCESS
              </Paragraph>
            </FadeIn>
            <FadeIn delay={0.4} direction="down" fullWidth>
              <Heading variant="h1" className="text-white">
                <span className="flex flex-col">
                  Access To 5000+ Courses
                  <img
                    src={orangeLineUp}
                    alt="orangeLineUp"
                    className="relative -top-2 z-40 w-1/4 left-[10.5rem]"
                  />
                </span>
                <span className="flex flex-col">
                  from 300 Instructors
                  <img
                    src={orangeLineBottom}
                    alt="orangeLineBottom"
                    className="relative -top-2 z-40 w-1/5 left-20"
                  />
                </span>
                & Institutions
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph className="text-white tracking-wide font-thin">
                With CourseHub Empower Yourself, Learn Anywhere, Anytime!
              </Paragraph>
            </FadeIn>
            <FadeIn
              delay={0.4}
              direction="up"
              fullWidth
              className="flex justify-center lg:justify-start"
            >
              <Button
                type="link"
                href="/all/course"
                isOrangeGradient
                className="w-fit mt-3 !px-5 !py-3 !text-base flex gap-2 items-center"
              >
                <RocketLaunchIcon className="w-6 h-6 text-white" />
                Unlock Your Potential
              </Button>
            </FadeIn>
          </div>
          <div className="flex justify-center flex-1 z-40">
            <FadeIn
              delay={0.5}
              direction="down"
              fullWidth
              className="flex justify-center"
            >
              <img
                src={headerIllustration}
                alt="headerIllustration"
                className="w-[90%] md:w-[80%] lg:w-full h-auto"
              />
            </FadeIn>
          </div>
          <div className="w-full h-full absolute top-0 left-0 px-4 md:px-12 lg:px-24 z-30 pt-12 transition-opacity duration-5000 ease-in">
            <FadeIn delay={0.4} direction="up">
              <img src={DecorationHeader} alt="DecorationHeader" />
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
