import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const FormInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  text,
  name,
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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
          className={`transition-all duration-300 appearance-none text-sm border rounded-full w-full py-3 px-5 text-${text} 
          leading-tight bg-transparent placeholder-${text} placeholder-opacity-70 
          outline-none focus:border-2 focus:border-darkOrange focus:shadow-outline`}
          type={showPassword ? "text" : type}
          placeholder={focused ? "" : placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name={name}
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
