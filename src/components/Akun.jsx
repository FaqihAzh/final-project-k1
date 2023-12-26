import React, { useEffect, useState } from "react";
import {
  ChevronRightIcon,
  PencilSquareIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
  ArrowLeftOnRectangleIcon,
  EyeIcon,
  EyeSlashIcon
} from "@heroicons/react/24/outline";
import { useUserChangePassword } from "../services/auth/User/userChangePaswword";
import { useFetchDataUser } from "../services/user/getUserProfil";
import {
  useUpdateDataUser,
  useUpdateImageUser,
} from "../services/user/putUserProfil";
import { Heading } from "./Typography";
import Button from "./Button";
import {
  Card,
  Drawer,
  List,
  ListItem,
} from "@material-tailwind/react";

export const Akun = () => {
  const [activeTab, setActiveTab] = useState("profile");



  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    // <div className="flex flex-col items-center pt-16 md:pt-32 px-4 md:px-14 lg:px-24 w-screen min-h-screen bg-softGrey">
    //   <div className="flex flex-col md:outline outline-2 outline-lightBlue rounded-xl w-full">
    //     <div className="hidden md:block text-darkGrey md:text-white md:text-center md:bg-lightBlue rounded-t-xl py-2 px-0">
    //       <Heading variant="h3">Account</Heading>
    //     </div>
    //     <div className="flex flex-col md:flex-row my-4">
    //       <div className="hidden md:flex w-[50%] flex-col px-4 justify-start items-start ">
    //         <button
    //           onClick={() => handleTabChange("profile")}
    //           className="flex items-center space-x-2 h-[3rem] border-b-2 w-[80%]"
    //         >
    //           <PencilSquareIcon className="w-[2rem] text-[#6176F7]" />
    //           <span>Profil</span>
    //         </button>
    //         <button
    //           onClick={() => handleTabChange("changePassword")}
    //           className="flex items-center space-x-2 h-[3rem] border-b-2 w-[80%]"
    //         >
    //           <Cog6ToothIcon className="w-[2rem] text-[#6176F7]" />
    //           <span>Change Password</span>
    //         </button>
    //         <button
    //           onClick={() => handleTabChange("paymentHistory")}
    //           className="flex items-center space-x-2 h-[3rem] border-b-2 w-[80%]"
    //         >
    //           <ShoppingCartIcon className="w-[2rem] text-[#6176F7]" />
    //           <span>Payment History</span>
    //         </button>
    //         <button className="flex items-center space-x-2 h-[3rem] border-b-2 w-[80%]">
    //           <ArrowLeftOnRectangleIcon className="w-[2rem] text-[#6176F7]" />
    //           <span>Logout</span>
    //         </button>
    //       </div>

    //       <Sidebar
    //         activeTab={activeTab}
    //         handleTabChange={handleTabChange}
    //       />

    //       <div className="w-full md:w-[50%] pt-3">
    //         {activeTab === "profile" && <UpdateProfileComponent />}
    //         {activeTab === "paymentHistory" && <PaymentHistoryComponent />}
    //         {activeTab === "changePassword" && <ChangePasswordComponent />}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col w-screen h-screen md:h-fit bg-softGrey">
        <div className="flex flex-col md:flex-row pt-16 md:pt-24 md:pb-5 px-4">
          <div className="hidden md:flex md:w-[35%] lg:w-[25%] bg-white h-screen flex-col rounded-[2rem] shadow-2xl p-7 gap-2">
          <Heading variant="h3" className="text-lightBlue">Account</Heading>
            <button
              onClick={() => handleTabChange("profile")}
              className="flex items-center space-x-2 h-[3rem] border-b-2 w-[100%]"
            >
              <PencilSquareIcon className="w-[2rem] text-[#6176F7]" />
              <span>Profil</span>
            </button>
            <button
              onClick={() => handleTabChange("changePassword")}
              className="flex items-center space-x-2 h-[3rem] border-b-2 w-[100%]"
            >
              <Cog6ToothIcon className="w-[2rem] text-[#6176F7]" />
              <span>Change Password</span>
            </button>
            <button
              onClick={() => handleTabChange("paymentHistory")}
              className="flex items-center space-x-2 h-[3rem] border-b-2 w-[100%]"
            >
              <ShoppingCartIcon className="w-[2rem] text-[#6176F7]" />
              <span>Payment History</span>
            </button>
            <button className="flex items-center space-x-2 h-[3rem] border-b-2 w-[100%]">
              <ArrowLeftOnRectangleIcon className="w-[2rem] text-[#6176F7]" />
              <span>Logout</span>
            </button>
          </div>

          <Sidebar
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />

          <div className="flex flex-row justify-center w-full md:w-[65%] lg:w-[75%] pt-3">
            {activeTab === "profile" && <UpdateProfileComponent />}
            {activeTab === "paymentHistory" && <PaymentHistoryComponent />}
            {activeTab === "changePassword" && <ChangePasswordComponent />}
          </div>
        </div>
    </div>
  );
};

//-------------------------------------------------------------------------------------//
const UpdateProfileComponent = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [nama, setnama] = useState("");
  const [noTlpn, setnoTlpn] = useState();
  const [negara, setnegara] = useState("");
  const [kota, setkota] = useState("");
  const [getdata, setgetdata] = useState(true);
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const { data: fetchDataProfil } = useFetchDataUser();
  const dataUser = fetchDataProfil?.data;
  console.log(dataUser, "dataUser");

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
    updateProfil({
      phone_number: noTlpn,
      full_name: nama,
      profile_image: selectedImage,
      city: kota,
      country: negara,
    });
  };

  // console.log(fetchDataProfil, "fetchDataProfil");
  console.log(selectedImage, "selectedImage");
  return (
    // <div className="flex flex-col items-center">
    <div className="flex flex-col items-center w-full lg:w-1/2"> 
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
        onChange={handleImage}
        className="mb-4"
      />
      <div className="w-full flex flex-col gap-3 px-8">
        <div className="flex flex-col w-full ">
          <label className="text-xs text-left">Nama</label>
          <input
            value={nama}
            onChange={handleInput}
            id="nama"
            type="text"
            className="border rounded-lg h-[2.5rem] p-2 w-full border-gray-200"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-xs mb-1 text-left flex items-start w-[80%] ">
            Nomor Telelpon
          </label>
          <input
            value={noTlpn}
            onChange={handleInput}
            id="noTlpn"
            type="number"
            className="border rounded-lg p-2 w-full border-gray-200"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-xs mb-1 text-left flex items-start ">
            Negara
          </label>
          <input
            value={negara}
            onChange={handleInput}
            id="negara"
            type="text"
            className="border rounded-lg p-2 w-full border-gray-200"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-xs mb-1 text-left flex items-start">
            Kota
          </label>
          <input
            value={kota}
            onChange={handleInput}
            id="kota"
            type="text"
            className="border rounded-lg p-2 w-full border-gray-200"
          />
        </div>
        <Button
          isSolidBlue
          className="hover:scale-105 w-full font-semibold"
          onClick={handleSimpanProfil}
        >
          Simpan Profil
        </Button>
      </div>
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
    // <div className="flex flex-col items-center ">
      <div className= "flex flex-col items-center w-full lg:w-1/2">
      <h2 className="text-2xl font-bold my-4 hidden md:block">Ubah Password</h2>
      <div className="w-[100%] md:w-[80%] space-y-4">
        <div className="w-full px-4 md:px-0 flex flex-col items-center">
          <label className="text-xs mb-1 text-left flex items-start w-full md:w-[100%]">
            Masukan Password Lama
          </label>
          <div className="relative w-full">
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
        <div className="w-full px-4 md:px-0 flex flex-col items-center">
          <label className="text-xs mb-1 text-left flex items-start w-full ">
            Masukan Password Baru
          </label>
          <div className="relative w-full">
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
        <div className="w-full px-4 md:px-0 flex flex-col items-center">
          <label className="text-xs mb-1 text-left flex items-start w-full ">
            Ulangi Password Baru
          </label>
          <div className="relative w-full">
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
        className="text-white font-semibold w-[100%] md:w-[80%] bg-[#6176F7] my-4 h-[2.5rem] rounded-3xl"
        onClick={handleChangePas}
      >
        Ubah Password
      </button>
    </div>
  );
};

const Sidebar = ({ activeTab, handleTabChange }) => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <div className="block md:hidden ">
      <div className="flex items-center px-4 py-2 cursor-pointer" onClick={openDrawer}>
        <span className="text-xl font-bold text-darkGrey">
          {activeTab === "profile" && "Profile"}
          {activeTab === "changePassword" && "Change Password"}
          {activeTab === "paymentHistory" && "Payment History"}
        </span>
        <ChevronRightIcon className={`h-6 w-6 ${isDrawerOpen ? 'transform rotate-90' : ''}`} />
      </div>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-2"
        >
          <div className="px-4 pt-4">
            <Heading variant="h3" className="text-darkGrey">
              Akun
            </Heading>
          </div>
          <List>
            <hr className="my-2 border-lightGrey" />
            <ListItem>
              <button
                onClick={() => handleTabChange("profile")}
                className="flex items-center w-full gap-2"
              >
                <PencilSquareIcon className="w-[2rem] text-[#6176F7]" />
                <span>Profil</span>
              </button>
            </ListItem>
            <ListItem>
              <button
                onClick={() => handleTabChange("changePassword")}
                className="flex items-center w-full gap-2"
              >
                <Cog6ToothIcon className="w-[2rem] text-[#6176F7]" />
                <span>Change Password</span>
              </button>
            </ListItem>
            <ListItem>
              <button
                onClick={() => handleTabChange("paymentHistory")}
                className="flex items-center w-full gap-2"
              >
                <ShoppingCartIcon className="w-[2rem] text-[#6176F7]" />
                <span>Payment History</span>
              </button>
            </ListItem>
            <ListItem>
              <button className="flex items-center w-full gap-2">
                <ArrowLeftOnRectangleIcon className="w-[2rem] text-[#6176F7]" />
                <span>Logout</span>
              </button>
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </div>
  );
};
