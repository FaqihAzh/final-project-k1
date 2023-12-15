import React, { useEffect, useState } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { useUserChangePassword } from "../services/auth/User/userChangePaswword";
import { useFetchDataUser } from "../services/user/getUserProfil";
import { useUpdateDataUser, useUpdateImageUser } from "../services/user/putUserProfil";

export const Akun = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="outline outline-1 w-[50rem] h-[37rem] rounded-xl ">
        <div className="w-full h-[3rem] bg-[#6176F7] text-white font-bold rounded-t-xl  flex items-center justify-center">
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

          <div className="w-[50%] pt-3 h-[100%]">
            {activeTab === "profile" && <UpdateProfileComponent />}
            {activeTab === "paymentHistory" && <PaymentHistoryComponent />}
            {activeTab === "changePassword" && <ChangePasswordComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

//-------------------------------------------------------------------------------------//
const UpdateProfileComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [nama, setnama] = useState("");
  const [noTlpn, setnoTlpn] = useState();
  const [negara, setnegara] = useState("");
  const [kota, setkota] = useState("");
  const [getdata, setgetdata] = useState(true);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const { data: fetchDataProfil } = useFetchDataUser();
  const dataUser = fetchDataProfil?.data;

  useEffect(() => {
    if (getdata && dataUser) {
      setnama(dataUser.full_name);
      setnoTlpn(dataUser.phone_number);
      setnegara(dataUser.country);
      setkota(dataUser.city);
      setgetdata(false);
    }
  }, [getdata, dataUser]);
  const handleInput = (e) => {
    if (e.target.id === "nama") {
      setnama(e.target.value);
    }
    if (e.target.id === "noTlpn") {
      setnoTlpn(e.target.value);
    }
    if (e.target.id === "negara") {
      setnegara(e.target.value);
    }
    if (e.target.id === "kota") {
      setkota(e.target.value);
    }
  };

  const { mutate: updateProfil } = useUpdateDataUser();


  const handleSimpanProfil = () => {
    if (selectedImage && Object.keys(selectedImage).length > 0) {
      updateProfil({
        phone_number: noTlpn,
        full_name: nama,
        profile_image: selectedImage,
        city: kota,
        country: negara,
      });
    } else {
      // Mungkin Anda ingin memberikan pesan kesalahan atau menangani situasi di sini
      console.error("Image is empty or invalid");
    }
  };

  // console.log(fetchDataProfil, "fetchDataProfil");
  console.log(selectedImage, "selectedImage");
  return (
    <div className="flex flex-col items-center ">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <img
          src={
            selectedImage
              ? URL.createObjectURL(selectedImage)
              : "https://via.placeholder.com/150"
          }
          alt="Profile"
          accept="image/*"
          className="w-full h-full object-cover"
        />
      </div>

      <input
        type="file"
        accept="image"
        onChange={handleImageChange}
        className="mb-4"
      />
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%]">
          Nama
        </label>
        <input
          value={nama}
          onChange={handleInput}
          id="nama"
          type="text"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%] ">
          Nomor Telelpon
        </label>
        <input
          value={noTlpn}
          onChange={handleInput}
          id="noTlpn"
          type="number"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%] ">
          Negara
        </label>
        <input
          value={negara}
          onChange={handleInput}
          id="negara"
          type="text"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <div className="w-full flex flex-col items-center">
        <label className="text-xs mb-1 text-left flex items-start w-[80%]">
          Kota
        </label>
        <input
          value={kota}
          onChange={handleInput}
          id="kota"
          type="text"
          className="border rounded-lg h-[2.5rem] p-2 w-[80%] border-gray-200"
        />
      </div>
      <button
        onClick={handleSimpanProfil}
        className=" text-white font-semibold w-[80%] bg-[#6176F7] mt-3 h-[2.5rem] rounded-3xl"
      >
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

//--------------------------------------------------------------//
const ChangePasswordComponent = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const { mutate: gantiPas } = useUserChangePassword();

  const handleInput = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    if (id === "oldPas") {
      setOldPassword(value);
    }
    if (id === "NewPas") {
      setNewPassword(value);
    }
    if (id === "CnfPas") {
      setConfirmNewPassword(value);
    }
  };

  const handleTogglePassword = (type) => {
    if (type === "old") {
      setShowOldPassword(!showOldPassword);
    }
    if (type === "new") {
      setShowNewPassword(!showNewPassword);
    }
    if (type === "confirm") {
      setShowConfirmNewPassword(!showConfirmNewPassword);
    }
  };

  const handleChangePas = () => {
    gantiPas({
      old_password: oldPassword,
      new_password: newPassword,
      confirm_password: confirmNewPassword,
    });
  };

  return (
    <div className="flex flex-col items-center ">
      <h2 className="text-2xl font-bold my-4">Ubah Password</h2>
      <div className="w-[100%] space-y-4">
        <div className="w-full flex flex-col items-center">
          <label className="text-xs mb-1 text-left flex items-start w-[80%]">
            Masukan Password Lama
          </label>
          <div className="relative w-[80%]">
            <input
              onChange={handleInput}
              value={oldPassword}
              id="oldPas"
              type={showOldPassword ? "text" : "password"}
              className="border rounded-lg h-[2.5rem] p-2 w-full border-gray-200"
            />
            <button
              onClick={() => handleTogglePassword("old")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showOldPassword ? (
                <EyeIcon className="w-[2rem]" />
              ) : (
                <EyeSlashIcon className="w-[2rem]" />
              )}
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <label className="text-xs mb-1 text-left flex items-start w-[80%] ">
            Masukan Password Baru
          </label>
          <div className="relative w-[80%]">
            <input
              onChange={handleInput}
              value={newPassword}
              id="NewPas"
              type={showNewPassword ? "text" : "password"}
              className="border rounded-lg h-[2.5rem] p-2 w-full border-gray-200"
            />
            <button
              onClick={() => handleTogglePassword("new")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showNewPassword ? (
                <EyeIcon className="w-[2rem]" />
              ) : (
                <EyeSlashIcon className="w-[2rem]" />
              )}
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <label className="text-xs mb-1 text-left flex items-start w-[80%] ">
            Ulangi Password Baru
          </label>
          <div className="relative w-[80%]">
            <input
              onChange={handleInput}
              value={confirmNewPassword}
              id="CnfPas"
              type={showConfirmNewPassword ? "text" : "password"}
              className="border rounded-lg h-[2.5rem] p-2 w-full border-gray-200"
            />
            <button
              onClick={() => handleTogglePassword("confirm")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showConfirmNewPassword ? (
                <EyeIcon className="w-[2rem]" />
              ) : (
                <EyeSlashIcon className="w-[2rem]" />
              )}
            </button>
          </div>
        </div>
      </div>
      <button
        className="text-white font-semibold w-[80%] bg-[#6176F7] mt-4 h-[2.5rem] rounded-3xl"
        onClick={handleChangePas}
      >
        Ubah Password
      </button>
    </div>
  );
};
