import React, { useState } from "react";
import FormInput from "../Form";
import Button from "../Button";
// import darkLogo from "../../assets/images/darkLogo.svg";
import { Heading, Paragraph } from "../Typography";
import Header from "../Header";
import FadeIn from "../FadeIn";

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hp: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderFormInput = (placeholder, label, name, type, text) => (
    <FormInput
      placeholder={placeholder}
      label={label}
      name={name}
      value={formData[name]}
      onChange={handleInputChange}
      type={type}
      text={text}
    />
  );

  return (
    <>
      <div className="block md:hidden">
        <Header />
      </div>
      <div className="flex flex-col md:flex-row w-screen h-screen bg-cloudWhite ">
        <div className="hidden md:flex flex-col flex-1 h-full items-center justify-center text-center px-4 md:px-12 gap-4">
          {/* <img src={darkLogo} alt="darkLogo" />
          <Heading variant="h1" className="text-darkGrey">
            Sign Up Now,
            <span className="text-darkOrange ml-2">
              Start Your Learning Journey.
            </span>
          </Heading>
          <Paragraph className="text-center text-lightGrey">
            Embark on a journey of knowledge by signing up today! Your learning
            adventure begins with a simple registration.
          </Paragraph> */}
        </div>
        <div className="flex-1 rounded-none md:rounded-bl-[3rem] md:rounded-tl-[3rem] bg-white shadow-lg h-full flex items-center">
          <div className="flex w-full py-4 px-4 md:px-12 lg:px-32 flex-col gap-4">
            <FadeIn delay={0.2} direction="down" fullWidth>
              <Heading variant="h3" className="text-darkGrey">
                Create Account
              </Heading>
            </FadeIn>
            <FadeIn delay={0.2} direction="down" fullWidth>
              {renderFormInput(
                "Enter your full name",
                "Name",
                "name",
                "text",
                "darkGrey"
              )}
            </FadeIn>
            <FadeIn delay={0.3} direction="down" fullWidth>
              {renderFormInput(
                "Enter your email address",
                "Email Address",
                "email",
                "email",
                "darkGrey"
              )}
            </FadeIn>
            <FadeIn delay={0.4} direction="down" fullWidth>
              {renderFormInput(
                "Enter your phone number",
                "Phone Number",
                "hp",
                "text",
                "darkGrey"
              )}
            </FadeIn>
            <FadeIn delay={0.4} direction="up" fullWidth>
              {renderFormInput(
                "Enter your password",
                "Password",
                "password",
                "password",
                "darkGrey"
              )}
            </FadeIn>
            <FadeIn delay={0.3} direction="up" fullWidth>
              <Button
                isBlock
                className="px-5 py-3 bg-darkOrange text-white rounded-full"
              >
                Sign Up
              </Button>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph className="text-xs text-center text-lightGrey">
                By creating an account you have agreed to CourseHub's
                <span className="text-darkOrange"> Terms & Condition</span> and
                <span className="text-darkOrange"> Privacy Policy.</span>
              </Paragraph>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" fullWidth>
              <Paragraph variant="small" className="text-darkGrey text-center">
                Already have an account?
                <Button className="text-darkOrange font-semibold ml-1">
                  Let's Sign in!
                </Button>
              </Paragraph>
            </FadeIn>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
