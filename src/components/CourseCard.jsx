import React, { useState } from "react";
import { Paragraph } from "./Typography";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  BookOpenIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";

const CourseCard = () => {
  const [isMyClass, setIsMyClass] = useState(true);

  return (
    <div
      className={`flex flex-col gap-2 ${
        isMyClass ? "p-3" : "pt-3 pl-3 pr-3 mt-4"
      } rounded-xl bg-white w-full shadow-xl relative`}
    >
      <div className="w-full">
        <img
          src="https://picsum.photos/300/150"
          alt=""
          className="rounded-lg w-full"
        />
        <span className="absolute top-4 right-4 bg-gradient-to-b from-paleOrange to-darkOrange bg-opacity-90 px-4 py-1 text-sm rounded-md text-white">
          Premium
        </span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <Paragraph className="text-xs font-medium text-lightGrey tracking-wide">
            UI/UX Design
          </Paragraph>
          <span className="flex items-center text-darkOrange">
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
          </span>
        </div>
        <Paragraph className="font-medium text-darkGrey tracking-wide">
          UI/UX Design for Beginners
        </Paragraph>
        <Paragraph className="text-xs font-normal text-lightGrey tracking-wide">
          by Felicia Shue
        </Paragraph>
        {isMyClass ? null : (
          <Paragraph className="font-medium text-darkOrange tracking-wide">
            Rp 250.000
          </Paragraph>
        )}
        <span className="border-b w-full border-dotted border-lightGrey my-2"></span>
        <div className="flex gap-x-4 gap-y-2 flex-wrap">
          <span className="flex gap-1 items-center">
            <ClockIcon className="w-4 h-4 text-darkOrange" strokeWidth="2" />
            <Paragraph className="text-sm font-normal text-lightGrey">
              120 Menit
            </Paragraph>
          </span>
          <span className="flex gap-1 items-center text-darkOrange">
            <BookOpenIcon className="w-4 h-4" strokeWidth="2" />
            <Paragraph className="text-sm font-normal text-lightGrey">
              30 Modul
            </Paragraph>
          </span>
          <span className="flex gap-1 items-center text-darkOrange">
            <ChartBarIcon className="w-4 h-4" strokeWidth="2" />
            <Paragraph className="text-sm font-normal text-lightGrey">
              Intermediate
            </Paragraph>
          </span>
        </div>
        {isMyClass ? (
          <div className="w-full flex outline outline-1 outline-softGrey rounded-full mt-2">
            <div className=" bg-darkOrange px-4 rounded-full w-9/12">
              <Paragraph className="text-xs font-normal text-white tracking-wide">
                75%
              </Paragraph>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items center relative -bottom-4 -mt-2">
            <Button className="bg-darkOrange px-5 py-2 text-base rounded-full text-white hover:scale-105">
              Join Course
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
