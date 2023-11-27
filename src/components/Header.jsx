import React, { useState } from "react";
import {
  BellAlertIcon,
  ListBulletIcon,
  Bars3BottomRightIcon,
  UserIcon,
  XMarkIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import logo from "../assets/images/logo.svg";
import SearchInput from "./SearchInput";

// Header Belum dikasih link sama href

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const loggedInContent = (
    <>
      <Button className="hover:text-paleOrange text-sm px-2 flex gap-2 min-w-max items-center text-white">
        <ListBulletIcon className="w-6 h-6" />
        <span className="hidden lg:block">My Class</span>
      </Button>
      <Button className="hover:text-paleOrange text-sm px-2 flex gap-2 min-w-max items-center text-white">
        <BellAlertIcon className="w-6 h-6 " />
        <span className="hidden lg:block">Notifications</span>
      </Button>
      <Button className="hover:text-paleOrange text-sm py-2 px-4 rounded-full flex gap-2 min-w-max items-center text-white border border-1 border-white hover:border-darkOrange">
        <UserIcon className="w-6 h-6 " />
        <span className="hidden lg:block">Username</span>
      </Button>
    </>
  );

  const loggedInContentShowMenu = (
    <>
      <Button className="hover:text-darkOrange text-sm  flex gap-2 min-w-max items-center text-white">
        <ListBulletIcon className="w-6 h-6" />
        <span>My Class</span>
      </Button>
      <Button className="hover:text-darkOrange text-sm  flex gap-2 min-w-max items-center text-white">
        <BellAlertIcon className="w-6 h-6 " />
        <span>Notifications</span>
      </Button>
      <Button className="hover:text-darkOrange text-sm rounded-full flex gap-2 min-w-max items-center text-white">
        <UserIcon className="w-6 h-6 " />
        <span>Username</span>
      </Button>
    </>
  );

  const loggedOutContent = (
    <>
      <Button className="min-w-max flex gap-1 items-center" isOutline>
        <LockClosedIcon className="w-5 h-5 text-white" />
        <span>Sign In</span>
      </Button>
      <Button
        className="min-w-max border border-1 border-paleOrange"
        isOrangeGradient
        type="link"
        href="/register"
      >
        Sign Up
      </Button>
    </>
  );

  const loggedOutContentShowMenu = (
    <>
      <Button className="flex-1" isOutline>
        Sign In
      </Button>
      <Button className="flex-1" isOrangeGradient>
        Sign Up
      </Button>
    </>
  );

  return (
    <header>
      <div className="fixed w-screen top-0 left-0 z-50 bg-lightBlue px-4 md:px-12 lg:px-24">
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 flex items-center gap-2">
            <Button className="flex items-center md:min-w-max">
              <img src={logo} alt="CourseHub Logo" />
            </Button>
            {isLogin && (
              <div className="hidden lg:flex gap-2">
                <div className="w-[1px] bg-white min-h-max mx-2"></div>
                <SearchInput />
              </div>
            )}
          </div>
          {/* {!isLogin && <div className="flex-1 hidden lg:flex"></div>} */}
          <div className="hidden flex-1 md:flex gap-2 justify-end">
            <div className={`${isLogin ? "flex lg:hidden" : "hidden md:flex"}`}>
              <SearchInput />
              <div
                className={`w-[1px] bg-white min-h-max ml-4 ${
                  isLogin ? " " : "mr-2"
                }`}
              ></div>
            </div>
            {isLogin ? loggedInContent : loggedOutContent}
          </div>
          <div className="md:hidden flex-1 flex justify-end">
            <Button onClick={toggleMenu}>
              <Bars3BottomRightIcon className="h-6 w-6 text-white" />
            </Button>
          </div>
        </div>
      </div>
      {/* <div className={`fixed top-0 left-0 w-screen transition-opacity duration-500 ease-in-out ${showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className={`flex flex-col gap-4 bg-lightBlue rounded-b-2xl px-4 pt-24 pb-8 transform transition-transform duration-500 ease-in-out ${showMenu ? 'translate-y-0' : '-translate-y-full'}`}> */}
      <div
        className={`md:hidden fixed bottom-0 left-0 w-screen transition-opacity duration-500 ease-in-out z-50 ${
          showMenu
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } `}
      >
        <div
          className={`flex md:hidden flex-col gap-4 bg-lightBlue rounded-t-2xl px-8 py-12 transform transition-transform duration-500 ease-in-out ${
            showMenu ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <XMarkIcon
            className="w-6 h-6 text-white absolute top-4 right-4 cursor-pointer"
            onClick={toggleMenu}
          />
          <SearchInput />
          {isLogin ? (
            <>
              <div className="flex flex-col gap-4 w-full">
                {loggedInContentShowMenu}
                <div className="flex flex-row items-center gap-2 w-full">
                  <Button isRedGradient className="flex-1">
                    Sign Out
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-row items-center gap-2 w-full">
              {loggedOutContentShowMenu}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
