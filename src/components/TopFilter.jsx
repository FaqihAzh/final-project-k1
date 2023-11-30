import React, { useState } from "react";
import Button from "./Button";

const TopFilter = ({ buttonNames }) => {
  const [activeButton, setActiveButton] = useState("All");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
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
