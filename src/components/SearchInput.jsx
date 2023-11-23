import React from "react";
import Button from "./Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchInput = () => {
  return (
    <>
      <div className="relative flex items-center w-full">
        <input
          // ref={}
          type="text"
          name="search"
          autoComplete="none"
          placeholder="Search Course"
          aria-label="Search Course"
          className="w-full pl-4 pr-10 py-2 font-normal text-sm bg-transparent text-white placeholder-white rounded-full focus:outline-none border border-1 border-white"
          // value={}
          // onChange={}
        />
        <Button className="absolute right-4">
          <MagnifyingGlassIcon className="w-5 h-5 hover:scale-125 text-white" />
        </Button>
      </div>
    </>
  );
};

export default SearchInput;
