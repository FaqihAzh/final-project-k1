import React from "react";

const TopFilterSkeleton = () => {
  return (
    <div className="w-full flex gap-2 md:gap-4 animate-pulse">
      <div className="flex-1 h-8 bg-gray-300 rounded-full"></div>
      <div className="flex-1 h-8 bg-gray-300 rounded-full"></div>
      <div className="flex-1 h-8 bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default TopFilterSkeleton;
