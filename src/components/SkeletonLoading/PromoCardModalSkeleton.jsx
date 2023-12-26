import React from "react";

const PromoCardModalSkeleton = ({ handleClosePromoModal }) => {
  const skeletonPromos = Array.from({ length: 4 }).map((_, index) => (
    <div
      key={index}
      className={`flex justify-between bg-softGrey p-4 rounded-2xl gap-4 items-center`}
    >
      <div className="flex gap-2">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <div className="h-5 bg-gray-300 rounded w-20"></div>
      </div>
      <div className="h-5 bg-gray-300 rounded w-14"></div>
    </div>
  ));

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center fixed inset-0 bg-darkGrey bg-opacity-70">
      <div className="bg-white rounded-3xl p-12 relative">
        <div className="flex flex-col gap-4">
          <div className="h-8 bg-gray-300  rounded-xl"></div>
          <div className="flex flex-col gap-4">{skeletonPromos}</div>
          <button className="h-8 bg-gray-300  rounded-full hover:scale-105"></button>
        </div>
      </div>
    </div>
  );
};

export default PromoCardModalSkeleton;
