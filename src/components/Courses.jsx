import React, { useEffect, useState } from "react";
import { Heading, Paragraph } from "./Typography";
import { ChevronDownIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import SearchInput from "./SearchInput";
import CourseCard from "./CourseCard";
import { courseCategoriesAct } from "../redux/actions/courseActions/courseCategories";
import { courseCategoriesIdAct } from "../redux/actions/courseActions/courseCategoriesId";
import { useParams } from "react-router-dom";

const categoryMap = {
  1: "UI/UX Design",
  2: "Web Development",
  3: "Android Development",
  4: "Data Science",
  5: "Business Intelligence",
};

const Courses = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const baseDataCourse = useSelector((store) => store.course.courses);
  const [dataCourse, setDataCourse] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const categoriesData = useSelector((store) => store.course.categories);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const params = useParams();

  const title = categoryMap[params.id] || "Category";

  useEffect(() => {
    getCategoriesData();
    getCoursesByCategoriesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const dispatch = useDispatch();

  const getCategoriesData = async () => {
    await dispatch(courseCategoriesAct());
  };

  const getCoursesByCategoriesData = async () => {
    const result = await dispatch(courseCategoriesIdAct(params.id));
    setDataCourse(result);
  };

  useEffect(() => {
    const filtered = baseDataCourse.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDataCourse(filtered);
  }, [searchTerm, baseDataCourse]);

  return (
    <div className="w-screen min-h-screen py-24 px-4 md:px-12 lg:px-24 lg:pt-28 bg-softGrey flex flex-col gap-4">
      <div className="grid grid-cols-3 items-center relative">
        <Heading
          variant="h3"
          className="text-darkGrey col-span-2 flex w-[90%] gap-2 items-center cursor-pointer"
          onClick={toggleDropdown}
        >
          {title ? title : "All"}{" "}
          <span className="hidden md:flex ml-2 ">Course's</span>
          <ChevronDownIcon className="w-5 h-5 mt-1" strokeWidth={2} />
        </Heading>
        <div className="col-span-1 flex gap-2">
          {showDropdown && (
            <div className="py-2 px-2 absolute bg-white z-40 left-[9.5rem] top-10 shadow-xl rounded-xl flex flex-col gap-1 items-center min-w-fit ">
              {categoriesData.map((category) => (
                <Button
                  type="link"
                  href={`/course/category/${category.id}`}
                  onClick={() => setShowDropdown(false)}
                  className={`${
                    category.name_categories === title
                      ? "bg-darkOrange text-white"
                      : "bg-white text-darkGrey"
                  } hover:bg-darkOrange rounded-md w-full px-3 !py-2  hover:text-white text-sm flex items-center gap-1`}
                  key={category.id}
                >
                  <ListBulletIcon className="w-5 h-5" />
                  <span>{category.name_categories}</span>
                </Button>
              ))}
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
      {dataCourse.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {dataCourse.map((course) => (
            <CourseCard key={course.id} course={course} isMyClass={false} />
          ))}
        </div>
      ) : (
        <div className="justify-start items-center flex">
          <Paragraph className="text-darkGrey capitalize">
            Sorry, courses with category {title} are not available yet
          </Paragraph>
        </div>
      )}
    </div>
  );
};

export default Courses;
