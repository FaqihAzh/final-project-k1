import React, { useEffect, useState } from "react";
import { Heading, Paragraph } from "./Typography";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useParams } from "react-router-dom";
import http from "../utils/constants/http";
import { API_ENDPOINT } from "../utils/constants/endpoint";
import CourseCard from "./CourseCard";
import { useDispatch } from "react-redux";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";
import { formatRupiah } from "../utils/constants/function";

const SideCourseMaterial = () => {
  const params = useParams();
  const [detailCourse, setDetailCourse] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getDetailCourseData();
  }, [params.id]);

  const dispatch = useDispatch();

  const getDetailCourseData = async () => {
    const result = await dispatch(courseDetailCourseAct(params.id));
    setDetailCourse(result);
  };

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
  const coursePrice = formatRupiah(detailCourse.price);

  const handleBuyCourseClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex flex-col w-full lg:w-2/5 h-1/2 gap-4">
      <div className="rounded-2xl px-6 py-5 flex flex-col gap-4 bg-white shadow-xl">
        <div className="grid grid-cols-2 gap-2">
          <Paragraph className="font-medium text-darkGrey tracking-wide">
            Course Material
          </Paragraph>
          <div className="flex w-full outline outline-1 outline-softGrey rounded-full">
            <div className=" bg-darkOrange px-4 rounded-full w-9/12">
              <Paragraph className="text-xs font-normal text-white tracking-wide">
                75%
              </Paragraph>
            </div>
          </div>
        </div>
        {detailCourse.chapters &&
          detailCourse.chapters.map((chapter) => (
            <div key={chapter.id} className="flex flex-col gap-3">
              <div className="flex flex-row gap-3 items-center justify-between">
                <Paragraph className="text-sm font-normal text-darkOrange tracking-wide">
                  {chapter.name}
                </Paragraph>
                <Paragraph className="text-sm font-normal text-darkOrange tracking-wide text-end">
                  {totalDuration} Menit
                </Paragraph>
              </div>

              {chapter.modules.map((module, subIndex) => (
                <div
                  key={subIndex}
                  className="flex flex-row gap-3 items-center"
                >
                  <div className="w-7 h-7 rounded-full flex justify-center items-center bg-softGrey">
                    <p>{subIndex + 1}</p>
                  </div>
                  <Paragraph className="text-sm font-normal text-darkGrey tracking-wide flex-1">
                    {module.title}
                  </Paragraph>
                  <PlayCircleIcon className="w-6 h-6 text-brightBlue" />
                </div>
              ))}
            </div>
          ))}
      </div>
      <div>
        <Button
          isOrangeGradient
          className="w-full md:w-1/2 text-center hover:scale-105"
          onClick={handleBuyCourseClick}
        >
          Buy Course
        </Button>
      </div>
      {isModalOpen && detailCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white pr-6 pl-6 pb-6 pt-2  rounded-xl relative">
            <div className="flex flex-col items-end absolute -top-8 -right-8">
              <XCircleIcon
                className="text-white hover:text-paleOrange w-9 h-9 cursor-pointer"
                strokeWidth={1}
                onClick={handleCloseModal}
              ></XCircleIcon>
            </div>
            <CourseCard course={detailCourse} isPayment={true} />
            <div className="flex mt-4">
              <Button
                isOrangeGradient
                type="link"
                href={`/payment/${detailCourse?.id}`}
                className="w-full text-center"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideCourseMaterial;
