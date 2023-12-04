import React from "react";
import { Heading, Paragraph } from "./Typography";
import { StarIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  BookOpenIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";

const CourseDetails = () => {
  return (
    <div className="w-full lg:w-3/5 flex flex-col gap-5">
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
        <div className="flex gap-4 flex-wrap mb-2">
          <span className="flex gap-1 items-center ">
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
        <Button
          isGreenGradient
          type="link"
          href="https://t.me/+jNP5OgpdfoplZDVl"
          isExternal
          target="_blank"
          className="w-full md:w-1/2 h-auto text-center"
        >
          Join grup Telegram
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-darkGrey w-full h-[10rem] md:h-[20rem] rounded-xl flex justify-center items-center">
          <PlayCircleIcon className="w-16 h-16 text-darkOrange"></PlayCircleIcon>
        </div>
        <div className="flex flex-row justify-end gap-4">
          <Button className="bg-darkOrange px-5 py-2 text-base rounded-full text-white hover:scale-105">
            Previous
          </Button>
          <Button className="bg-darkOrange px-5 py-2 text-base rounded-full text-white hover:scale-105">
            Next
          </Button>
        </div>
      </div>
      <div>
        <Paragraph className="font-medium text-darkGrey tracking-wide">
          About Course
        </Paragraph>
        <Paragraph className="text-xs font-normal text-lightGrey tracking-wide indent-6">
          Design system adalah kumpulan komponen design, code, ataupun
          dokumentasi yang dapat digunakan sebagai panduan utama yang
          memunginkan designer serta developer memiliki lebih banyak kontrol
          atas berbagai platform. Dengan hadirnya design system, dapat menjaga
          konsistensi tampilan user interface dan meningkatkan user experience
          menjadi lebih baik. Disisi bisnis, design system sangat berguna dalam
          menghemat waktu dan biaya ketika mengembangkan suatu produk.
          <br />
          Bersama mentor XXX, kita akan mempelajari design system dari mulai
          manfaat, alur kerja pembuatannya, tools yang digunakan, hingga pada
          akhirnya, kita akan membuat MVP dari design system. Selain itu, mentor
          juga akan menjelaskan berbagai resource yang dibutuhkan untuk mencari
          inspirasi mengenai design system
        </Paragraph>
      </div>
      <div>
        <Paragraph className="font-medium text-darkGrey tracking-wide">
          Requirements
        </Paragraph>
        <div className="flex gap-2 mt-2">
          <span className="bg-brightBlue text-cloudWhite p-3 rounded-full">
            React Dasar
          </span>
          <span className="bg-brightBlue text-cloudWhite p-3 rounded-full">
            Express
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
