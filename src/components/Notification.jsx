import React, { useEffect, useState } from "react";
import { Heading, Paragraph } from "./Typography";
import {
  BellAlertIcon,
  EnvelopeIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  notificationAct,
  notificationPutAct,
} from "../redux/actions/notificationActions/Notification";
import NotificationSkeleton from "./SkeletonLoading/NotificationSkeleton";

const Notification = () => {
  const dispatch = useDispatch();
  const Notification = useSelector((store) => store.notification.notifications);

  useEffect(() => {
    getNotificationData();
  }, []);

  const getNotificationData = async () => {
    await dispatch(notificationAct());
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <NotificationSkeleton />;
  }

  const formatUpdatedAt = (updatedAt) => {
    const date = new Date(updatedAt);

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const monthIndex = date.getMonth();
    const monthName = monthNames[monthIndex];

    const day = date.getDate();
    const year = date.getFullYear();

    const hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    const minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();

    const formattedDate = `${day} ${monthName} ${year}, ${hours}:${minutes}`;
    return formattedDate;
  };

  const handleMark = (id) => {
    const success = dispatch(notificationPutAct(id));
    if (success) {
      getNotificationData();
    }
  };

  return (
    <>
      <div className="bg-softGrey flex flex-col items-center py-20 md:py-32 px-4 md:px-12 lg:px-24 w-screen min-h-screen ">
        <div className="flex flex-col rounded-xl w-full gap-4 pb-6">
          <Heading className="text-darkGrey" variant="h2">
            Notification
          </Heading>

          {Notification.map((notif) => (
            <div
              key={notif.id}
              className="grid grid-cols-12 py-4 px-6 md:px-8 gap-2 rounded-2xl bg-white"
            >
              <div className="col-span-9 flex gap-4 items-center">
                <div className="hidden md:flex">
                  <BellAlertIcon className="w-7 h-7 p-1 bg-darkOrange rounded-full text-white" />
                </div>

                <div className="flex flex-col justify-center">
                  <Paragraph className="text-darkOrange font-semibold">
                    {notif.title}
                  </Paragraph>
                  <Paragraph className="text-darkGrey font-light">
                    {notif.body}
                  </Paragraph>
                  <Paragraph
                    variant="small"
                    className="text-lightGrey text-start mt-1 font-normal "
                  >
                    {formatUpdatedAt(notif.updatedAt)}
                  </Paragraph>
                </div>
              </div>
              <div className="col-span-3 flex items-center justify-end">
                <div className="flex justify-end">
                  {notif.isRead ? (
                    <EnvelopeOpenIcon className="w-7 h-7 p-1 bg-lightGrey bg-opacity-70 rounded-full text-white" />
                  ) : (
                    <EnvelopeIcon
                      onClick={() => {
                        handleMark(notif.id);
                      }}
                      className="w-7 h-7 p-1 bg-seaGreen bg-opacity-70 rounded-full text-white cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
            // <div
            //   key={notif.id}
            //   className=" p-4 gap-4 shadow-sm bg-white rounded-2xl flex flex-col"
            // >
            //   <div className="flex gap-4 items-center">
            //     <BellAlertIcon className="w-8 h-8 p-1 bg-brightBlue rounded-full text-white" />
            //     <Paragraph
            //       variant="large"
            //       className="text-brightBlue flex flex-wrap flex-1"
            //     >
            //       {notif.title}
            //     </Paragraph>
            //     <Paragraph className="text-darkGrey text-end flex-1 flex-wrap">
            //       {formatUpdatedAt(notif.updatedAt)}
            //     </Paragraph>
            //   </div>
            //   <div className="flex flex-col ">
            //     <Paragraph className="text-darkGrey flex flex-wrap">
            //       {notif.body}
            //     </Paragraph>
            //     <Paragraph className="text-lightGrey flex flex-wrap">
            //       {notif.description}
            //     </Paragraph>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notification;
