import React, { useEffect } from "react";
import { Heading, Paragraph } from "./Typography";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { notificationAct } from "../redux/actions/notificationActions/Notification";

const Notification = () => {
  const dispatch = useDispatch();
  const Notification = useSelector((store) => store.notification.notifications);

  useEffect(() => {
    getNotificationData();
  }, []);

  const getNotificationData = () => {
    dispatch(notificationAct());
  };

  const formatUpdatedAt = (updatedAt) => {
    const date = new Date(updatedAt);
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <>
      <div className="bg-softGrey flex flex-col items-center pt-20 md:pt-32 px-4 md:px-20 w-screen min-h-screen ">
        <div className="flex flex-col md:outline outline-2 outline-brightBlue rounded-xl w-full">
          <div className="text-darkGrey md:text-white md:text-center md:bg-brightBlue rounded-t-xl py-0 md:py-3 px-4 md:px-0">
            <Heading variant="h3">Notification</Heading>
          </div>
          {Notification.map((notif) => (
            <div
              key={notif.id}
              className="p-4 mx-0 md:mx-6 my-4 gap-4 shadow-xl bg-white rounded-2xl flex flex-col"
            >
              <div className="flex gap-4 items-center">
                  <BellAlertIcon className="w-8 h-8 p-1 bg-brightBlue rounded-full text-white" />
                  <Paragraph
                    variant="large"
                    className="text-brightBlue flex flex-wrap flex-1"
                  >
                    {notif.title}
                  </Paragraph>
                <Paragraph className="text-darkGrey text-end flex-1 flex-wrap">
                  {formatUpdatedAt(notif.updatedAt)}
                </Paragraph>
              </div>
              <div className="flex flex-col ">
                <Paragraph className="text-darkGrey flex flex-wrap">
                  {notif.body}
                </Paragraph>
                <Paragraph className="text-lightGrey flex flex-wrap">
                  {notif.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notification;
