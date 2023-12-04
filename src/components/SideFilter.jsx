import React, { useEffect, useState } from "react";
import FormInput from "./Form";
import { Heading } from "./Typography";
import Button from "./Button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { courseCategoriesAct } from "../redux/actions/courseActions/courseCategories";

const times = [
  { id: "topNew", name_time: "Top New" },
  { id: "mostPopular", name_time: "Most Popular" },
  { id: "sale", name_time: "Sale" },
];

const levels = [
  { id: "all", name_levels: "All Level" },
  { id: "beginner", name_levels: "Beginner" },
  { id: "intermediate", name_levels: "Intermediate" },
  { id: "advanced", name_levels: "Advanced" },
];

const SideFilter = ({ onClick }) => {
  const [filters, setFilters] = useState({});

  const categories = useSelector((store) => store.course.categories);

  useEffect(() => {
    getCategoriesData();
  }, []);

  const dispatch = useDispatch();

  const getCategoriesData = () => {
    dispatch(courseCategoriesAct());
  };

  const handleFilterChange = (name) => {
    const updatedFilters = { ...filters, [name]: !filters[name] };
    setFilters(updatedFilters);
  };

  const handleReset = () => {
    setFilters({});
  };

  const renderCheckbox = (name, label) => (
    <FormInput
      type="checkbox"
      name={name}
      label={label}
      isChecked={filters[name]}
      onChange={() => handleFilterChange(name)}
    />
  );

  const renderTimes = () => {
    return times.map((time) => renderCheckbox(time.id, time.name_time));
  };

  const renderCategories = () => {
    return categories.map((category) =>
      renderCheckbox(category.id.toString(), category.name_categories)
    );
  };

  const renderLevels = () => {
    return levels.map((level) => renderCheckbox(level.id, level.name_levels));
  };

  return (
    <div className="shadow-none lg:shadow-md relative flex flex-col justify-center items-start px-8 py-6 gap-5 rounded-xl bg-white h-max w-full ">
      <div className="flex flex-col gap-3 justify-center items-start">
        <Heading className="text-darkGrey text-base font-semibold -mb-1">
          Filter
        </Heading>
        {renderTimes()}
      </div>
      <div className="flex flex-col gap-3 justify-center items-start">
        <Heading className="text-darkGrey text-base font-semibold -mb-1">
          Category
        </Heading>
        {renderCategories()}
      </div>
      <div className="flex flex-col gap-3 justify-center items-start">
        <Heading className="text-darkGrey text-base font-semibold -mb-1">
          Level
        </Heading>
        {renderLevels()}
      </div>
      <div className="w-full flex justify-center items-center">
        <Button
          isBlock
          onClick={handleReset}
          className=" bg-salmon px-5 py-2 text-sm rounded-full text-white"
        >
          Clear
        </Button>
      </div>
      <XMarkIcon
        onClick={onClick}
        className="flex lg:hidden absolute w-6 h-6 text-darkGrey top-4 right-4"
      />
    </div>
  );
};

export default SideFilter;
