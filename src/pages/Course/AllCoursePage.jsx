import React, { useState } from "react";
import SideFilter from "../../components/SideFilter";
import TopFilter from "../../components/TopFilter";
import { Heading, Paragraph } from "../../components/Typography";
import CourseCard from "../../components/CourseCard";
import Button from "../../components/Button";
import { FunnelIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchInput from "../../components/SearchInput";

const AllCoursePage = () => {
  const [filterActive, setFilterActive] = useState(false);

  const handleFilter = () => {
    setFilterActive(!filterActive);
  };

  return (
    <div className="w-screen py-12 px-4 md:px-12 lg:p-24 bg-softGrey flex flex-col gap-4">
      <div className="grid grid-cols-3 items-center">
        <Heading variant="h3" className="text-darkGrey col-span-2">
          All Course's
        </Heading>
        <div className="col-span-1 flex gap-2">
          <Button className="bg-darkOrange rounded-full min-w-fit px-5 text-white text-sm">
            My Class
          </Button>
          <SearchInput text="darkGrey" border="border-2" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 ">
        <div
          className={`fixed lg:static right-4 transition-opacity duration-500 lg:duration-0 ease-in-out z-30 ${
            filterActive
              ? "opacity-100 pointer-events-auto "
              : "opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto"
          } `}
        >
          <div
            className={`transform  transition-transform duration-500 lg:duration-0 ease-in-out ${
              filterActive
                ? "translate-x-0"
                : "translate-x-full lg:translate-x-0"
            }`}
          >
            <SideFilter onClick={handleFilter} />
          </div>
        </div>
        <div className="col-span-4 lg:col-span-3 flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div className="grid lg:hidden">
                {filterActive ? (
                  <Button
                    onClick={handleFilter}
                    isSolidWhite
                    className=" rounded-full transition-all duration-300 w-fit flex justify-center items-center gap-1 !px-2"
                  >
                    <XMarkIcon className="h-5 w-5" strokeWidth={2} />
                  </Button>
                ) : (
                  <Button
                    onClick={handleFilter}
                    isSolidWhite
                    className="rounded-full transition-all duration-300 w-fit flex justify-center items-center gap-1"
                  >
                    <FunnelIcon className="h-4 w-4" /> Filter
                  </Button>
                )}
              </div>
              <TopFilter buttonNames={["All", "Premium", "Free"]} />
            </div>
            <Paragraph variant="small" className="text-darkGrey font-medium">
              Result for{" "}
              <span className=" italic underline">
                Top New, UI/UX Design, Advanced Level
              </span>
            </Paragraph>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCoursePage;
