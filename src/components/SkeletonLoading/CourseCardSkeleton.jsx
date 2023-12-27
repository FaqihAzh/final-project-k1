import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const CourseCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl bg-white w-full shadow-xl relative animate-pulse">
      <div className="w-full rounded-lg min-h-[150px] max-h-[150px] bg-gray-300"></div>
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-center">
            <div className="w-20 h-4 bg-gray-300 rounded mb-1"></div>
            <span className="flex items-center text-bg-gray-300">
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
              <StarIcon className="w-4 h-4" />
            </span>
          </div>
          <div>
            <div className="w-32 h-4 bg-gray-300 rounded"></div>
            <div className="w-24 h-4 bg-gray-300 rounded mt-1"></div>
            <div className="w-32 h-4 bg-gray-300 rounded mt-1"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border-b w-full border-dotted border-lightGrey my-2"></div>
          <div className="flex gap-x-4 gap-y-2">
            <div className="flex gap-1 items-center">
              <div className="w-4 h-4 bg-gray-300"></div>
              <div className="w-10 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="flex gap-1 items-center text-bg-gray-300">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <div className="w-10 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="flex gap-1 items-center text-bg-gray-300">
              <div className="w-4 h-4 bg-gray-300 rounded"></div>
              <div className="w-10 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
          <div className="w-16 h-4 bg-gray-300 rounded mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
