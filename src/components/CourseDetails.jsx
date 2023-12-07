import React, { useEffect, useState } from "react";
import { Heading, Paragraph } from "./Typography";
import { StarIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  BookOpenIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import { useParams } from "react-router-dom";
import http from "../utils/constants/http";
import { API_ENDPOINT } from "../utils/constants/endpoint";
import ReactPlayer from "react-player";

const CourseDetails = ({noVideo}) => {
  const courseId = useParams();
  const [courseDetail, setcourseDetail] = useState("");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const getCourseDetail = async () => {
    const response = await http.get(
      API_ENDPOINT.COURSE_DETAIL(courseId.courseId)
    );
    setcourseDetail(response.data.data);
  };
  console.log(courseDetail, "datadata");

  useEffect(() => {
    getCourseDetail();
  }, [courseId.courseId]);

  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="w-full lg:w-3/5 flex flex-col gap-5">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <Paragraph className="text-xs font-medium text-lightGrey tracking-wide">
            {courseDetail.category_id}
          </Paragraph>
          <span className="flex items-center text-darkOrange">
            {/* <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" />
            <StarIcon className="w-4 h-4" /> */}
            <StarIcon className="w-4 h-4" />
            {courseDetail.ratings}
          </span>
        </div>
        <Paragraph className="font-medium text-darkGrey tracking-wide">
          {courseDetail.title}
        </Paragraph>
        <Paragraph className="text-xs font-normal text-lightGrey tracking-wide">
          by {courseDetail.author}
        </Paragraph>
        <div className="flex gap-4 flex-wrap mb-2">
          <span className="flex gap-1 items-center ">
            <ClockIcon className="w-4 h-4 text-darkOrange" strokeWidth="2" />
            <Paragraph className="text-sm font-normal text-lightGrey">
              {courseDetail.chapters && courseDetail.chapters.length > 0
                ? courseDetail.chapters.reduce(
                    (totalDuration, chapter) =>
                      totalDuration +
                      (chapter.modules
                        ? chapter.modules.reduce(
                            (moduleDuration, module) =>
                              moduleDuration +
                              (module.duration ? module.duration : 0),
                            0
                          )
                        : 0),
                    0
                  )
                : 0}{" "}
              Menit
            </Paragraph>
          </span>
          <span className="flex gap-1 items-center text-darkOrange">
            <BookOpenIcon className="w-4 h-4" strokeWidth="2" />
            <Paragraph className="text-sm font-normal text-lightGrey">
              {courseDetail.chapters && courseDetail.chapters.length > 0
                ? courseDetail.chapters.reduce(
                    (totalModules, chapter) =>
                      totalModules +
                      (chapter.modules ? chapter.modules.length : 0),
                    0
                  )
                : 0}{" "}
              Modul
            </Paragraph>
          </span>
          <span className="flex gap-1 items-center text-darkOrange">
            <ChartBarIcon className="w-4 h-4" strokeWidth="2" />
            <Paragraph className="text-sm font-normal text-lightGrey">
              {courseDetail.level}
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
        {isVideoPlaying ? (
          <div className="h-[10rem] md:h-[20rem]" >
            <ReactPlayer
              url={courseDetail.chapters[0].modules[0].url}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        ) : (
          <div
            className="bg-darkGrey h-[10rem] md:h-[20rem] rounded-xl flex justify-center items-center"
            onClick={handlePlayClick}
          >
            <PlayCircleIcon className="w-16 h-16 text-darkOrange" />
          </div>
        )}
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
          {courseDetail.description}
        </Paragraph>
      </div>
      <div>
        <Paragraph className="font-medium text-darkGrey tracking-wide">
          Requirements
        </Paragraph>
        <div className="flex gap-2 mt-2">
          {courseDetail && courseDetail.requirements ? (
            courseDetail.requirements.map((requirement, index) => (
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

