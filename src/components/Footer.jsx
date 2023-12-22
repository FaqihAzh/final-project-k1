import React, { useEffect } from "react";
import Button from "./Button";
import logo from "../assets/images/logo.svg";
import { Paragraph } from "./Typography";
import { useDispatch, useSelector } from "react-redux";
import { courseCategoriesAct } from "../redux/actions/courseActions/courseCategories";

const Footer = () => {
  const footerMenuClassName =
    "font-thin text-sm hover:text-darkOrange cursor-pointer text-left";

  const categoriesData = useSelector((store) => store.course.categories);

  useEffect(() => {
    getCategoriesData();
  }, []);

  const dispatch = useDispatch();

  const getCategoriesData = () => {
    dispatch(courseCategoriesAct());
  };

  return (
    <>
      <footer className="flex flex-col md:flex-row gap-8 items-start justify-between bg-darkGrey px-4 md:px-12 lg:px-24 py-12">
        <div className="flex flex-col gap-4 justify-start">
          <Button
            type="link"
            href="/"
            className="flex items-center md:min-w-max"
          >
            <img src={logo} alt="CourseHub Logo" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 text-white justify-start">
          <Paragraph className="font-semibold text-sm text-left">
            Explore
          </Paragraph>
          <Button type="link" href="/" className={footerMenuClassName}>
            Home
          </Button>
          <Button
            type="link"
            href="/all/course"
            className={footerMenuClassName}
          >
            All Course
          </Button>
        </div>
        <div className="flex flex-col gap-4 text-white justify-start">
          <Paragraph className="font-semibold text-sm text-left">
            Personal
          </Paragraph>
          <Button type="link" href="/my/course" className={footerMenuClassName}>
            My Class
          </Button>
          <Button
            type="link"
            href="/notification"
            className={footerMenuClassName}
          >
            Notifications
          </Button>
          <Button type="link" href="/account" className={footerMenuClassName}>
            Profile
          </Button>
        </div>
        <div className="flex flex-col gap-4 text-white justify-start">
          <Button className="font-semibold text-sm text-left">Category</Button>
          {categoriesData.map((category) => (
            <Button
              type="link"
              href={`/course/category/${category.id}`}
              className={footerMenuClassName}
              key={category.id}
            >
              {category.name_categories}
            </Button>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
