import React, { useState } from "react";
import {
  ArrowUpRightIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  CubeIcon,
  TagIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import { Paragraph } from "./Typography";

const iconMap = {
  design: <PaintBrushIcon className="w-5 h-5 text-lightGrey" />,
  web: <CodeBracketIcon className="w-5 h-5 text-lightGrey" />,
  android: <DevicePhoneMobileIcon className="w-5 h-5 text-lightGrey" />,
  data: <CircleStackIcon className="w-5 h-5 text-lightGrey" />,
  business: <CubeIcon className="w-5 h-5 text-lightGrey" />,
};

const CategoryItem = ({ category }) => {
  const [isHover, setIsHover] = useState(false);
  const categoryNameLowerCase = category.name_categories.toLowerCase();

  const iconComponent = iconMap[
    Object.keys(iconMap).find((key) => categoryNameLowerCase.includes(key))
  ] || <TagIcon className="w-5 h-5 text-lightGrey" />;

  const hoverParent = isHover ? "shadow-lg border border-paleOrange" : "";
  const hoverChild = isHover
    ? "p-2 text-white bg-paleOrange shadow-lg"
    : "p-0 text-paleOrange bg-transparent";

  return (
    <Button
      className={`relative py-3 px-4 flex justify-between items-center rounded-2xl bg-white w-full transition duration-500 ease-in-out ${hoverParent}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      type="link"
      href={`/course/category/${category.id}`}
    >
      <div className="flex gap-2 items-center">
        {iconComponent}
        <Paragraph
          variant="small"
          className="text-darkGrey font-normal overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[90%]"
        >
          {category.name_categories}
        </Paragraph>
      </div>
      <div
        className={`absolute right-4 flex items-center rounded-full transition duration-500 ease-in-out ${hoverChild}`}
      >
        <ArrowUpRightIcon className="w-4 h-4" />
      </div>
    </Button>
  );
};

export default CategoryItem;
