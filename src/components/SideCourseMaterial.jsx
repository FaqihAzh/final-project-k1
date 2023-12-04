import React from "react";
import { Heading, Paragraph } from "./Typography";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

const SideCourseMaterial = () => {
  return (
    <div className="flex flex-col w-full lg:w-2/5 h-1/2 gap-4">
      <div className="rounded-2xl px-6 py-5 flex flex-col gap-4 bg-white shadow-xl">
        <div className="grid grid-cols-2 gap-2">
          <Paragraph className="font-medium text-darkGrey tracking-wide">
            Course Material
          </Paragraph>
          <div className="flex w-full outline outline-1 outline-softGrey rounded-full">
            <div className=" bg-darkOrange px-4 rounded-full w-9/12">
              <Paragraph className="text-xs font-normal text-white tracking-wide">
                75%
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center justify-between">
          <Paragraph className="text-sm font-normal text-darkOrange tracking-wide">
            Chapter 1 - Pendahuluan
          </Paragraph>
          <Paragraph className="text-sm font-normal text-darkOrange tracking-wide text-end">
            60 menit
          </Paragraph>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-7 h-7 rounded-full flex justify-center items-center bg-softGrey">
            <p>1</p>
          </div>
          <Paragraph className="text-sm font-normal text-darkGrey tracking-wide flex-1">
            Tujuan mengikuti kelas design system
          </Paragraph>
          <PlayCircleIcon className="w-6 h-6 text-seaGreen" />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-7 h-7 rounded-full flex justify-center items-center bg-softGrey">
            <p>2</p>
          </div>
          <Paragraph className="text-sm font-normal text-darkGrey tracking-wide flex-1">
            Pengenalan Design System
          </Paragraph>
          <PlayCircleIcon className="w-6 h-6 text-seaGreen" />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-7 h-7 rounded-full flex justify-center items-center bg-softGrey">
            <p>3</p>
          </div>
          <Paragraph className="text-sm font-normal text-darkGrey tracking-wide flex-1">
            Tujuan mengikuti kelas design system
          </Paragraph>
          <PlayCircleIcon className="w-6 h-6 text-brightBlue" />
        </div>
        <div className="flex flex-row gap-3 items-center justify-between">
          <Paragraph className="text-sm font-normal text-darkOrange tracking-wide">
            Chapter 2 - Lanjutan
          </Paragraph>
          <Paragraph className="text-sm font-normal text-darkOrange tracking-wide text-center">
            60 menit
          </Paragraph>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-7 h-7 rounded-full flex justify-center items-center bg-softGrey">
            <p>1</p>
          </div>
          <Paragraph className="text-sm font-normal text-darkGrey tracking-wide flex-1">
            Color Palette
          </Paragraph>
          <LockClosedIcon className="w-6 h-6 text-lightGrey " />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-7 h-7 rounded-full flex justify-center items-center bg-softGrey">
            <p>2</p>
          </div>
          <Paragraph className="text-sm font-normal text-darkGrey tracking-wide flex-1">
            Typography, Layout dan Grid
          </Paragraph>
          <LockClosedIcon className="w-6 h-6 text-lightGrey " />
        </div>
        <div className="flex flex-row gap-3 items-center">
          <div className="w-7 h-7 rounded-full flex justify-center items-center bg-softGrey">
            <p>3</p>
          </div>
          <Paragraph className="text-sm font-normal text-darkGrey tracking-wide flex-1">
            Color Palette
          </Paragraph>
          <LockClosedIcon className="w-6 h-6 text-lightGrey " />
        </div>
      </div>
      <div>
        <Button className="bg-darkOrange px-5 py-2 text-base rounded-full text-white hover:scale-105 md:w-1/2 h-auto text-center">
          Buy Course
        </Button>
      </div>
    </div>
  );
};

export default SideCourseMaterial;
