import React, { useEffect, useState } from "react";
import { Heading, Paragraph } from "./Typography";
import { StarIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  BookOpenIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";
import { useParams } from "react-router-dom";
import SideCourseMaterial from "./SideCourseMaterial";
import { courseRatingsAct } from "../redux/actions/courseActions/courseRatings";

const categoryMap = {
  1: "UI/UX Design",
  2: "Web Development",
  3: "Android Development",
  4: "Data Science",
  5: "Business Intelligence",
};

const CourseDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [detailCourse, setDetailCourse] = useState([]);
  const [currentModule, setCurrentModule] = useState(null);

  const categoryId = detailCourse.category_id;
  const category = categoryMap[categoryId] || "Unknown Category";

  const [ratingsCourse, setRatingsCourse] = useState(1);
  const rating = Math.round(ratingsCourse);

  useEffect(() => {
    getDetailCourseData();
    getRatingsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const getDetailCourseData = async () => {
    const result = await dispatch(courseDetailCourseAct(params.id));
    setDetailCourse(result);
  };

  const getRatingsData = async () => {
    const result = await dispatch(courseRatingsAct(params.id));
    setRatingsCourse(result.averageRatings);
  };

  useEffect(() => {
    if (
      detailCourse &&
      detailCourse.chapters &&
      detailCourse.chapters.length > 0
    ) {
      setCurrentModule(detailCourse.chapters[0]?.modules[0]);
    }
  }, [detailCourse]);

  let totalModules = 0;
  let totalDuration = 0;

  if (detailCourse && detailCourse.chapters) {
    detailCourse.chapters.forEach((chapter) => {
      if (chapter.modules) {
        totalModules += chapter.modules.length;

        chapter.modules.forEach((module) => {
          totalDuration += module.duration || 0;
        });
      }
    });
  }

  const handlePlayIconClick = (module) => {
    setCurrentModule(module);
  };

  return (
    <>
      <div className="w-full min-h-screen bg-softGrey">
        <div className="flex flex-col lg:flex-row pt-24 mt-0 md:mt-5 lg:mt-10 px-4 md:px-12 lg:px-24 pb-5 mb-0 gap-10 lg:gap-20 max-w-[1440px] mx-auto">
          <div className="w-full lg:w-3/5 flex flex-col gap-5">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <Paragraph className=" font-normal text-lightGrey tracking-wide">
                  {category}
                </Paragraph>
                <span className="flex items-center text-darkOrange">
                  {[...Array(rating)].map((_, index) => (
                    <StarIcon key={index} className="w-4 h-4" />
                  ))}
                </span>
              </div>
              <Heading
                variant="h3"
                className="font-semibold text-darkGrey tracking-wide capitalize mt-1"
              >
                {detailCourse.title
                  ? detailCourse.title
                  : "Frontend Javascript Developer"}
              </Heading>
              <Paragraph
                variant="small"
                className=" font-normal text-lightGrey tracking-wide"
              >
                by {detailCourse.author}
              </Paragraph>
              <div className="flex gap-4 flex-wrap my-2">
                <span className="flex gap-1 items-center ">
                  <ClockIcon
                    className="w-4 h-4 text-darkOrange"
                    strokeWidth="2"
                  />
                  <Paragraph className="text-sm font-normal text-lightGrey">
                    {totalDuration} Menit
                  </Paragraph>
                </span>
                <span className="flex gap-1 items-center text-darkOrange">
                  <BookOpenIcon className="w-4 h-4" strokeWidth="2" />
                  <Paragraph className="text-sm font-normal text-lightGrey">
                    {totalModules} Modul
                  </Paragraph>
                </span>
                <span className="flex gap-1 items-center text-darkOrange">
                  <ChartBarIcon className="w-4 h-4" strokeWidth="2" />
                  <Paragraph className="text-sm font-normal text-lightGrey capitalize">
                    {detailCourse.level}
                  </Paragraph>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 ">
              <div className="overflow-hidden bg-darkGrey w-full h-[12rem] md:h-[20rem] rounded-2xl flex justify-center items-center">
                {currentModule ? (
                  <ReactPlayer
                    url={currentModule.url}
                    controls
                    width="100%"
                    height="100%"
                  />
                ) : (
                  <PlayCircleIcon
                    className="w-16 h-16 text-darkOrange cursor-pointer"
                    onClick={() =>
                      handlePlayIconClick(detailCourse.chapters[0]?.modules[0])
                    }
                  />
                )}
              </div>
            </div>
            <div>
              <Paragraph
                variant="large"
                className=" font-semibold text-darkGrey tracking-wide"
              >
                {" "}
                About Course
              </Paragraph>
              <Paragraph className="font-thin text-sm md:text-base text-lightGrey tracking-wide">
                {detailCourse.description}
              </Paragraph>
            </div>
            <div>
              <Paragraph
                variant="large"
                className=" font-semibold text-darkGrey tracking-wide"
              >
                Requirements
              </Paragraph>
              <div className="flex gap-2 mt-2 flex-wrap truncate -mb-4 lg:mb-4">
                {detailCourse && detailCourse.requirements ? (
                  detailCourse.requirements.map((requirement, index) => (
                    <span
                      key={index}
                      className="bg-lightBlue bg-opacity-90 text-cloudWhite text-sm px-4 py-2 rounded-full truncate"
                    >
                      {requirement}
                    </span>
                  ))
                ) : (
                  <p>No requirements available</p>
                )}
              </div>
            </div>
          </div>
          <SideCourseMaterial />
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
