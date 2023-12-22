import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { CookieKeys, CookieStorage } from '../utils/constants/cookies';

export const SideBar = () => {
    const location = useLocation();
      // Hapus token dari penyimpanan
    const handleLogout = () => {
    
      CookieStorage.remove(CookieKeys.AuthToken);
      window.location.href = "/adminlogin";
    };
  return (
    <div className="fixed top-0 left-0 h-screen w-[15rem] flex flex-col items-center bg-[#6176F7] ">
    <h2 className="my-[3rem] ">Admin Sidebar</h2>

    <div className="space-y-[1rem] w-[100%] text-center mt-5  text-white">
      <div
        className={` flex items-center justify-center h-[2rem] hover:bg-[#FFC27A] ${
          location.pathname === "/admindashboard" && "bg-[#FFC27A]"
        }`}
      >
        <NavLink className='w-full h-full flex items-center justify-center' to="/admindashboard">Dashboard</NavLink>
      </div>
      <div
        className={` flex items-center justify-center h-[2rem] hover:bg-[#FFC27A] ${
          location.pathname === "/adminkelolakelas" && "bg-[#FFC27A]"
        }`}
      >
        <NavLink className='w-full h-full flex justify-center items-center' to="/adminkelolakelas">Kelola Kelas</NavLink>
      </div>
      <div
        className={` flex items-center justify-center h-[2rem] hover:bg-[#FFC27A] ${
          location.pathname === "/adminpromo" && "bg-[#FFC27A]"
        }`}
      >
        <NavLink className='w-full h-full flex justify-center items-center' to="/adminpromo">Promo</NavLink>
      </div>
      <div onClick={handleLogout}
        className={` flex items-center justify-center h-[2rem]  hover:bg-[#FFC27A]`}
      >
        <button  className='w-full h-full'>Keluar</button>
      </div>
    </div>
    </div>
  )
}
