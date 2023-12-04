import React, { useState } from "react";
import Button from "../components/Button";
import SearchInput from "../components/SearchInput";
import { Heading, Paragraph } from "../components/Typography";
import Hero from "../components/Hero";
import FormInput from "../components/Form";
import RegisterUser from "../components/Auth/RegisterUser";
import CourseCard from "../components/CourseCard";
import Advantages from "../components/Advantages";
import CategoryItem from "../components/CategoryItem";
import SideFilter from "../components/SideFilter";
import TopFilter from "../components/TopFilter";
import AllCoursePage from "./Course/AllCoursePage";

const ColorPalettePage = () => {
  const colors = [
    { name: "white", hex: "#FFFFFF" },
    { name: "paleOrange", hex: "#FFC27A" },
    { name: "darkOrange", hex: "#FFA337" },
    { name: "lightBlue", hex: "#6176F7" },
    { name: "brightBlue", hex: "#3461FD" },
    { name: "darkGrey", hex: "#21212F" },
    { name: "lightGrey", hex: "#6D737A" },
    { name: "black", hex: "#1B1D1F" },
    { name: "turquoise", hex: "#2AF9B1" },
    { name: "seaGreen", hex: "#20B486" },
    { name: "palePink", hex: "#FFA4AF" },
    { name: "salmon", hex: "#EE455A" },
    { name: "cloudWhite", hex: "#F4F7FE" },
  ];

  // Note: Halaman ini buat ngeliat Warna doang :V
  // Paragraph, Heading, Button => ClassName yg perlu disesuain bisa ditambahin pake Classname Tailwind kyk biasa

  // Co Button Link Internal

  // <Button
  //   type="link" === Kalo type link internal dia sepaket sama href route
  //   href="/" === Sesuai di route
  //   className="Sesuain Kalo perlu, kalo gaperlu dihapus aja"
  // >
  //   Home
  // </Button>

  // Co Button link Eksternal

  // <Button
  //   type="link" === Dia sepaket sama url eksternal, isExternal buat ngasih tau di External, target blank biar buka tab baru
  //   href="https://www.instagram.com/"
  //   isExternal
  //   target="_blank"
  //   className="Sesuain Kalo perlu, kalo gaperlu dihapus aja"
  // >
  //   Instagram
  // </Button>;

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {/* <Hero /> */}
      {/* <RegisterUser /> */}
      {/* <Hero /> */}
      {/* <Advantages /> */}
      {/* <div className="min-h-screen w-screen bg-gray-500 pt-24 px-4 md:px-12 lg:px-24">
        <div className="flex flex-wrap justify-center">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-32 h-32 m-2 rounded-md flex justify-center items-center flex-col gap-2"
              style={{ backgroundColor: color.hex }}
            >
              <p className="text-center text-white">{color.name}</p>
              <p className="text-center text-white">{color.hex}</p>
            </div>
          ))}
        </div>
        <div className="p-2 flex gap-2 flex-wrap justify-center">
          <Button isOrangeGradient>Orange Gradient</Button>
          <Button isGreenGradient>Green Gradient</Button>
          <Button isRedGradient>Red Gradient</Button>
          <Button isOutline>Outline</Button>
        </div>
        <div className="p-2 flex gap-2 flex-wrap justify-center items-center">
          <Heading variant="h1" className="text-white">
            Heading 1
          </Heading>
          <Heading variant="h2" className="text-white">
            Heading 2
          </Heading>
          <Heading variant="h3" className="text-white">
            Heading 3
          </Heading>
          <Heading variant="h4" className="text-white">
            Heading 4
          </Heading>
        </div>
        <div className="p-2 flex gap-8 flex-wrap justify-center items-center">
          <Paragraph variant="small" className="text-white">
            Paragraph Small
          </Paragraph>
          <Paragraph className="text-white">Paragraph Default</Paragraph>
          <Paragraph variant="large" className="text-white">
            Paragraph Large
          </Paragraph>
        </div>
        <div className="p-2 flex gap-8 flex-wrap justify-center items-center">
          <FormInput
            placeholder="Enter your email address"
            label="Email Address"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            text="white"
          />
          <FormInput
            placeholder="Enter your password"
            label="Password"
            value={inputValue}
            onChange={handleInputChange}
            type="text"
            text="white"
          />
        </div>
      </div> */}
      {/* <div className="bg-white py-24 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row justify-center gap-8 md:gap-4 w-screen">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div> */}
      {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:px-12 lg:px-24 py-24 bg-softGrey">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div> */}
      {/* <div className="pt-32 bg-softGrey py-12 px-4 md:px-12 lg:px-24 flex flex-col md:flex-row justify-start gap-12 w-screen min-h-screen">
        <div className="w-[25%]">
          <SideFilter />
        </div>
        <div className="flex flex-col justify-start w-[75%] gap-4">
          <TopFilter buttonNames={["All", "Premium", "Free"]} />
          <div className="-mb-4">
            <Paragraph variant="small" className="text-darkGrey font-medium">
              Result for{" "}
              <span className=" italic">
                Top New, UI/UX Design, Advanced Level
              </span>
            </Paragraph>
          </div>
          <div className="grid grid-cols-3 gap-4 ">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ColorPalettePage;
