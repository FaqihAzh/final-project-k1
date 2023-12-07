import React, { useEffect, useState } from "react";
import { Heading, Paragraph } from "./Typography";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useParams } from "react-router-dom";
import http from "../utils/constants/http";
import { API_ENDPOINT } from "../utils/constants/endpoint";
import CourseCard from "./CourseCard";

const SideCourseMaterial = () => {
  const courseId = useParams();
  const [courseDetail, setcourseDetail] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const getCourseDetail = async () => {
    const response = await http.get(
      API_ENDPOINT.COURSE_DETAIL(courseId.courseId)
    );
    setcourseDetail(response.data.data);
  };

  useEffect(() => {
    getCourseDetail();
  }, [courseId.courseId]);

  if (!courseDetail || !courseDetail.chapters) {
    return null;
  }

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

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
        {courseDetail.chapters.map((chapter, index) => (
          <div key={index} className="flex flex-col gap-3">
            <div className="flex flex-row gap-3 items-center justify-between">
              <Paragraph className="text-sm font-normal text-darkOrange tracking-wide">
                {`Chapter ${index + 1} - ${chapter.name}`}
              </Paragraph>
              <Paragraph className="text-sm font-normal text-darkOrange tracking-wide text-end">
                {`${chapter.modules.reduce(
                  (totalDuration, module) =>
                    totalDuration + (module.duration ? module.duration : 0),
                  0
                )} menit`}
              </Paragraph>
            </div>
            {chapter.modules.map((module, subIndex) => (
              <div key={subIndex} className="flex flex-row gap-3 items-center">
                <div className="w-7 h-7 rounded-full flex justify-center items-center bg-softGrey">
                  <p>{subIndex + 1}</p>
                </div>
                <Paragraph className="text-sm font-normal text-darkGrey tracking-wide flex-1">
                  {module.title}
                </Paragraph>
                {module.duration && (
              <div
                className="w-6 h-6 text-seaGreen cursor-pointer"
                onClick={handlePlayClick}
              >
                <PlayCircleIcon />
              </div>
            )}
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md">
            <div className="flex flex-col items-end">
            <XCircleIcon
              className="text-darkGrey hover:text-lightGrey w-7 h-7"
              onClick={handleCloseModal}
            >
            </XCircleIcon>
            </div>
              <Heading variant="h3" className="text-center">Selangkah lagi menuju</Heading>
              <Heading variant="h3" className="text-darkOrange text-center">Kelas premium</Heading>
              <CourseCard />
              <Button isOrangeGradient className="w-full">
                Beli Sekarang
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideCourseMaterial;
