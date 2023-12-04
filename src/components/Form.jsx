import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon, CheckIcon } from "@heroicons/react/24/outline";
import { Paragraph } from "./Typography";

const FormInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  text,
  name,
  onKeyPress,
  className,
  maxLength,
  isChecked,
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && onKeyPress) {
      onKeyPress(e);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (type === "checkbox") {
    return (
      <div className="flex items-center">
        <input
          type="checkbox"
          id={name}
          checked={isChecked}
          onChange={(e) => onChange(name, e.target.checked)}
          className="hidden"
        />
        <label
          htmlFor={name}
          className="cursor-pointer flex items-center space-x-3 select-none"
        >
          <div
            className={`${
              isChecked
                ? "bg-lightBlue border-lightBlue border-2"
                : "bg-softGrey bg-opacity-50 border-softGrey border-2"
            } p-1 rounded-lg border-solid flex items-center justify-center transition-all duration-300 `}
          >
            <CheckIcon
              strokeWidth={3}
              className={`w-3 h-3 ${
                isChecked ? "text-white" : "text-transparent"
              }`}
            />
          </div>
          <Paragraph variant="small" className="text-lightGrey">
            {label}
          </Paragraph>
        </label>
      </div>
    );
  }

  return (
    <div className={`relative w-full ${focused && "mt-4"}`}>
      <label
        className={`absolute -top-4 text-${text} text-sm tracking-wide font-normal transition-all duration-300 
        ${
          focused ? "transform -translate-y-2" : "opacity-0 pointer-events-none"
        }`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={`${className} transition-all duration-300 appearance-none text-sm border rounded-full w-full py-3 px-5 text-${text} 
          leading-tight bg-transparent placeholder-${text} placeholder-opacity-70 
          outline-none focus:border-2 focus:border-darkOrange focus:shadow-outline`}
          type={showPassword ? "text" : type}
          placeholder={focused ? "" : placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
          onKeyPress={handleKeyPress}
          maxLength={maxLength}
        />
        {type === "password" && (
          <button
            className="absolute inset-y-0 right-0 mr-3 flex items-center"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <EyeIcon className="h-6 w-6 text-lightGrey" />
            ) : (
              <EyeSlashIcon className="h-6 w-6 text-lightGrey" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default FormInput;
