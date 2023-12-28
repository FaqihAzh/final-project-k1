import React from "react";

const NotificationSkeleton = () => {
  const skeletonItems = Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="grid grid-cols-12 py-4 px-6 md:px-8 gap-2 rounded-2xl bg-white animate-pulse"
    >
      <div className="col-span-9 flex gap-4 items-center">
        <div className="hidden md:flex w-7 h-7 p-1 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col justify-center w-full">
          <div className="h-5 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6 mt-1"></div>
          <div className="h-3 bg-gray-300 rounded w-1/4 mt-1"></div>
        </div>
      </div>
      <div className="col-span-3 flex items-center justify-end">
        <div className="flex justify-end">
          <div className="w-7 h-7 p-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="bg-softGrey flex flex-col items-center py-20 md:py-32 px-4 md:px-12 lg:px-24 w-screen min-h-screen">
      <div className="flex flex-col rounded-xl w-full gap-4 pb-6">
        {skeletonItems}
      </div>
    </div>
  );
};

export default NotificationSkeleton;
