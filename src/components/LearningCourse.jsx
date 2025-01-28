import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Heading, Paragraph } from "./Typography";
import {
  CheckCircleIcon,
  PlayCircleIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
import ReactPlayer from "react-player";
import Button from "./Button";
import {
  courseAllCoursesAct,
  courseCoursesMeIdAct,
} from "../redux/actions/courseActions/courseCourses";
import {
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} from "../redux/reducers/courseSlice/courseSlice";
import { courseProgressAct } from "../redux/actions/courseActions/courseProgress";
import { useUserGetData } from "../services/auth/User/userGetData";
import LearningCourseSkeleton from "./SkeletonLoading/LearningCourseSkeleton";

const LearningCourse = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [detailCourse, setDetailCourse] = useState([]);
  const [dataAllCourse, setDataAllCourse] = useState([]);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [activeModuleTitle, setActiveModuleTitle] = useState("");
  const [activeUserProgressId, setActiveUserProgressId] = useState(null);
  const [totalDurationPerModule, setTotalDurationPerModule] = useState({});

  const { data } = useUserGetData();

  useEffect(() => {
    dispatch(setIsMyCourse(false));
    dispatch(setIsNotif(false));
    dispatch(setIsProfile(false));
    getDetailCourseData();
    getCoursesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  const rating =
    detailCourse &&
    detailCourse.ratings &&
    detailCourse.ratings.averageRatings &&
    Math.round(detailCourse.ratings.averageRatings);

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

  const handleModuleClick = (url, title, userProgressId) => {
    setCurrentVideoUrl(url);
    setActiveModuleTitle(title);
    setActiveUserProgressId(userProgressId);
  };

  const getDetailCourseData = async () => {
    const result = await dispatch(courseCoursesMeIdAct(params.id));
    setDetailCourse(result);
    const durations = calculateModuleDuration(result);
    setTotalDurationPerModule(durations);

    let firstIncompleteModuleUrl = "";
    let firstIncompleteModuleTitle = "";
    let firstIncompleteUserProgressId = null;

    if (result && result.chapters) {
      const allModulesCompleted = result.chapters.every((chapter) =>
        chapter.modules.every((module) => module.userCourseProgress.isCompleted)
      );

      if (allModulesCompleted) {
        const firstModule = result.chapters[0]?.modules[0];
        if (firstModule) {
          firstIncompleteModuleUrl = firstModule.url;
          firstIncompleteModuleTitle = firstModule.title;
          firstIncompleteUserProgressId = firstModule.userCourseProgress.id;
        }
      } else {
        result.chapters.some((chapter) => {
          if (chapter.modules) {
            const firstIncompleteModule = chapter.modules.find(
              (module) => !module.userCourseProgress.isCompleted
            );
            if (firstIncompleteModule) {
              firstIncompleteModuleUrl = firstIncompleteModule.url;
              firstIncompleteModuleTitle = firstIncompleteModule.title;
              firstIncompleteUserProgressId =
                firstIncompleteModule.userCourseProgress.id;
              return true;
            }
          }
          return false;
        });
      }
    }

    setCurrentVideoUrl(firstIncompleteModuleUrl);
    setActiveModuleTitle(firstIncompleteModuleTitle);
    setActiveUserProgressId(firstIncompleteUserProgressId);
  };

  const getCoursesData = async () => {
    const data = await dispatch(courseAllCoursesAct());
    const dataFilter = data.filter(
      (course) => course.id === parseInt(params.id)
    );
    setDataAllCourse(dataFilter);
  };

  const isUserRated =
    dataAllCourse.length > 0 &&
    dataAllCourse.some((course) =>
      course.ratings.some((rating) => rating.userId === parseInt(data?.id))
    );

  const countIncompleteModules = () => {
    let incompleteCount = 0;

    if (detailCourse && detailCourse.chapters) {
      for (let i = 0; i < detailCourse.chapters.length; i++) {
        const chapter = detailCourse.chapters[i];

        for (let j = 0; j < chapter.modules.length; j++) {
          const module = chapter.modules[j];

          if (!module.userCourseProgress.isCompleted) {
            incompleteCount++;
          }
        }
      }
    }

    return incompleteCount;
  };

  const incompleteModulesCount = countIncompleteModules();

  const handleNextModule = async () => {
    let foundCurrent = false;
    let nextModuleFound = false;
    let isLastModule = false;

    for (let i = 0; i < detailCourse.chapters.length; i++) {
      const chapter = detailCourse.chapters[i];

      for (let j = 0; j < chapter.modules.length; j++) {
        const module = chapter.modules[j];

        if (foundCurrent) {
          if (!module.userCourseProgress.isCompleted) {
            const success = await dispatch(
              courseProgressAct(activeUserProgressId)
            );

            if (success) {
              setCurrentVideoUrl(module.url);
              setActiveModuleTitle(module.title);
              setActiveUserProgressId(module.userCourseProgress.id);
              const result = await dispatch(courseCoursesMeIdAct(params.id));
              setDetailCourse(result);
              return;
            }
          }
        }

        if (module.userCourseProgress.id === activeUserProgressId) {
          foundCurrent = true;
          nextModuleFound = true;

          const currentModuleIndex = j;
          const totalModulesInChapter = chapter.modules.length;
          const isLastModuleInChapter =
            currentModuleIndex === totalModulesInChapter - 1;

          if (isLastModuleInChapter && i === detailCourse.chapters.length - 1) {
            isLastModule = true;
          }
        } else if (foundCurrent && nextModuleFound) {
          const success = await dispatch(
            courseProgressAct(activeUserProgressId)
          );

          if (success) {
            setCurrentVideoUrl(module.url);
            setActiveModuleTitle(module.title);
            setActiveUserProgressId(module.userCourseProgress.id);
            const result = await dispatch(courseCoursesMeIdAct(params.id));
            setDetailCourse(result);
            return;
          }
        }
      }
    }

    if (isLastModule) {
      setCurrentVideoUrl(detailCourse.chapters[0].modules[0].url);
      setActiveModuleTitle(detailCourse.chapters[0].modules[0].title);
      setActiveUserProgressId(
        detailCourse.chapters[0].modules[0].userCourseProgress.id
      );
      const success = await dispatch(courseProgressAct(activeUserProgressId));

      if (success) {
        const result = await dispatch(courseCoursesMeIdAct(params.id));
        setDetailCourse(result);
        return;
      }
    }
  };

  const handlePreviousModule = () => {
    let foundCurrent = false;

    for (let i = detailCourse.chapters.length - 1; i >= 0; i--) {
      const chapter = detailCourse.chapters[i];
      for (let j = chapter.modules.length - 1; j >= 0; j--) {
        const module = chapter.modules[j];

        if (foundCurrent) {
          setCurrentVideoUrl(module.url);
          setActiveModuleTitle(module.title);
          setActiveUserProgressId(module.userCourseProgress.id);
          return;
        }

        if (module.userCourseProgress.id === activeUserProgressId) {
          foundCurrent = true;
        }
      }
    }
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LearningCourseSkeleton />;
  }

  return (
    <div className=" bg-softGrey min-h-[85vh]">
      <div className="mt-0 md:mt-10 flex flex-col-reverse lg:flex-row justify-center pt-24 px-4 md:px-12 lg:px-24 pb-0 md:pb-6 gap-4 lg:gap-12 max-w-[1440px] mx-auto">
        <div className="w-full lg:w-[30%] flex flex-col gap-5 relative ">
          <div className="w-full flex flex-col gap-5 bg-white p-6 rounded-3xl overflow-y-scroll min-h-[30rem]">
            <div className="flex items-center justify-between">
              <Paragraph className="text-xl font-semibold text-darkGrey tracking-wide">
                Course Material
              </Paragraph>
              <Paragraph className="text-base font-semibold text-darkGrey tracking-wide !flex !items-center">
                <span className="flex items-center text-darkOrange">
                  {[...Array(rating)].map((_, index) => (
                    <StarIcon key={index} className="w-4 h-4" />
                  ))}
                </span>
              </Paragraph>
            </div>
            <hr className="-my-2" />
            {detailCourse.chapters &&
              detailCourse.chapters.map((chapter, chapterIndex) => (
                <div key={chapter.id} className="flex flex-col gap-2">
                  <div className="flex flex-row gap-3 items-center justify-between">
                    <Paragraph className="capitalize text-base font-medium text-darkOrange tracking-wide truncate w-[70%] hover:whitespace-normal hover:overflow-visible hover:text-clip">
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
                    <div
                      key={subIndex}
                      className="flex flex-row gap-3 items-center bg-cloudWhite py-3 px-4 rounded-xl cursor-pointer"
                      onClick={() =>
                        handleModuleClick(
                          module.url,
                          module.title,
                          module.userCourseProgress.id
                        )
                      }
                    >
                      <Paragraph className="capitalize text-sm font-normal text-darkGrey tracking-wide flex-1 truncate hover:whitespace-normal hover:overflow-visible hover:text-clip">
                        {module.title}
                      </Paragraph>
                      {module.userCourseProgress.isCompleted &&
                        module.userCourseProgress.id !==
                          activeUserProgressId && (
                          <CheckCircleIcon
                            className={`w-6 h-6 text-seaGreen`}
                          />
                        )}
                      {module.userCourseProgress.id ===
                        activeUserProgressId && (
                        <PlayCircleIcon className={`w-6 h-6 text-lightBlue`} />
                      )}{" "}
                    </div>
                  ))}
                </div>
              ))}
          </div>
          <div>
            <Paragraph
              variant="large"
              className="lg:flex hidden font-semibold text-darkGrey tracking-wide"
            >
              Requirements
            </Paragraph>
            <div className="lg:flex hidden gap-2 mt-2 flex-wrap">
              {detailCourse &&
                detailCourse.requirements &&
                detailCourse.requirements.map((requirement, index) => (
                  <span
                    key={index}
                    className="text-sm bg-lightBlue text-cloudWhite px-4 py-2 rounded-full truncate"
                  >
                    {requirement}
                  </span>
                ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[70%] aspect-video flex flex-col gap-2 h-fit">
          <div className="w-full flex flex-col gap-4">
            <Heading variant="h3" className="capitalize">
              {activeModuleTitle}
            </Heading>
            <div className="aspect-video overflow-hidden rounded-2xl">
              <ReactPlayer
                url={currentVideoUrl}
                controls
                width="100%"
                height="100%"
              />
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-2">
              <Button
                isGreenGradient
                type="link"
                href={
                  detailCourse.telegram_group
                    ? detailCourse.telegram_group
                    : "https://t.me/+jNP5OgpdfoplZDVl"
                }
                isExternal
                target="_blank"
                className="hover:scale-105 !py-2 md:!py-3"
              >
                Join Telegram
              </Button>
            </div>
            <div className="flex flex-row gap-2">
              {incompleteModulesCount === 0 && !isUserRated && (
                <Button
                  isOrangeGradient
                  className="hover:scale-105 !py-2 md:!py-3"
                  type="link"
                  href={`/congrats/${params.id}`}
                >
                  Finish
                </Button>
              )}

              {incompleteModulesCount > 0 && !isUserRated && (
                <>
                  <Button
                    onClick={handlePreviousModule}
                    isOrangeGradient
                    className="hover:scale-105 !py-2 md:!py-3"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNextModule}
                    isOrangeGradient
                    className="hover:scale-105 !py-2 md:!py-3"
                  >
                    Next
                  </Button>
                </>
              )}
              {incompleteModulesCount === 0 && isUserRated && (
                <>
                  <Button
                    onClick={handlePreviousModule}
                    isOrangeGradient
                    className="hover:scale-105 !py-3"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNextModule}
                    isOrangeGradient
                    className="hover:scale-105 !py-3"
                  >
                    Next
                  </Button>
                </>
              )}
            </div>
          </div>
          <div>
            <Paragraph
              variant="large"
              className="flex lg:hidden font-semibold text-darkGrey tracking-wide mt-2"
            >
              Requirements
            </Paragraph>
            <div className="flex lg:hidden gap-2 my-2 flex-wrap">
              {detailCourse &&
                detailCourse.requirements &&
                detailCourse.requirements.map((requirement, index) => (
                  <span
                    key={index}
                    className="text-sm bg-lightBlue text-cloudWhite px-4 py-2 rounded-full truncate hover:whitespace-normal hover:overflow-visible hover:text-clip"
                  >
                    {requirement}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningCourse;
