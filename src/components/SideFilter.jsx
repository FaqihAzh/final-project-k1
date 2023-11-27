import React, { useState } from "react";
import FormInput from "./Form";
import { Heading } from "./Typography";
import Button from "./Button";

const SideFilter = () => {
  const [filters, setFilters] = useState({
    topNew: false,
    mostPopular: false,
    sale: false,
    design: false,
    webDev: false,
    androidDev: false,
    dataScience: false,
    all: false,
    beginner: false,
    intermediate: false,
    advanced: false,
  });

  const handleFilterChange = (name) => {
    setFilters({
      ...filters,
      [name]: !filters[name],
    });
  };

  const handleReset = () => {
    const resetFilters = Object.fromEntries(
      Object.entries(filters).map(([key, value]) => [key, false])
    );
    setFilters(resetFilters);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-start px-8 py-6 gap-5 rounded-xl bg-white h-max w-full">
        <div className="flex flex-col gap-3 justify-center items-start">
          <Heading className="text-darkGrey text-base font-semibold -mb-1">
            Filter
          </Heading>
          <FormInput
            type="checkbox"
            name="topNew"
            label="Top New"
            isChecked={filters.topNew}
            onChange={handleFilterChange}
          />
          <FormInput
            type="checkbox"
            name="mostPopular"
            label="Most Popular"
            isChecked={filters.mostPopular}
            onChange={handleFilterChange}
          />
          <FormInput
            type="checkbox"
            name="sale"
            label="Sale"
            isChecked={filters.sale}
            onChange={handleFilterChange}
          />
        </div>
        <div className="flex flex-col gap-3 justify-center items-start">
          <Heading className="text-darkGrey text-base font-semibold -mb-1">
            Category
          </Heading>
          <FormInput
            type="checkbox"
            name="design"
            label="UI/UX Design"
            isChecked={filters.design}
            onChange={handleFilterChange}
          />
          <FormInput
            type="checkbox"
            name="webDev"
            label="Web Development"
            isChecked={filters.webDev}
            onChange={handleFilterChange}
          />
          <FormInput
            type="checkbox"
            name="androidDev"
            label="Android Development"
            isChecked={filters.androidDev}
            onChange={handleFilterChange}
          />
          <FormInput
            type="checkbox"
            name="dataScience"
            label="Data Science"
            isChecked={filters.dataScience}
            onChange={handleFilterChange}
          />
        </div>
        <div className="flex flex-col gap-3 justify-center items-start">
          <Heading className="text-darkGrey text-base font-semibold -mb-1">
            Level
          </Heading>
          <FormInput
            type="checkbox"
            name="all"
            label="All Level"
            isChecked={filters.all}
            onChange={handleFilterChange}
          />
          <FormInput
            type="checkbox"
            name="beginner"
            label="Beginner"
            isChecked={filters.beginner}
            onChange={handleFilterChange}
          />
          <FormInput
            type="checkbox"
            name="intermediate"
            label="Intermediate"
            isChecked={filters.intermediate}
            onChange={handleFilterChange}
          />
          <FormInput
            type="checkbox"
            name="advanced"
            label="Advanced"
            isChecked={filters.advanced}
            onChange={handleFilterChange}
          />
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
      </div>
    </>
  );
};

export default SideFilter;
