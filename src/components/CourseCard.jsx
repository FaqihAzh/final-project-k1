import React, { useEffect, useState } from "react";
import { Paragraph } from "./Typography";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  BookOpenIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";
import { formatRupiah } from "../utils/constants/function";

const categoryMap = {
  1: "UI/UX Design",
  2: "Web Development",
  3: "Android Development",
  4: "Data Science",
  5: "Business Intelligence",
};

const CourseCard = ({ isMyClass, course, isPayment }) => {
  const [detailCourse, setDetailCourse] = useState([]);

  const categoryId = detailCourse.category_id;
  const category = categoryMap[categoryId] || "Unknown Category";

  useEffect(() => {
    getDetailCourseData();
  }, [course.id]);

  const dispatch = useDispatch();

  const getDetailCourseData = async () => {
    const result = await dispatch(courseDetailCourseAct(course.id));
    setDetailCourse(result);
  };

  const type = detailCourse.price !== 0 ? "Premium" : "Free";

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

  const coursePrice = formatRupiah(detailCourse?.price);

  return (
    <div
      className={`flex flex-col gap-2 ${
        isMyClass ? "p-3" : "pt-3 pl-3 pr-3 mt-4"
      } rounded-xl bg-white w-full shadow-xl relative`}
    >
      <div className="w-full">
        <img
          src="https://picsum.photos/300/150"
          alt=""
          className="rounded-lg w-full"
        />
        <span className="absolute top-4 right-4 bg-gradient-to-b from-paleOrange to-darkOrange bg-opacity-90 px-4 py-1 text-sm rounded-md text-white">
          {type}
        </span>
      </div>
      <div className="flex flex-col h-full justify-between">
        <div>
          <div className="flex justify-between items-center">
            <Paragraph className="text-xs font-medium text-lightGrey tracking-wide">
              {category}
            </Paragraph>
            <span className="flex items-center text-darkOrange">
              {[...Array(detailCourse?.ratings)].map((_, index) => (
                <StarIcon key={index} className="w-4 h-4" />
              ))}
            </span>
          </div>
          <div>
            <Paragraph className="font-medium text-darkGrey tracking-wide capitalize">
              {detailCourse?.title}
            </Paragraph>
            <Paragraph className="text-xs font-normal text-lightGrey tracking-wide">
              by <span className="capitalize">{detailCourse?.author}</span>
            </Paragraph>
            {isMyClass ? null : (
              <Paragraph className="font-medium text-darkOrange tracking-wide">
                {coursePrice}
              </Paragraph>
            )}
          </div>
        </div>
        <div className={`flex flex-col ${isPayment && "pb-2"}`}>
          <span className="border-b w-full border-dotted border-lightGrey my-2"></span>
          <div className="flex gap-x-4 gap-y-2 flex-wrap">
            <span className="flex gap-1 items-center">
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
              <Paragraph className="text-sm font-normal text-lightGrey capitalize">
                {detailCourse?.level}
              </Paragraph>
            </span>
          </div>
          {isMyClass ? (
            <div className="w-full flex outline outline-1 outline-softGrey rounded-full mt-2">
              <div className=" bg-darkOrange px-4 rounded-full w-9/12">
                <Paragraph className="text-xs font-normal text-white tracking-wide">
                  75%
                </Paragraph>
              </div>
            </div>
          ) : (
            !isPayment && (
              <div className="flex justify-center items center relative -bottom-4 -mt-2">
                <Button
                  type="link"
                  href={`/course/detail/${detailCourse?.id}`}
                  className="bg-darkOrange px-5 py-2 text-base rounded-full text-white hover:scale-105"
                >
                  Join Course
                </Button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
