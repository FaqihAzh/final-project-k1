import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = (props) => {
  const { type, onClick, href, target, isExternal, children, className } =
    props;

  const getButtonClass = () => {
    const buttonClassName = "px-5 py-2 text-sm rounded-full text-white";
    const baseClasses = [
      `cursor-pointer ${className}`,
      props.isOrangeGradient &&
        `${buttonClassName} hover:!bg-gradient-to-b hover:!from-darkOrange hover:!to-darkOrange bg-gradient-to-b from-paleOrange to-darkOrange ${className}`,
      props.isGreenGradient &&
        `${buttonClassName} hover:!bg-gradient-to-b hover:!from-seaGreen hover:!to-seaGreen bg-gradient-to-b from-turquoise to-seaGreen ${className}`,
      props.isRedGradient &&
        `${buttonClassName} hover:!bg-gradient-to-b hover:!from-salmon hover:!to-salmon bg-gradient-to-b from-palePink to-salmon ${className}`,
      props.isOutline &&
        `${buttonClassName} bg-transparent border border-1 border-white ${className}`,
      props.isBlock && `w-full ${className}`,
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
