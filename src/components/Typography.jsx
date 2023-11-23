import React from "react";
import PropTypes from "prop-types";

export const Heading = ({ variant, children, className, ...restProps }) => {
  const getHeadingClass = () => {
    switch (variant) {
      case "h1":
        return "text-4xl leading-[3.5rem] font-semibold";
      case "h2":
        return "text-3xl font-semibold leading-[3rem]";
      case "h3":
        return "text-2xl font-semibold leading-[2rem]";
      case "h4":
        return "text-xl font-semibold leading-[1.5rem]";
      default:
        return "";
    }
  };

  return (
    <div className={` ${getHeadingClass()} ${className}`} {...restProps}>
      {children}
    </div>
  );
};

Heading.propTypes = {
  variant: PropTypes.oneOf(["title", "subtitle", "paragraph"]),
  className: PropTypes.string,
};

export const Paragraph = ({ variant, children, className, ...restProps }) => {
  const getParagraphClass = () => {
    switch (variant) {
      case "small":
        return "text-sm leading-relaxed";
      case "large":
        return "text-lg leading-relaxed";
      default:
        return "text-base leading-relaxed";
    }
  };

  return (
    <p className={` ${getParagraphClass()} ${className}`} {...restProps}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  variant: PropTypes.oneOf(["small", "large", "italic", "normal"]),
  className: PropTypes.string,
};
