import React, { useEffect, useState } from "react";
import { Paragraph } from "./Typography";
import { StarIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  BookOpenIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";

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
  // const detailCourse = useSelector((store) => store.course.courses)
  const [detailCourse, setDetailCourse] = useState([]);
  const [currentModule, setCurrentModule] = useState(null);

  const categoryId = detailCourse.category_id;
  const category = categoryMap[categoryId] || "Unknown Category";

  useEffect(() => {
    getDetailCourseData();
  }, [params.id]);

  const getDetailCourseData = async () => {
    const result = await dispatch(courseDetailCourseAct(params.id));
    setDetailCourse(result);
  };

  // const getDetailCourse = async () => {
  //   await dispatch(courseDetailCourseAct(params.id))
    
  // }

  // useEffect(()=> {
  //   getDetailCourse()
  // }, [params.id])

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
    <div className="w-full lg:w-3/5 flex flex-col gap-5">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <Paragraph className="text-xs font-medium text-lightGrey tracking-wide">
            {category}
          </Paragraph>
          <span className="flex items-center text-darkOrange">
            {[...Array(detailCourse.ratings)].map((_, index) => (
              <StarIcon key={index} className="w-4 h-4" />
            ))}
          </span>
        </div>
        <Paragraph className="font-medium text-darkGrey tracking-wide">
          {detailCourse.title}
        </Paragraph>
        <Paragraph className="text-xs font-normal text-lightGrey tracking-wide">
          by {detailCourse.author}
        </Paragraph>
        <div className="flex gap-4 flex-wrap mb-2">
          <span className="flex gap-1 items-center ">
            <ClockIcon className="w-4 h-4 text-darkOrange" strokeWidth="2" />
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
            <Paragraph className="text-sm font-normal text-lightGrey">
              {detailCourse.level}
            </Paragraph>
          </span>
        </div>
        <Button
          isOrangeGradient
          type="link"
          href="https://t.me/+jNP5OgpdfoplZDVl"
          isExternal
          target="_blank"
          className="w-full md:w-1/2 text-center hover:scale-105 "
        >
          Join grup Telegram
        </Button>
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="bg-darkGrey w-full h-[10rem] md:h-[20rem] rounded-xl flex justify-center items-center">
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
              onClick={() => handlePlayIconClick(detailCourse.chapters[0]?.modules[0])}
            />
          )}
        </div>
        <div className="flex flex-row justify-end gap-4">
          <Button className="bg-darkOrange px-5 py-2 text-base rounded-full text-white hover:scale-105">
            Previous
          </Button>
          <Button className="bg-darkOrange px-5 py-2 text-base rounded-full text-white hover:scale-105">
            Next
          </Button>
        </div>
      </div>
      <div>
        <Paragraph className="font-medium text-darkGrey tracking-wide">
          About Course
        </Paragraph>
        <Paragraph className="text-xs font-normal text-lightGrey tracking-wide indent-6">
          {detailCourse.description}
        </Paragraph>
      </div>
      <div>
        <Paragraph className="font-medium text-darkGrey tracking-wide">
          Requirements
        </Paragraph>
        <div className="flex gap-2 mt-2">
          {detailCourse && detailCourse.requirements ? (
            detailCourse.requirements.map((requirement, index) => (
              <span
                key={index}
                className="bg-brightBlue text-cloudWhite p-3 rounded-full"
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
  );
};

export default CourseDetails;
