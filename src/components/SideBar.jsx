import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';
import { CookieKeys, CookieStorage } from '../utils/constants/cookies';
import Logo from '../assets/images/logo.svg'
import FadeIn from "../components/FadeIn";
export const SideBar = ({setSideBar, showSideBar}) => {
    const location = useLocation();
      // Hapus token dari penyimpanan
    const handleLogout = () => {
    
      CookieStorage.remove(CookieKeys.AuthToken);
      window.location.href = "/adminlogin";
    };
    const sideBarComp = () => {
      return(
        <div className="fixed top-auto   left-0 h-screen w-[15rem] flex  md:flex flex-col items-center bg-[#6176F7] ">
         <h2 className="sm:mt-[5rem] md:my-[3rem] md:">
            <img src={Logo} alt="Logo" />
          </h2>
    
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
  return (
   <>
    <div className='sm:hidden md:flex'>
      {sideBarComp()}
    </div>
   <FadeIn delay={0.3} direction="right" >
   {showSideBar && <div className='flex md:hidden relative ' >
      {sideBarComp()}
    </div>}
   </FadeIn>
     
    </>
  )
}


