/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { courseSearchAct } from "../redux/actions/courseActions/courseSearch";

const SearchInput = ({ text, border, isCourse, onChange, searchTerm }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  useEffect(() => {
    if (
      location.pathname !== "/search-results" &&
      location.pathname !== "/search-results?query=" + searchQuery
    ) {
      setSearchQuery("");
    }
  }, [location.pathname]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchCourses = async () => {
    if (searchQuery.trim() !== "") {
      const courses = await dispatch(courseSearchAct(searchQuery));

      navigate("/search-results?query=" + searchQuery, {
        state: { results: courses, query: searchQuery },
      });
    } else {
      inputRef.current.focus();
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      searchCourses();
    }
  };

  return (
    <>
      {isCourse ? (
        <div className="relative flex items-center w-full">
          <input
            type="text"
            name="search"
            autoComplete="none"
            placeholder="Search Course"
            aria-label="Search Course"
            className={`w-full pl-4 pr-10 py-2 font-normal text-sm text-ellipsis placeholder:text-ellipsis bg-transparent text-${
              text ? text : "white"
            } ${
              text ? `placeholder-${text}` : `placeholder-white`
            } rounded-full focus:outline-none ${
              border ? border : "border"
            }  border-${text ? text : "white"}`}
            value={searchTerm}
            onChange={onChange}
          />
        </div>
      ) : (
        <div className="relative flex items-center w-full">
          <input
            ref={inputRef}
            type="text"
            name="search"
            autoComplete="none"
            placeholder="Search Course"
            aria-label="Search Course"
            className={`w-full pl-4 pr-10 py-2 font-normal text-sm text-ellipsis placeholder:text-ellipsis bg-transparent text-${
              text ? text : "white"
            } ${
              text ? `placeholder-${text}` : `placeholder-white`
            } rounded-full focus:outline-none ${
              border ? border : "border"
            }  border-${text ? text : "white"}`}
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleEnterPress}
          />
          <Button onClick={searchCourses} className="absolute right-4">
            <MagnifyingGlassIcon
              className={`w-5 h-5 hover:scale-125 text-${
                text ? text : "white"
              }`}
            />
          </Button>
        </div>
      )}
    </>
  );
};

export default SearchInput;
