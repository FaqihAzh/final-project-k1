import React from "react";
import {
  ComputerDesktopIcon,
  ClipboardDocumentCheckIcon,
  MapPinIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { Paragraph } from "./Typography";
import FadeIn from "./FadeIn";

const Advantages = () => {
  return (
    <>
      <div className=" bg-softGrey w-full">
        <div className="px-4 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row items-center md:items-center gap-4 justify-around md:justify-between flex-wrap max-w-[1440px] mx-auto">
          <FadeIn
            delay={0.2}
            direction="right"
            className="flex flex-col md:flex-row gap-2 items-center"
          >
            <div className="flex justify-center items-center rounded-full bg-gradient-to-b from-turquoise to-seaGreen p-3">
              <ComputerDesktopIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <Paragraph
                variant="small"
                className="font-semibold text-darkGrey opacity-90"
              >
                Learn The Latest Skills
              </Paragraph>
              <Paragraph className="text-xs font-thin text-lightGrey">
                Most Up to Date Materials
              </Paragraph>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.1}
            direction="right"
            className="flex flex-col md:flex-row gap-2 items-center"
          >
            <div className="flex justify-center items-center rounded-full bg-gradient-to-b from-[#A988F9] to-[#6D3AE9] p-3">
              <ClipboardDocumentCheckIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <Paragraph
                variant="small"
                className="font-semibold text-darkGrey opacity-90"
              >
                Get Ready for Career
              </Paragraph>
              <Paragraph className="text-xs font-thin text-lightGrey">
                Prepare your Career
              </Paragraph>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.1}
            direction="left"
            className="flex flex-col md:flex-row gap-2 items-center"
          >
            <div className="flex justify-center items-center rounded-full bg-gradient-to-b from-palePink to-salmon p-3">
              <MapPinIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <Paragraph
                variant="small"
                className="font-semibold text-darkGrey opacity-90"
              >
                Everytime, Everywhere
              </Paragraph>
              <Paragraph className="text-xs font-thin text-lightGrey">
                Very Easy Learning
              </Paragraph>
            </div>
          </FadeIn>
          <FadeIn
            delay={0.2}
            direction="left"
            className="flex flex-col md:flex-row gap-2 items-center"
          >
            <div className="flex justify-center items-center rounded-full bg-gradient-to-b from-[#92DAF0] to-[#21C9FF] p-3">
              <CheckBadgeIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start">
              <Paragraph
                variant="small"
                className="font-semibold text-darkGrey opacity-90"
              >
                Greatest Mentor
              </Paragraph>
              <Paragraph className="text-xs font-thin text-lightGrey">
                Learn from greatest mentor
              </Paragraph>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
};

export default Advantages;
