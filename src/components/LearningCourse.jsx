import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { courseUserDetailAct } from "../redux/actions/courseActions/courseUserDetail";
import { Heading, Paragraph } from "./Typography";
import {
  PlayCircleIcon,
  StarIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";
import ReactPlayer from "react-player";
import Button from "./Button";
import { courseProgressAct } from "../redux/actions/courseActions/courseProgress";
import { inputRatingAct } from "../redux/actions/rating";

const LearningCourse = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const dataCourse = useSelector((store) => store.course.coursesUser);
  const progress = useSelector((store) => store.course.progress);

  const [currentVideoUrl, setCurrentVideoUrl] = useState(null);
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [rating, setRating] = React.useState(0);
  const [hasRated, setHasRated] = useState(false);

  const getCourseUser = async () => {
    await dispatch(courseUserDetailAct(params.id));
  };

  const updateProgress = (moduleId, progressId) => {
    dispatch(courseProgressAct(moduleId, progressId));
    console.log("progress");
  };

  useEffect(() => {
    getCourseUser();
    setCurrentVideoUrl(
      dataCourse.chapters &&
        dataCourse.chapters[currentChapterIndex]?.modules[currentModuleIndex]
          ?.url
    );
  }, [params.id, currentChapterIndex, currentModuleIndex]);

  let totalModules = 0;
  let totalDuration = 0;

  if (dataCourse && dataCourse.chapters) {
    dataCourse.chapters.forEach((chapter) => {
      if (chapter.modules) {
        totalModules += chapter.modules.length;

        chapter.modules.forEach((module) => {
          totalDuration += module.duration || 0;
        });
      }
    });
  }

  
  const handlePreviousClick = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
    } else if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1);
      setCurrentModuleIndex(
        dataCourse.chapters[currentChapterIndex - 1]?.modules.length - 1
      );
    }
    setCurrentVideoUrl(
      dataCourse.chapters &&
        dataCourse.chapters[currentChapterIndex]?.modules[currentModuleIndex]
          ?.url
    );
  };

  const handleNextClick = async () => {
    const currentChapter = dataCourse.chapters[currentChapterIndex];
    if (currentModuleIndex < currentChapter.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
    } else if (currentChapterIndex < dataCourse.chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1);
      setCurrentModuleIndex(0);
    }

    const nextModule =
      dataCourse.chapters[currentChapterIndex]?.modules[currentModuleIndex];

    if (nextModule) {
      setCurrentVideoUrl(nextModule.url);
      await updateProgress(nextModule.id, nextModule.userCourseProgress.id);
    }
    setCurrentVideoUrl(nextModule.url);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRating = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleSubmit = () => {
    const ratingData = {
      courseId: dataCourse.id,
      ratings: rating,
    };
    dispatch(inputRatingAct(ratingData));
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-center pt-24 px-5 lg:px-14 bg-softGrey pb-5 gap-8 lg:gap-16 min-h-screen">
      <div className="w-full lg:w-[30%] bg-white rounded-3xl p-5 flex flex-col gap-5 overflow-y-scroll max-h-screen ">
        {dataCourse.chapters &&
          dataCourse.chapters.map((chapter, chapterIndex) => (
            <div key={chapter.id} className="flex flex-col gap-4">
              <div className="flex flex-row gap-2 items-center justify-between ">
                <Paragraph className="text-base font-normal text-darkOrange tracking-wide truncate hover:whitespace-normal hover:overflow-visible hover:text-clip">
                  {chapter.name}
                </Paragraph>
                <Paragraph className="text-sm font-normal text-darkOrange tracking-wide text-end">
                  {totalDuration} Menit
                </Paragraph>
              </div>

              {chapter.modules.map((module, subIndex) => (
                <div
                  key={subIndex}
                  className="flex flex-row gap-3 items-center bg-cloudWhite py-3 px-4 rounded-xl"
                >
                  <Paragraph className="text-sm font-normal text-darkGrey tracking-wide flex-1 truncate hover:whitespace-normal hover:overflow-visible hover:text-clip">
                    {module.title}
                  </Paragraph>
                  <PlayCircleIcon
                    className={`w-6 h-6 cursor-pointer ${
                      module.userCourseProgress.isCompleted
                        ? "text-seaGreen"
                        : "text-brightBlue"
                    }`}
                    onClick={() => {
                      setCurrentVideoUrl(module.url);
                      updateProgress(module.id, module.userCourseProgress.id);
                    }}
                  />
                </div>
              ))}
            </div>
          ))}
      </div>
      <div className="w-full lg:w-[70%] aspect-video flex flex-col gap-4">
        {currentVideoUrl && (
          <div className="lg:h-[65%] md:w-[70%] lg:w-full h-full flex flex-col gap-5">
            <Heading variant="h3">
              {
                dataCourse.chapters[currentChapterIndex]?.modules[
                  currentModuleIndex
                ]?.title
              }
            </Heading>
            <div className="h-full overflow-hidden rounded-2xl">
              <ReactPlayer
                url={currentVideoUrl}
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
        <div className="flex flex-col-reverse md:flex-row gap-4 justify-between">
          <div className="flex flex-row gap-4">
          {!hasRated && (
            <Button
              isOrangeGradient
              className="hover:scale-105"
              onClick={handleOpenModal}
            >
              Input rating
            </Button>
          )}
          <Button
            isGreenGradient
            type="link"
            href={dataCourse.telegram_group}
            isExternal
            target="_blank"
            className="hover:scale-105"
          >Join Telegram</Button>
          </div>
          <div className="flex flex-row gap-4">
            <Button
              isOrangeGradient
              className="hover:scale-105"
              onClick={handlePreviousClick}
            >
              Previous
            </Button>
            <Button
              isOrangeGradient
              className="hover:scale-105"
              onClick={handleNextClick}
            >
              Next
            </Button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-cloudWhite p-10 rounded-2xl relative flex flex-col gap-5">
              <div className="flex flex-col items-end absolute top-2 right-2">
                <XCircleIcon
                  className="text-black hover:text-salmon w-8 h-8 cursor-pointer"
                  strokeWidth={1}
                  onClick={handleCloseModal}
                ></XCircleIcon>
              </div>
              <div>
                <Heading variant="h3" className="text-center">
                  Rating this course
                </Heading>
              </div>
              <div className="flex flex-row gap-5 p-2 shadow-xl shadow-gray-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-6 h-6 ${
                      i < rating ? "text-darkOrange" : "text-darkGrey"
                    } cursor-pointer `}
                    onClick={() => handleRating(i + 1)}
                  />
                ))}
              </div>
              <button
                className="bg-seaGreen hover:scale-105 text-white font-base py-2 px-4 rounded-full "
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LearningCourse;
