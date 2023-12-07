import React from "react";
import Button from "./Button";

const Pagination = ({ page, setPage }) => {
  const handleIncrement = () => {
    setPage((prevPage) => (prevPage < 1 ? prevPage + 1 : 1));
  };

  const handleDecrement = () => {
    setPage((prevPage) => (prevPage > -1 ? prevPage - 1 : -1));
  };
  return (
    <div className="w-full py-4 flex items-center justify-center">
      <div className="flex gap-2">
        {page > 1 && (
          <Button
            onClick={handleDecrement}
            className="transition-all duration-300 bg-darkOrange text-white hover:bg-white hover:text-darkGrey text-sm py-2 px-8 rounded-full"
          >
            Prev {page - 1}
          </Button>
        )}
        <Button className="transition-all duration-300 bg-darkOrange text-white text-sm py-2 px-4 rounded-full !cursor-none">
          {page}
        </Button>
        <Button
          onClick={handleIncrement}
          className="transition-all duration-300 bg-darkOrange text-white hover:bg-white hover:text-darkGrey text-sm py-2 px-8 rounded-full"
        >
          Next {page + 1}
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
