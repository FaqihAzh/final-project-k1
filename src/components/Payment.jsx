import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FormInput from "./Form";
import { Heading, Paragraph } from "./Typography";
import Button from "./Button";
import { StarIcon } from "@heroicons/react/24/solid";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function Payment() {
  const [formData, setFormData] = useState({
    Card_Number: "",
    Card_name: "",
    cvv: "",
    Expiry_date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderFormInput = (placeholder, label, name, type, text, className) => (
    <FormInput
      placeholder={placeholder}
      label={label}
      name={name}
      value={formData[name]}
      onChange={handleInputChange}
      type={type}
      text={text}
      // className="focus:!border-b-2 focus:!border-b-darkOrange focus:!border-x-0 focus:!border-t-0 focus:!rounded-none rounded-none"
      className="rounded-none transform translate-y-0 focus:!border-x-0 focus:!border-t-0 !border-b-1 !border-b-lightGrey !transition-none !duration-0 "
    />
  );

  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-softGrey w-screen min-h-screen pt-24 flex flex-col-reverse md:flex-row gap-16 justify-center px-6 md:px-0">
      <div className="w-full md:w-[45%] flex flex-col gap-5 pb-7">
        <Accordion
          open={open === 1}
          icon={<Icon id={1} open={open} />}
          className="rounded-b-lg shadow-[0px_6px_8px_3px_#CBD5E0]"
        >
          <AccordionHeader
            onClick={() => handleOpen(1)}
            className={`bg-darkGrey rounded-lg text-white px-4 transition-colors ${
              open === 1
                ? "text-white hover:!text-cloudWhite"
                : "hover:!text-cloudWhite"
            }`}
          >
            Bank Transfer
          </AccordionHeader>
          <AccordionBody className="px-4"></AccordionBody>
        </Accordion>

        <Accordion
          open={open === 2}
          icon={<Icon id={2} open={open} />}
          className="rounded-b-lg shadow-[0px_6px_8px_3px_#CBD5E0]"
        >
          <AccordionHeader
            onClick={() => handleOpen(2)}
            className={`bg-brightBlue rounded-lg text-white px-4 transition-colors ${
              open === 2
                ? "text-white hover:!text-cloudWhite"
                : "hover:!text-cloudWhite"
            }`}
          >
            Bank Transfer
          </AccordionHeader>
          <AccordionBody className="flex flex-col gap-2 items-center ">
            <div className="w-2/3 md:w-1/2">
              <span className="text-darkGrey flex flex-wrap font-medium text-lg">
                Card number
              </span>
              {renderFormInput(
                "4480 0000 0000 0000",
                " ",
                "Card_Number",
                "string",
                "darkGrey"
              )}
            </div>
            <div className="w-2/3 md:w-1/2">
              <span className="text-darkGrey flex flex-wrap font-medium text-lg">
                Card holder name
              </span>
              {renderFormInput("444800", " ", "Card_name", "name", "darkGrey")}
            </div>
            <div className="flex flex-row gap-2 w-2/3 md:w-1/2">
              <div className="w-1/2">
                <span className="text-darkGrey flex flex-wrap font-medium text-lg">
                  cvv
                </span>
                {renderFormInput("000", " ", "cvv", "string", "darkGrey")}
              </div>
              <div className="w-1/2">
                <span className="text-darkGrey flex flex-wrap font-medium text-lg">
                  Expiry date
                </span>
                {renderFormInput(
                  "07/24",
                  " ",
                  "Expiry_date",
                  "date",
                  "darkGrey"
                )}
              </div>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
      <div className="w-full md:w-[25%] h-[30%] outline outline-brightBlue p-5 flex flex-col gap-5 ">
        <Heading variant="h3" className="text-darkGrey">
          Pembayaran kelas
        </Heading>
        <div className="flex flex-col gap-2 p-2 rounded-xl bg-white w-full shadow-xl">
          {/* <CourseCard /> */}
          <div className="w-full">
            <img
              src="https://picsum.photos/300/150"
              alt=""
              className="rounded-lg w-full"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <Paragraph className="text-xs font-medium text-lightGrey tracking-wide">
                UI/UX Design
              </Paragraph>
              <span className="flex items-center text-darkOrange">
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
                <StarIcon className="w-4 h-4" />
              </span>
            </div>
            <Paragraph className="font-medium text-darkGrey tracking-wide">
              UI/UX Design for Beginners
            </Paragraph>
            <Paragraph className="text-xs font-normal text-lightGrey tracking-wide">
              by Felicia Shue
            </Paragraph>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-22 pt-5">
          <div className="flex flex-col gap-4">
            <span className="font-semibold ">Harga</span>
            <span>Rp. 349,000</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-semibold">PPN 11%</span>
            <span>Rp. 38,390</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-semibold">Total Bayar</span>
            <span className="text-brightBlue font-semibold">Rp. 349,000</span>
          </div>
        </div>
        <Button className="px-5 py-3 bg-darkOrange text-white rounded-full hover:scale-105">
          Bayar dan Ikuti Kelas Selamanya
        </Button>
      </div>
    </div>
  );
}
