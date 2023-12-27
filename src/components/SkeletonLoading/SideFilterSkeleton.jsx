import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const SideFilterSkeleton = () => {
  return (
    <div className="shadow-none lg:shadow-md relative flex flex-col justify-center items-start px-8 py-6 gap-5 rounded-xl bg-white h-max w-full animate-pulse">
      <div className="flex flex-col gap-3 justify-center items-start w-full">
        <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-start w-full">
        <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-start w-full">
        <div className="w-1/2 h-4 bg-gray-400 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
        <div className="w-full h-4 bg-gray-300 rounded"></div>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-full h-8 bg-gray-300 rounded-full"></div>
      </div>
      <XMarkIcon className="flex lg:hidden absolute w-6 h-6 text-gray-300 top-4 right-4" />
    </div>
  );
};

export default SideFilterSkeleton;
