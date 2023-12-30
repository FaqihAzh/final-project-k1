import React, { useEffect, useState } from "react";
import { Paragraph } from "./Typography";
import { StarIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  BookOpenIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import nullBackground from "../assets/images/nullBackgorund.jpg";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { courseDetailCourseAct } from "../redux/actions/courseActions/courseDetailCourse";
import { formatRupiah } from "../utils/constants/function";
import { Link } from "react-router-dom";
import { courseRatingsAct } from "../redux/actions/courseActions/courseRatings";
import { courseCoursesMeIdAct } from "../redux/actions/courseActions/courseCourses";
import CourseCardSkeleton from "./SkeletonLoading/CourseCardSkeleton";

const categoryMap = {
  1: "UI/UX Design",
  2: "Web Development",
  3: "Android Development",
  4: "Data Science",
  5: "Business Intelligence",
};

const CourseCard = ({
  isMyClass,
  course,
  isPayment,
  isHistory,
  courseHistory,
}) => {
  const [detailCourse, setDetailCourse] = useState([]);
  const [myCourse, setmyCourseId] = useState([]);
  const [ratingsCourse, setRatingsCourse] = useState(1);

  const categoryId = detailCourse.category_id;
  const category = categoryMap[categoryId] || "Unknown Category";
  const rating = ratingsCourse && Math.round(ratingsCourse);

  const dispatch = useDispatch();

  const getDetailCourseData = async () => {
    const result = await dispatch(courseDetailCourseAct(course.id));
    setDetailCourse(result);
  };

  const getMyCourseDataId = async () => {
    const result = await dispatch(courseCoursesMeIdAct(course.id));
    setmyCourseId(result);
  };

  const getRatingsData = async () => {
    const result = await dispatch(courseRatingsAct(course.id));
    setRatingsCourse(result.averageRatings);
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

  const calculateProgress = () => {
    let totalModules = 0;
    let completedModules = 0;

    if (myCourse.chapters) {
      myCourse.chapters.forEach((chapter) => {
        if (chapter.modules) {
          chapter.modules.forEach((module) => {
            totalModules++;
            if (module.userCourseProgress.isCompleted) {
              completedModules++;
            }
          });
        }
      });
    }

    const progressPercentage =
      totalModules !== 0
        ? Math.floor((completedModules / totalModules) * 100)
        : 0;
    return progressPercentage;
  };

  const progress = calculateProgress();
  const coursePrice = formatRupiah(detailCourse?.price);

  const renderCourseContent = () => (
    <div
      className={`flex flex-col gap-2 ${
        isMyClass ? "p-3" : "pt-3 pl-3 pr-3 mt-4"
      } rounded-xl bg-white w-full shadow-xl relative `}
    >
      <div className="w-full">
        <img
          src={detailCourse.image ? detailCourse.image : nullBackground}
          alt=""
          className="rounded-lg min-h-[150px] max-h-[150px] w-full"
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
              {ratingsCourse
                ? [...Array(rating)].map((_, index) => (
                    <StarIcon key={index} className="w-4 h-4" />
                  ))
                : null}
            </span>
          </div>
          <div>
            <Paragraph className="font-medium text-darkGrey tracking-wide capitalize truncate hover:whitespace-normal hover:overflow-visible hover:text-clip">
              {detailCourse?.title}
            </Paragraph>
            <Paragraph className="text-xs font-normal text-lightGrey tracking-wide">
              by <span className="capitalize">{detailCourse?.author}</span>
            </Paragraph>
            {isMyClass ? null : (
              <Paragraph className="font-medium text-darkOrange tracking-wide">
                {detailCourse?.price === 0 ? "Free Course" : coursePrice}
              </Paragraph>
            )}
          </div>
        </div>
        <div className={`flex flex-col ${isPayment && "pb-2"} `}>
          <span className="border-b w-full border-dotted border-lightGrey my-2"></span>
          <div className="flex gap-x-4 gap-y-2 truncate hover:flex-wrap hover:whitespace-normal hover:overflow-visible hover:text-clip">
            <span className="flex gap-1 items-center">
              <ClockIcon className="w-4 h-4 text-darkOrange" strokeWidth="2" />
              <Paragraph className="text-sm font-normal text-lightGrey">
                {totalDuration} Mins
              </Paragraph>
            </span>
            <span className="flex gap-1 items-center text-darkOrange">
              <BookOpenIcon className="w-4 h-4" strokeWidth="2" />
              <Paragraph className="text-sm font-normal text-lightGrey">
                {totalModules} Mods
              </Paragraph>
            </span>
            <span className="flex gap-1 items-center text-darkOrange truncate">
              <ChartBarIcon
                className="w-4 h-4  whitespace-normal overflow-visible text-clip"
                strokeWidth="2"
              />
              <Paragraph className="text-sm font-normal text-lightGrey capitalize truncate">
                {detailCourse?.level}
              </Paragraph>
            </span>
          </div>
          {isMyClass ? (
            <div className="w-full flex outline outline-1 outline-softGrey rounded-full mt-2">
              <div
                className={`${progress === 0 && "bg-salmon"} ${
                  progress > 0 && progress < 100 && "bg-darkOrange"
                } ${progress === 100 && "bg-seaGreen"} px-4 rounded-full `}
                style={{
                  width:
                    progress === 0 ? "var(--progress-padding)" : `${progress}%`,
                }}
              >
                <Paragraph
                  className={`text-xs font-normal text-white ${
                    progress === 100 && "text-center"
                  } tracking-wide`}
                >
                  {progress < 100 ? `${progress}%` : "Complete"}
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
          {isHistory && (
            <div className="w-full flex rounded-full mt-2">
              <div
                className={`px-4 py-1 rounded-full w-fit ${
                  courseHistory?.status === "paid" && "bg-seaGreen"
                } ${courseHistory?.status === "Pending" && "bg-darkOrange"} ${
                  courseHistory?.status !== "paid" &&
                  courseHistory?.status !== "Pending" &&
                  "bg-salmon"
                }`}
              >
                <Paragraph
                  className={`text-xs font-medium text-white tracking-wide capitalize`}
                >
                  {courseHistory.status}
                </Paragraph>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    getDetailCourseData();
    getRatingsData();
    getMyCourseDataId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [course.id, progress]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <CourseCardSkeleton />;
  }

  return (
    <>
      {isMyClass ? (
        <Link to={`/learning/${detailCourse?.id}`}>
          {renderCourseContent()}
        </Link>
      ) : (
        renderCourseContent()
      )}
    </>
  );
};

export default CourseCard;
