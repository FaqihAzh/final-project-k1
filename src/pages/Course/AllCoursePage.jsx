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
import {
  courseAllCoursesAct,
  courseCoursesMeAct,
} from "../../redux/actions/courseActions/courseCourses";
import {
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} from "../../redux/reducers/courseSlice/courseSlice";
import FadeIn from "../../components/FadeIn";
import notFound from "../../assets/images/notFoundSearch.png";

const AllCoursePage = () => {
  const [filterActive, setFilterActive] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showingCourses, setShowingCourses] = useState(6);

  const dataCourse = useSelector((store) => store.course.courses);
  const dataMyCourse = useSelector((store) => store.course.myCourses);
  const token = CookieStorage.get(CookieKeys.AuthToken);

  const [filteredCourses, setFilteredCourses] = useState(dataCourse);
  const [searchTerm, setSearchTerm] = useState("");
  const isLogin = token ? true : false;

  const [priceFilter, setPriceFilter] = useState("All");

  const filterCoursesNotInMyCourses = () => {
    return filteredCourses.filter((course) => {
      const foundCourse = dataMyCourse.find(
        (myCourse) => myCourse.id === course.id
      );
      return !foundCourse;
    });
  };

  const coursesNotInMyCourses = filterCoursesNotInMyCourses();

  const filterByPrice = (priceType) => {
    setPriceFilter(priceType);
  };

  const handleFilter = () => {
    setFilterActive(!filterActive);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    setFilteredCourses(dataCourse);
  }, []);

  useEffect(() => {
    dispatch(setIsMyCourse(false));
    dispatch(setIsNotif(false));
    dispatch(setIsProfile(false));
    getCoursesData();
    getMyCoursesData();
  }, []);

  useEffect(() => {
    const filtered = dataCourse.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchTerm, dataCourse]);

  const dispatch = useDispatch();

  const getCoursesData = async () => {
    await dispatch(courseAllCoursesAct());
  };

  const getMyCoursesData = async () => {
    await dispatch(courseCoursesMeAct());
  };

  const loadMore = () => {
    setShowingCourses(showingCourses + 6);
  };

  const showLess = () => {
    if (showingCourses > 6) {
      setShowingCourses(showingCourses - 6);
    }
  };

  return (
    <>
      <div className="w-screen min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-24 lg:pt-28 bg-softGrey flex flex-col gap-4 overflow-hidden">
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
              <div className="py-2 px-2 absolute bg-white z-40 left-[6.5rem] top-10 shadow-xl rounded-xl flex flex-col gap-1 items-center min-w-fit ">
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
            <SearchInput
              text="darkGrey"
              border="border-2"
              isCourse={true}
              searchTerm={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-4 gap-8 ">
          <div
            className={`fixed lg:static right-4 top-24 md:top-auto transition-opacity duration-500 lg:duration-0 ease-in-out z-30 ${
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
                isMyCourse={false}
                courses={dataCourse}
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
                {coursesNotInMyCourses
                  .slice(0, showingCourses)
                  .map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      isMyClass={false}
                    />
                  ))}
              </div>
            ) : (
              <div className="justify-center items-center flex flex-col h-full">
                <img src={notFound} alt="notFound" />
                <Paragraph className="text-darkGrey capitalize">
                  Sorry, the course with that filter is not available yet
                </Paragraph>
              </div>
            )}
            <div className="flex justify-center gap-2">
              {filteredCourses.length > showingCourses ? (
                <div className="flex justify-center">
                  <Button
                    onClick={loadMore}
                    className="text-sm text-white bg-darkOrange px-4 py-2 rounded-full shadow-md hover:scale-105"
                  >
                    Load More
                  </Button>
                </div>
              ) : null}{" "}
              {showingCourses > 6 && (
                <div className="flex justify-center">
                  <Button
                    onClick={showLess}
                    className="text-sm text-darkOrange bg-white px-4 py-2 rounded-full shadow-md hover:scale-105"
                  >
                    Show Less
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCoursePage;
