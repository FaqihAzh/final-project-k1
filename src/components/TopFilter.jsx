import React, { useEffect, useState } from "react";
import Button from "./Button";
import TopFilterSkeleton from "./SkeletonLoading/TopFilterSkeleton";

const TopFilter = ({
  buttonNames,
  setPriceFilter,
  setProgressFilter,
  isMyCourse,
}) => {
  const [activeButton, setActiveButton] = useState("All");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <TopFilterSkeleton />;
  }

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
    if (isMyCourse) {
      return setProgressFilter(buttonName);
    } else {
      return setPriceFilter(buttonName);
    }
  };

  if (!buttonNames || buttonNames.length === 0) {
    return null;
  }

  return (
    <div className="w-full flex gap-2 md:gap-4">
      {buttonNames.map((name) => (
        <Button
          key={name}
          isSolidBlue={activeButton === name}
          isSolidWhite={activeButton !== name}
          className="flex-1 rounded-full transition-all duration-300"
          onClick={() => handleClick(name)}
        >
          {name}
        </Button>
      ))}
    </div>
  );
};

export default TopFilter;
