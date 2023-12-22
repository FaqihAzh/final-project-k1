import React, { useEffect, useState } from "react";
import FadeIn from "./FadeIn";
import { Heading, Paragraph } from "./Typography";
import { useDispatch } from "react-redux";
import {
  courseAllCoursesAct,
  courseCoursesMeAct,
} from "../redux/actions/courseActions/courseCourses";
import CourseCard from "./CourseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";

const CourseSample = ({ allCourse }) => {
  const [all, setAll] = useState([]);
  const [my, setMy] = useState([]);

  const allFilter =
    all.length > 0 && all.filter((course) => course.price > 500000);

  const dataMap = allCourse ? allFilter : my;

  SwiperCore.use([Grid, Autoplay]);

  useEffect(() => {
    getCoursesData();
  }, []);

  const dispatch = useDispatch();

  const getCoursesData = async () => {
    const data = await dispatch(courseAllCoursesAct());
    const dataMy = await dispatch(courseCoursesMeAct());
    setAll(data);
    setMy(dataMy);
  };

  return (
    <>
      {dataMap && (
        <div className="py-12 px-4 md:px-12 lg:px-24 flex flex-col gap-4 w-screen bg-softGrey">
          <div className="flex flex-col">
            <FadeIn delay={0.2} direction="up">
              {allCourse ? (
                <Heading
                  variant="h1"
                  className="text-darkGrey flex gap-2 justify-start items-center"
                >
                  Our <span className="text-brightBlue "> Best Course's</span>
                </Heading>
              ) : (
                <Heading
                  variant="h1"
                  className="text-darkGrey flex gap-2 justify-start items-center"
                >
                  Check My <span className="text-brightBlue "> Course's</span>
                </Heading>
              )}
            </FadeIn>
            <FadeIn delay={0.4} direction="up">
              {allCourse ? (
                <Paragraph
                  variant="large"
                  className=" text-lightGrey font-thin z-20"
                >
                  Let's start learning with us, find the best course for you.
                </Paragraph>
              ) : (
                <Paragraph
                  variant="large"
                  className=" text-lightGrey font-thin z-20"
                >
                  Let's continue your struggle, just a little more to reach your
                  dreams
                </Paragraph>
              )}
            </FadeIn>
          </div>
          <div className="w-full h-full grid grid-cols-1">
            <FadeIn
              delay={0.2}
              direction="left"
              fullWidth
              className="pb-8 h-full"
            >
              <Swiper
                modules={[Grid, Autoplay]}
                loop={true}
                grabCursor={true}
                spaceBetween={15}
                slidesPerView={1}
                autoplay={{ delay: 12000, disableOnInteraction: false }}
                grid={{
                  rows: 1,
                  fill: "row",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2.5,
                  },
                  1028: {
                    slidesPerView: 3.5,
                  },
                }}
              >
                {dataMap?.map((course) => (
                  <SwiperSlide key={course.id}>
                    <div className="pb-8 min-h-full" key={course.id}>
                      <CourseCard
                        course={course}
                        isMyClass={allCourse ? false : true}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </FadeIn>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseSample;
