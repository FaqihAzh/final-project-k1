import React from "react";

const LearningCourseSkeleton = () => {
  const skeletonChapters = Array.from({ length: 4 }).map((_, chapterIndex) => (
    <div key={chapterIndex} className="flex flex-col gap-2">
      <div className="flex flex-row gap-3 items-center justify-between">
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>
      {Array.from({ length: 4 }).map((_, subIndex) => (
        <div
          key={subIndex}
          className="flex flex-row gap-3 items-center bg-gray-200 h-5 rounded-xl cursor-pointer"
        ></div>
      ))}
    </div>
  ));

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center pt-24 px-4 lg:px-24 bg-softGrey pb-0 md:pb-6 gap-4 lg:gap-12 h-screen">
      <div className="w-full lg:w-[30%] bg-white rounded-b-none rounded-t-3xl md:rounded-3xl p-6 flex flex-col gap-5 overflow-y-scroll h-full relative">
        {skeletonChapters}
      </div>
      <div className="w-full lg:w-[70%] aspect-video flex flex-col gap-2">
        <div className="w-full h-full flex flex-col gap-4">
          <div className="h-10 bg-gray-300 rounded w-2/3"></div>
          <div className="h-full bg-gray-300 rounded-2xl"></div>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4 justify-between">
          <div className="flex flex-row gap-2">
            <div className="h-10 bg-gray-300 rounded w-32"></div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="h-10 bg-gray-300 rounded w-32"></div>
            <div className="h-10 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCourseSkeleton;
