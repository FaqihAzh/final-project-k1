import React, { useState } from "react";
import { ArrowUpRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import { Paragraph } from "./Typography";

const CategoryItem = () => {
  const [isHover, setIsHover] = useState(false);

  const hoverParent = isHover ? "!shadow-lg !border !border-paleOrange" : " ";
  const hoverChild = isHover
    ? "!p-2 !text-white !bg-paleOrange !shadow-lg"
    : "p-0 text-paleOrange bg-transparent";

  return (
    <>
      <Button
        className={`relative py-3 px-4 flex justify-between items-center rounded-2xl bg-white w-full transition duration-500 ease-in-out ${hoverParent}`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="flex gap-2 items-center">
          <CodeBracketIcon
            className={`w-5 h-5 ${
              isHover ? "text-darkGrey" : "text-lightGrey"
            }`}
          />
          <Paragraph
            variant="small"
            className="text-darkGrey font-normal overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[90%]"
          >
            Development
          </Paragraph>
        </div>
        <div
          className={`absolute right-4 flex items-center rounded-full transition duration-500 ease-in-out ${hoverChild}`}
        >
          <ArrowUpRightIcon className="w-4 h-4" />
        </div>
      </Button>
    </>
  );
};

export default CategoryItem;
