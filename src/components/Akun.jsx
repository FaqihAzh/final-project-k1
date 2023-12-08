import React, { useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
export const Akun = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="outline outline-1 w-[60rem] h-[35rem] rounded-xl ">
        <div className="w-full h-[15%] bg-[#6176F7] text-white font-bold rounded-t-xl  flex items-center justify-center">
          {" "}
          Akun
        </div>
        <div className="w-[100%] h-[85%] flex ">
          <div className="w-[50%] h-full  flex flex-col pl-3 justify-start items-start  pt-3">
            <button
              onClick={() => handleTabChange("profile")}
              className="flex items-center  space-x-2 h-[3rem] border-b-2 w-[80%]"
            >
              <PencilSquareIcon className="w-[2rem] text-[#6176F7]" />
              <span>Profil Saya</span>
            </button>
            <button
              onClick={() => handleTabChange("changePassword")}
              className="flex items-center  space-x-2 h-[3rem] border-b-2 w-[80%]"
            >
              <Cog6ToothIcon className="w-[2rem] text-[#6176F7]" />
              <span>Ubah Kata Sandi</span>
            </button>
            <button
              onClick={() => handleTabChange("paymentHistory")}
              className="flex items-center  space-x-2 h-[3rem] border-b-2 w-[80%]"
            >
              <ShoppingCartIcon className="w-[2rem] text-[#6176F7]" />
              <span>Riwayat Pembayaran</span>
            </button>
            <button className="flex items-center  space-x-2 h-[3rem] border-b-2 w-[80%]">
              <ArrowLeftOnRectangleIcon className="w-[2rem] text-[#6176F7]" />
              <span>Keluar</span>
            </button>
          </div>

          <div className="w-[50%] outline outline-1 pt-3 ">
            {activeTab === "profile" && <UpdateProfileComponent />}
            {activeTab === "paymentHistory" && <PaymentHistoryComponent />}
            {activeTab === "changePassword" && <ChangePasswordComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

const UpdateProfileComponent = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className=" w-20 h-20 rounded-full overflow-hidden mb-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full flex flex-col items-center" >
        <label className="text-xs mb-1 text-left flex items-start w-[80%]">
          Nama
        </label>
        <input
          id="adminId"
          type="text"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%]">
          Email
        </label>
        <input
          id="adminId"
          type="text"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%] ">
          Nomor Telelpon
        </label>
        <input
          id="adminId"
          type="text"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%] ">
          Negara
        </label>
        <input
          id="adminId"
          type="text"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%]">
          Kota
        </label>
        <input
          id="adminId"
          type="text"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <button className=" text-white font-semibold w-[80%] bg-[#6176F7] mt-3 h-[2.5rem] rounded-3xl">
        Simpan Profil
      </button>
    </div>
  );
};

const PaymentHistoryComponent = () => {
  return (
    <div>
      <h2>Riwayat Pembayaran</h2>
    </div>
  );
};

const ChangePasswordComponent = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const handleInput = (e) => {
    if (e.target.id === "oldPas") {
      setOldPassword(e.target.value);
    }
    if (e.target.id === "NewPas") {
      setNewPassword(e.target.value);
    }
    if (e.target.id === "CnfPas") {
      setConfirmNewPassword(e.target.value);
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-2xl font-bold mb-4">Ubah Password</h2>
     <div className="w-[100%] space-y-4">
         <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%]">
          Masukan Password Lama
        </label>
        <input
          onChange={handleInput}
          id="oldPas"
          type="password"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%] ">
          Masukan Password Baru
        </label>
        <input
          onChange={handleInput}
          id="NewPas"
          type="password"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        /> <span></span>
      </div>
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%] ">
          Ulangi Password Baru 
        </label>
        <input
          onChange={handleInput}
          id="CnfPas"
          type="password"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
    
     </div>
     <button className=" text-white font-semibold w-[80%] bg-[#6176F7] mt-4 h-[2.5rem] rounded-3xl">
       Ubah Password
      </button>
    </div>
  );
};
