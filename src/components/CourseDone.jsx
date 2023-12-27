import React, { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import courseDone from "../../src/assets/images/courseDone.png";
import { Heading, Paragraph } from "./Typography";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  courseAllCoursesAct,
  courseCoursesMeIdAct,
} from "../redux/actions/courseActions/courseCourses";
import {
  setIsMyCourse,
  setIsNotif,
  setIsProfile,
} from "../redux/reducers/courseSlice/courseSlice";
import { StarIcon } from "@heroicons/react/24/solid";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useUserGetData } from "../services/auth/User/userGetData";
import { inputRatingAct } from "../redux/actions/courseActions/courseRatings";

const CourseDone = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [detailCourse, setDetailCourse] = useState([]);
  const [dataAllCourse, setDataAllCourse] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ratingCourse, setRatingCourse] = useState(null);

  const { data } = useUserGetData();

  useEffect(() => {
    dispatch(setIsMyCourse(false));
    dispatch(setIsNotif(false));
    dispatch(setIsProfile(false));
    getDetailCourseData();
    getCoursesData();
  }, [params.id]);

  const getDetailCourseData = async () => {
    const result = await dispatch(courseCoursesMeIdAct(params.id));
    setDetailCourse(result);
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

  const handleRating = (ratingValue) => {
    setRatingCourse(ratingValue);
  };

  const handleSubmit = async () => {
    const success = await dispatch(
      inputRatingAct({
        courseId: parseInt(params.id),
        ratings: ratingCourse,
      })
    );
    if (success) {
      setIsModalOpen(false);
      window.location.href = `/congrats/${params.id}`;
    }
  };
  // const areAllModulesCompleted = detailCourse?.chapters?.every((chapter) =>
  //   chapter.modules.every((module) => module.userCourseProgress.isCompleted)
  // );

  // if (!areAllModulesCompleted) {
  //   return navigate(`/learning/${params.id}`);
  // }

  return (
    <>
      <div className="bg-softGrey flex flex-col justify-center items-center w-screen h-screen px-4 md:px-12 lg:px-24">
        <div className="flex flex-col justify-center items-center h-full w-full gap-4">
          <FadeIn
            delay={0.3}
            direction="down"
            className="flex items-center justify-center w-full"
          >
            <img
              src={courseDone}
              alt="courseDone"
              className="max-w-[100%] md:max-w-[70%] pt-0 lg:pt-8"
            />
          </FadeIn>
          <FadeIn
            delay={0.3}
            direction="down"
            className="flex flex-col items-center justify-center w-full"
          >
            <Heading variant="h2" className="text-darkGrey text-center">
              Congratulations
            </Heading>

            <Paragraph className="text-lightGrey font-thin text-center capitalize">
              You have completed the course {detailCourse.title} very well. Keep
              up the good work
            </Paragraph>
          </FadeIn>

          <FadeIn
            delay={0.3}
            direction="up"
            fullWidth
            className="flex items-center justify-center flex-col gap-4 w-full mt-4"
          >
            {isUserRated ? (
              <Button
                type="link"
                href={`/learning/${params.id}`}
                className="px-5 py-3 text-lg bg-darkOrange text-white rounded-full w-full md:w-1/3 lg:w-1/4 flex justify-center"
              >
                Repeat the Lesson
              </Button>
            ) : (
              <Button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-3 text-lg bg-darkOrange text-white rounded-full w-full md:w-1/3 lg:w-1/4 flex justify-center"
              >
                Ratings This Course
              </Button>
            )}

            <Button
              type="link"
              href="/my/course"
              className="text-lg font-thin text-darkOrange hover:font-normal"
            >
              Back to My Course
            </Button>
          </FadeIn>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-cloudWhite p-12 w-full md:w-1/2 lg:w-1/3 rounded-2xl relative flex flex-col gap-5 ">
              <div className="flex flex-col items-end absolute -top-8 -right-8">
                <XCircleIcon
                  className="text-white hover:text-paleOrange w-10 h-10 cursor-pointer"
                  strokeWidth={1}
                  onClick={() => setIsModalOpen(false)}
                ></XCircleIcon>
              </div>
              <div>
                <Heading variant="h3" className="text-center capitalize">
                  Rating this course
                </Heading>
              </div>
              <div className="grid grid-cols-5 gap-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-full h-auto ${
                      i < ratingCourse ? "text-darkOrange" : "text-lightGrey"
                    } cursor-pointer col-span-1`}
                    onClick={() => handleRating(i + 1)}
                  />
                ))}
              </div>
              <Button
                onClick={handleSubmit}
                className="bg-seaGreen hover:scale-105 text-white font-base py-3 px-4 rounded-full "
              >
                Submit
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseDone;
