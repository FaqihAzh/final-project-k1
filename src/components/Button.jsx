import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = (props) => {
  const { type, onClick, href, target, isExternal, children, className } =
    props;

  const getButtonClass = () => {
    const baseClasses = [
      `cursor-pointer ${className}`,
      props.isOrangeGradient &&
        `hover:bg-darkOrange px-5 py-2 text-sm rounded-full bg-gradient-to-b from-paleOrange to-darkOrange text-white ${className}`,
      props.isGreenGradient &&
        `hover:bg-seaGreen px-5 py-2 text-sm rounded-full bg-gradient-to-b from-turquoise to-seaGreen text-white ${className}`,
      props.isRedGradient &&
        `hover:bg-salmon px-5 py-2 text-sm rounded-full bg-gradient-to-b from-palePink to-salmon text-white ${className}`,
      props.isOutline &&
        `px-5 py-2 text-sm rounded-full bg-transparent text-white border border-1 border-white ${className}`,
      props.isBlock && `w-full${className}`,
    ];

    return baseClasses.filter(Boolean).join(" ");
  };

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  if (type === "link") {
    if (isExternal) {
      return (
        <a
          href={href}
          className={getButtonClass()}
          target={target === "_blank" ? "_blank" : undefined}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link to={href} className={getButtonClass()} onClick={onClickHandler}>
          {children}
        </Link>
      );
    }
  }

  return (
    <button className={getButtonClass()} onClick={onClickHandler} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  href: propTypes.string,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  isOutline: propTypes.bool,
  isPrimary: propTypes.bool,
};

export default Button;
