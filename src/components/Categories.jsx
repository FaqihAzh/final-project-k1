import React, { useEffect } from "react";
import CategoryItem from "./CategoryItem";
import FadeIn from "./FadeIn";
import { Heading, Paragraph } from "./Typography";
import { useDispatch, useSelector } from "react-redux";
import { courseCategoriesAct } from "../redux/actions/courseActions/courseCategories";

const Categories = () => {
  const categoriesData = useSelector((store) => store.course.categories);

  useEffect(() => {
    getCategoriesData();
  }, []);

  const dispatch = useDispatch();

  const getCategoriesData = () => {
    dispatch(courseCategoriesAct());
  };

  return (
    <div className="py-12 px-4 md:px-12 lg:px-24 flex flex-col gap-6 w-screen bg-softGrey">
      <div className="flex flex-col mb-6">
        <FadeIn delay={0.2} direction="up">
          <Heading
            variant="h1"
            className="text-darkGrey flex gap-2 justify-start items-center"
          >
            Course <span className="text-brightBlue "> Categories</span>
          </Heading>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <Paragraph variant="large" className=" text-lightGrey font-thin z-20">
            We provide some of the best categories to make your learning more
            structured
          </Paragraph>
        </FadeIn>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categoriesData.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
