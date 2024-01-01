import React, { useEffect, useState } from "react";
import { Paragraph } from "./Typography";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { LockClosedIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { useParams } from "react-router-dom";
import CourseCard from "./CourseCard";
import { useDispatch } from "react-redux";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";

const SideCourseMaterial = () => {
  const params = useParams();
  const [detailCourse, setDetailCourse] = useState([]);
  const [totalDurationPerModule, setTotalDurationPerModule] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getDetailCourseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const dispatch = useDispatch();

  const numberOfChapters =
    detailCourse.chapters && detailCourse.chapters.length;

  const calculateModuleDuration = (courseData) => {
    let totalDurationPerModule = {};

    if (courseData && courseData.chapters) {
      courseData.chapters.forEach((chapter) => {
        if (chapter.modules) {
          chapter.modules.forEach((module) => {
            const { title, duration } = module;
            const chapterIndex = courseData.chapters.indexOf(chapter);
            const key = `${chapterIndex}_${title}`;
            if (totalDurationPerModule[key]) {
              totalDurationPerModule[key] += duration || 0;
            } else {
              totalDurationPerModule[key] = duration || 0;
            }
          });
        }
      });
    }

    return totalDurationPerModule;
  };

  const handleBuyCourseClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getDetailCourseData = async () => {
    const result = await dispatch(courseDetailCourseAct(params.id));
    setDetailCourse(result);
    const durations = calculateModuleDuration(result);
    setTotalDurationPerModule(durations);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-col w-full lg:w-2/5 min-h-fit max-h-96 lg:max-h-screen gap-4 mt-2">
      <div className="rounded-2xl px-6 py-5 flex flex-col gap-4 bg-white shadow-xl h-auto overflow-y-auto">
        <div className="flex items-center justify-between">
          <Paragraph
            variant="large"
            className="font-semibold text-darkGrey tracking-wide"
          >
            Course Material
          </Paragraph>
          <Paragraph className="text-base font-semibold text-darkGrey tracking-wide !flex !items-center">
            {numberOfChapters} Chapters
          </Paragraph>
        </div>
        <hr className="-my-1" />
        {detailCourse.chapters &&
          detailCourse.chapters.map((chapter, chapterIndex) => (
            <div key={chapter.id} className="flex flex-col gap-2">
              <div className="flex flex-row gap-3 items-center justify-between">
                <Paragraph className="capitalize text-sm font-medium text-darkOrange tracking-wide truncate w-[70%] hover:whitespace-normal hover:overflow-visible hover:text-clip">
                  {chapter.name}
                </Paragraph>
                <Paragraph className="capitalize text-sm font-medium text-darkOrange tracking-wide text-end">
                  {chapter.modules && (
                    <span>
                      {chapter.modules.reduce(
                        (totalDuration, module) =>
                          totalDuration +
                          (totalDurationPerModule[
                            `${chapterIndex}_${module.title}`
                          ] || 0),
                        0
                      )}{" "}
                      mins
                    </span>
                  )}
                </Paragraph>
              </div>

              {chapter.modules.map((module, subIndex) => (
                <Button
                  key={subIndex}
                  className={`capitalize flex flex-row gap-3 items-center bg-softGrey px-4 py-2 rounded-md ${
                    !module.isTrailer ? "!cursor-not-allowed opacity-50" : ""
                  }`}
                  disabled={!module.isTrailer}
                >
                  <Paragraph
                    variant="small"
                    className="capitalize font-normal text-darkGrey tracking-wide flex-1 text-left"
                  >
                    {module.title}
                  </Paragraph>
                  {module.isTrailer ? (
                    <PlayCircleIcon className="w-6 h-6 text-brightBlue" />
                  ) : (
                    <LockClosedIcon className="w-6 h-6 text-darkOrange" />
                  )}
                </Button>
              ))}
            </div>
          ))}
      </div>
      <div>
        <Button
          isOrangeGradient
          className="w-full text-center hover:scale-y-105"
          onClick={handleBuyCourseClick}
        >
          Buy Course
        </Button>
      </div>
      {isModalOpen && detailCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white pr-3 pl-3 pb-3 pt-1 md:pr-6 md:pl-6 md:pb-6 md:pt-2  rounded-xl relative ">
            <div className="flex flex-col items-end absolute right-0 -top-10 md:-top-8 md:-right-8">
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
