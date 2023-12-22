import React, { useEffect } from "react";
import angular from "../assets/images/techLogos/angular.png";
import bootstrap from "../assets/images/techLogos/bootstrap.png";
import c from "../assets/images/techLogos/c.png";
import codeigniter from "../assets/images/techLogos/codeigniter.png";
import cplusplus from "../assets/images/techLogos/cplusplus.png";
import csharp from "../assets/images/techLogos/csharp.png";
import css3 from "../assets/images/techLogos/css3.png";
import django from "../assets/images/techLogos/django.png";
import figma from "../assets/images/techLogos/figma.png";
import git from "../assets/images/techLogos/git.png";
import github from "../assets/images/techLogos/github.png";
import gitlab from "../assets/images/techLogos/gitlab.png";
import go from "../assets/images/techLogos/go.png";
import google from "../assets/images/techLogos/google.png";
import html5 from "../assets/images/techLogos/html5.png";
import java from "../assets/images/techLogos/java.png";
import javascript from "../assets/images/techLogos/javascript.png";
import jquery from "../assets/images/techLogos/html5.png";
import kotlin from "../assets/images/techLogos/kotlin.png";
import mongodb from "../assets/images/techLogos/mongodb.png";
import mysql from "../assets/images/techLogos/mysql.png";
import nextjs from "../assets/images/techLogos/nextjs.png";
import nodejs from "../assets/images/techLogos/nodejs.png";
import php from "../assets/images/techLogos/php.png";
import postgresql from "../assets/images/techLogos/postgresql.png";
import python from "../assets/images/techLogos/python.png";
import react from "../assets/images/techLogos/react.png";
import ruby from "../assets/images/techLogos/ruby.png";
import sass from "../assets/images/techLogos/sass.png";
import swift from "../assets/images/techLogos/swift.png";
import tailwindcss from "../assets/images/techLogos/tailwindcss.png";
import typescript from "../assets/images/techLogos/typescript.png";
import vscode from "../assets/images/techLogos/vscode.png";
import { Heading, Paragraph } from "./Typography";
import FadeIn from "./FadeIn";
import { CookieKeys, CookieStorage } from "../utils/constants/cookies";

const LogoMoving = () => {
  const logosGroup1 = [
    angular,
    bootstrap,
    c,
    codeigniter,
    cplusplus,
    csharp,
    css3,
    django,
    figma,
    git,
    github,
    gitlab,
    go,
    google,
    html5,
    java,
    javascript,
    jquery,
    kotlin,
    mongodb,
    mysql,
  ];

  const logosGroup2 = [
    nextjs,
    nodejs,
    php,
    postgresql,
    python,
    react,
    ruby,
    sass,
    swift,
    tailwindcss,
    typescript,
    vscode,
  ];

  const token = CookieStorage.get(CookieKeys.AuthToken);
  const isLogin = token ? true : false;

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(scrollers);
    }
  }, []);

  const addAnimation = (scrollers) => {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  };

  const renderLogos = (logos) => {
    return logos.map((logo, index) => (
      <img
        key={index}
        className="max-h-[3.5rem] w-auto"
        src={logo}
        alt={`logo-${index}`}
      />
    ));
  };

  return (
    <div
      className={`${
        isLogin ? "pt-0 -mt-4" : "pt-12"
      } pb-16 flex flex-col gap-6 h-auto w-screen bg-softGrey`}
    >
      <div className="flex flex-col mb-2 px-4 md:px-12 lg:px-24">
        <FadeIn delay={0.2} direction="up">
          <Heading
            variant="h1"
            className="text-darkGrey flex gap-2 justify-start items-center"
          >
            Our <span className="text-brightBlue ">Best Stack</span>
          </Heading>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <Paragraph variant="large" className=" text-lightGrey font-thin z-20">
            The best and most comprehensive place to learn Information
            Technology
          </Paragraph>
        </FadeIn>
      </div>
      <FadeIn delay={0.3} direction="left">
        <div
          className="scroller mx-4 md:mx-12 lg:mx-24 flex-1"
          data-speed="slow"
        >
          <div className="tag-list scroller__inner flex gap-8 flex-wrap h-full items-center">
            {renderLogos(logosGroup1)}
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.3} direction="right">
        <div
          className="scroller mx-4 md:mx-12 lg:mx-24 flex-1"
          data-speed="fast"
          data-direction="right"
        >
          <div className="tag-list scroller__inner flex gap-8 flex-wrap h-full items-center">
            {renderLogos(logosGroup2)}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default LogoMoving;
