import React, { useEffect, useState } from "react";
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
import { CookieKeys, CookieStorage } from "../utils/constants/cookies";
import { useUserGetData } from "../services/auth/User/userGetData";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../redux/actions/authActions/User/authLoginUser";
import { notificationAct } from "../redux/actions/notificationActions/Notification";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMyCourse = useSelector((store) => store.course.isMyCourse);
  const isNotif = useSelector((store) => store.course.isNotif);
  const isProfile = useSelector((store) => store.course.isProfile);
  const token = CookieStorage.get(CookieKeys.AuthToken);
  const isLogin = token ? true : false;

  const { data } = useUserGetData();

  const dispatch = useDispatch();

  const handleLogoutUser = () => {
    dispatch(LogOut());
    toast("Logout Success", {
      position: "bottom-center",
      className: "custom-toast-success",
    });
    window.location.href = "/";
  };

  const Notification = useSelector((store) => store.notification.notifications);

  useEffect(() => {
    const interval = setInterval(() => {
      getNotificationData();
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNotificationData = async () => {
    await dispatch(notificationAct());
  };

  const countReadNotifications = () => {
    const readNotifications = Notification.filter(
      (notification) => !notification.isRead
    );
    return readNotifications.length;
  };

  const notifAmount = Notification && countReadNotifications();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const loggedInContent = (
    <>
      <Button
        type="link"
        href="/my/course"
        className={`hover:text-paleOrange text-sm px-2 flex gap-2 min-w-max items-center ${
          isMyCourse ? "text-paleOrange" : "text-white"
        }`}
      >
        <ListBulletIcon className="w-6 h-6" />
        <span className="hidden lg:block">My Class</span>
      </Button>
      <Button
        type="link"
        href="/notification"
        className={`hover:text-paleOrange text-sm px-2 flex gap-2 min-w-max items-center relative ${
          isNotif ? "text-paleOrange" : "text-white"
        }`}
      >
        <BellAlertIcon className="w-6 h-6 " />
        <span className="hidden lg:block">Notifications</span>
        {notifAmount > 0 && (
          <div className="top-1 left-1 w-4 h-4 text-xs rounded-full bg-salmon absolute justify-center items-center flex text-white font-medium">
            {notifAmount}
          </div>
        )}
      </Button>
      <Button
        type="link"
        href="/account"
        className={`hover:text-paleOrange text-sm py-2 px-4 rounded-full flex gap-2 min-w-max items-center ${
          isProfile
            ? "text-paleOrange outline-none lg:outline lg:outline-1 lg:outline-darkOrange"
            : "text-white outline-none lg:outline lg:outline-1 lg:outline-white"
        }  lg:hover:outline-darkOrange`}
      >
        <UserIcon className="w-6 h-6 " />
        <span className="hidden lg:block">
          {data ? data.nickname : "Username"}
        </span>
      </Button>
    </>
  );

  const loggedInContentShowMenu = (
    <>
      <Button
        type="link"
        href="/my/course"
        className="hover:text-darkOrange text-sm  flex gap-2 min-w-max items-center text-white"
      >
        <ListBulletIcon className="w-6 h-6" />
        <span>My Class</span>
      </Button>
      <Button
        type="link"
        href="/notification"
        className="hover:text-darkOrange text-sm  flex gap-2 min-w-max items-center text-white"
      >
        <BellAlertIcon className="w-6 h-6 " />
        <span>Notifications</span>
      </Button>
      <Button
        type="link"
        href="/account"
        className="hover:text-darkOrange text-sm rounded-full flex gap-2 min-w-max items-center text-white"
      >
        <UserIcon className="w-6 h-6 " />
        <span>{data ? data.nickname : "Username"}</span>
      </Button>
    </>
  );

  const loggedOutContent = (
    <>
      <Button
        type="link"
        href="/login"
        className="flex-1 flex gap-1 items-center !min-w-max md:!max-w-fit"
        isOutline
      >
        <LockClosedIcon className="w-5 h-5 text-white" />
        <span>Sign In</span>
      </Button>
      <Button
        className="!outline !outline-1 !outline-paleOrange flex-1 flex justify-center items-center !min-w-max md:!max-w-fit"
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
      <Button
        type="link"
        href="/login"
        className="flex-1 flex gap-1 items-center justify-center !min-w-max md:!max-w-fit"
        isOutline
      >
        <LockClosedIcon className="w-5 h-5 text-white" />
        <span>Sign In</span>
      </Button>
      <Button
        isOrangeGradient
        type="link"
        href="/register"
        className="!outline !outline-1 !outline-paleOrange flex-1 flex items-center justify-center !min-w-max md:!max-w-fit"
      >
        Sign Up
      </Button>
    </>
  );

  return (
    <header>
      <div className="fixed w-screen top-0 left-0 z-50 bg-lightBlue overflow-hidden">
        <div className="flex items-center gap-4 py-6 lg:py-8 max-w-[1440px] mx-auto px-4 md:px-12 lg:px-24">
          <div className="flex-1 flex items-center gap-2">
            <Button
              type="link"
              href="/"
              className="flex items-center md:min-w-max"
            >
              <img src={logo} alt="CourseHub Logo" />
            </Button>
            {isLogin && (
              <div className="hidden lg:flex gap-2">
                <div className="w-[1px] bg-white min-h-max mx-2"></div>
                <SearchInput text="white" />
              </div>
            )}
          </div>
          <div className="hidden flex-1 md:flex gap-2 justify-end">
            <div className={`${isLogin ? "flex lg:hidden" : "hidden md:flex"}`}>
              <SearchInput text="white" />
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

      {/* Kalo mau header muncul dari atas */}

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
                  <Button
                    onClick={handleLogoutUser}
                    isRedGradient
                    className="flex-1"
                  >
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
