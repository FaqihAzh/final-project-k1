import React, { useEffect, useState } from "react";
import SideFilter from "../../components/SideFilter";
import TopFilter from "../../components/TopFilter";
import { Heading, Paragraph } from "../../components/Typography";
import CourseCard from "../../components/CourseCard";
import Button from "../../components/Button";
import {
  FunnelIcon,
  XMarkIcon,
  ListBulletIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import SearchInput from "../../components/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { CookieKeys, CookieStorage } from "../../utils/constants/cookies";
import { courseCoursesAct } from "../../redux/actions/courseActions/courseCourses";
import Pagination from "../../components/Pagination";

const AllCoursePage = () => {
  const [filterActive, setFilterActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const dataCourse = useSelector((store) => store.course.courses);
  const token = CookieStorage.get(CookieKeys.AuthToken);

  const [filteredCourses, setFilteredCourses] = useState(dataCourse);
  const isLogin = token ? true : false;

  const [priceFilter, setPriceFilter] = useState("All");

  const filterByPrice = (priceType) => {
    setPriceFilter(priceType);
  };

  const handleFilter = () => {
    setFilterActive(!filterActive);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [page, setPage] = useState(1);

  useEffect(() => {
    getCoursesData();
  }, [page, filteredCourses, priceFilter]);

  const dispatch = useDispatch();

  const getCoursesData = () => {
    dispatch(courseCoursesAct(page, 10));
  };

  return (
    <div className="w-screen min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-24 lg:pt-28 bg-softGrey flex flex-col gap-4">
      <div className="grid grid-cols-3 items-center relative">
        <Heading
          variant="h3"
          className="text-darkGrey col-span-2 flex gap-2 items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          All Course's{" "}
          <ChevronDownIcon className="w-5 h-5 mt-1" strokeWidth={2} />
        </Heading>
        <div className="col-span-1 flex gap-2">
          {showDropdown && (
            <div className="py-2 px-2 absolute bg-white z-40 left-[9.5rem] top-10 shadow-xl rounded-xl flex flex-col gap-1 items-center min-w-fit ">
              <Button
                type="link"
                href="/all/course"
                className="bg-darkOrange rounded-md w-full px-3 !py-2 text-white text-sm flex items-center gap-1"
              >
                <ListBulletIcon className="w-5 h-5" />
                <span>All Course</span>
              </Button>
              {isLogin && (
                <Button
                  type="link"
                  href="/my/course"
                  className="bg-white hover:bg-darkOrange rounded-md w-full px-3 !py-2 text-darkGrey hover:text-white text-sm flex items-center gap-1"
                >
                  <ListBulletIcon className="w-5 h-5" />
                  <span>My Course</span>
                </Button>
              )}
            </div>
          )}
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
            <SideFilter
              onClick={handleFilter}
              setFilteredCourses={setFilteredCourses}
              priceFilter={priceFilter}
            />
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
              <TopFilter
                buttonNames={["All", "Premium", "Free"]}
                setPriceFilter={filterByPrice}
              />
            </div>
          </div>
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} isMyClass={false} />
              ))}
            </div>
          ) : (
            <div className="justify-start items-center flex">
              <Paragraph className="text-darkGrey capitalize">
                Sorry, the course with that category is not available yet
              </Paragraph>
            </div>
          )}
          {filteredCourses.length >= 10 && (
            <Pagination page={page} setPage={setPage} />
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default AllCoursePage;