import React from "react";
import { Heading, Paragraph } from "./Typography";
import { BellAlertIcon } from "@heroicons/react/24/outline";
const Notification = () => {
  return (
    <>
      <div className="bg-softGrey flex flex-col items-center gap-24 pt-32 w-screen min-h-screen">
        <div className="flex flex-col gap-6 md:outline outline-2 outline-brightBlue rounded-xl w-full md:w-2/3 ">
          <div className="text-darkGrey md:text-white md:text-center md:bg-brightBlue rounded-t-xl py-0 md:py-3 px-4 md:px-0">
            <Heading variant="h3">Notification</Heading>
          </div>
          <div className="grid grid-cols-6 gap-0 item px-4">
            <div className="flex gap-4 col-span-4">
              <div>
                <BellAlertIcon className="w-8 h-8 p-1 mt-[0.35rem] bg-brightBlue rounded-full text-white" />
              </div>
              <div className="flex flex-col">
                <Paragraph
                  variant="large"
                  className="text-brightBlue flex flex-wrap"
                >
                  Promosi
                </Paragraph>
                <Paragraph className="text-darkGrey flex flex-wrap">
                  Dapatkan Potongan 50%!
                </Paragraph>
                <Paragraph className="text-lightGrey flex flex-wrap">
                  Syarat dan Ketentuan berlaku!
                </Paragraph>
              </div>
            </div>
            <Paragraph className="text-darkGrey text-end col-span-2">
              2 Maret, 12:00
            </Paragraph>
          </div>
          <div className="grid grid-cols-6 gap-0 item px-4">
            <div className="flex gap-4 col-span-4">
              <div>
                <BellAlertIcon className="w-8 h-8 p-1 mt-[0.35rem] bg-brightBlue rounded-full text-white" />
              </div>
              <div className="flex flex-col">
                <Paragraph
                  variant="large"
                  className="text-brightBlue flex flex-wrap"
                >
                  Notifikasi
                </Paragraph>
                <Paragraph className="text-darkGrey flex flex-wrap">
                  Password berhasil diubah
                </Paragraph>
              </div>
            </div>
            <Paragraph className="text-darkGrey text-end col-span-2">
              2 Maret, 12:00
            </Paragraph>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
