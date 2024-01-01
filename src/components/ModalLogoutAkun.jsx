import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LogOut } from "../redux/actions/authActions/User/authLoginUser";
import { toast } from "react-toastify";
import { Heading } from "./Typography";
import Button from "./Button";
import { XCircleIcon } from "@heroicons/react/24/outline";

const ModalLogoutAkun = ({ closeModal }) => {
  const closeLogoutModal = () => closeModal(); 
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(LogOut());
    toast("Logout Success", {
      position: "bottom-center",
      className: "custom-toast-success",
    });
    window.location.href = "/";
    closeLogoutModal();
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-10 py-12 md:p-12 md:pt-14 rounded-2xl relative flex flex-col gap-2 md:gap-4">
        <div className="items-end absolute right-2 top-3 md:top-3 md:right-3">
        <XCircleIcon
            className="hover:text-salmon w-9 h-9 cursor-pointer"
            strokeWidth={1}
            onClick={closeLogoutModal}
          ></XCircleIcon>
        </div>
        <Heading variant="h4">Anda yakin ingin keluar?</Heading>
        <div className="flex justify-center gap-4 mt-4">
          <Button isGreenGradient onClick={handleLogout} className="w-1/2">
            Ya
          </Button>
          <Button isRedGradient onClick={closeLogoutModal} className="w-1/2">
            Tidak
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogoutAkun;
