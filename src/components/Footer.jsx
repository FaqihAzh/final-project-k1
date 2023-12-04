import React from "react";
import Button from "./Button";
import logo from "../assets/images/logo.svg";
import { Paragraph } from "./Typography";

const Footer = () => {
  const footerMenuClassName =
    "font-thin text-sm hover:text-darkOrange cursor-pointer text-left";

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
          <Button className={footerMenuClassName}>Notifications</Button>
          <Button className={footerMenuClassName}>Profile</Button>
        </div>
        <div className="flex flex-col gap-4 text-white justify-start">
          <Button className="font-semibold text-sm text-left">Category</Button>
          <Button className={footerMenuClassName}>UI/UX Design</Button>
          <Button className={footerMenuClassName}>Web Development</Button>
          <Button className={footerMenuClassName}>Data Science</Button>
        </div>
      </footer>
    </>
  );
};

export default Footer;
