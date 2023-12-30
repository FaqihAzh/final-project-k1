import React from 'react'
import {UsersIcon} from "@heroicons/react/24/solid"
import { useGetDataAdmin } from '../services/auth/get-admin';
import { useFetchActiveClass, useFetchActiveUsers, useFetchPremimumClass } from '../services/admin/information-admin';
import { Bars3Icon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";

export const AdminHeader = ({setSideBar, showSideBar}) => {
   // const [isSidebarVisible, setIsSidebarVisible] = useState(false)

   const { data: fetchAdmin } = useGetDataAdmin({})
  
   const {data : fetchActiveUsers} = useFetchActiveUsers()
   const {data : fetchActiveClass} = useFetchActiveClass()
   const {data : fetchPremiumClass} = useFetchPremimumClass()
   const dataActiveUsers = fetchActiveUsers?.data?.totalActiveUser.id
   const dataActiveClass = fetchActiveClass?.data?.totalActiveClass?.id
   const dataPremiumClass = fetchPremiumClass?.data?.totalPremiumClass?.id

   // const handleToggleSidebar = () => {
   //    setIsSidebarVisible(!isSidebarVisible);
   //  };
   const handleToggleSidebar = () => {
      setSideBar(!showSideBar);
  };

  return (
<div className='space-y-10 flex flex-col items-center mb-5 ' >
    <div className='bg-cyan-200 w-full h-[3rem] flex justify-between px-5 items-center sm:flex-row-reverse z-50'>
    <h1>Hi, {fetchAdmin?.data?.idAdmin}</h1>
    {/* <div  className='md:hidden' onClick={handleToggleSidebar}>  */}
    <div  onClick={handleToggleSidebar} className={`md:hidden transition-opacity duration-300 ${showSideBar ? 'opacity-100' : 'opacity-70'}`}>
   {showSideBar ? (
        <XMarkIcon
          className='text-black w-[2rem]'
          onClick={handleToggleSidebar}
        />
      ) : (
        <Bars3Icon
          className='text-black w-[2rem]'
          onClick={handleToggleSidebar}
        />
      )}
    </div>
    </div>
        <div className=' flex w-[85%] h-[7rem] justify-between !mt-3 sm:hidden md:hidden lg:flex '>
            <div className='bg-[#6176F7] w-[30%] rounded-2xl flex justify-center items-center '>  
            <div className='w-[80%] h-[80%] flex items-center space-x-6'>
            <div >
             <UsersIcon className="w-[2rem]   text-white"/>
             
             </div>
             <div className='space-y-2 text-[1.2rem] text-white'>
                <p>{dataActiveUsers}</p>
                <h1 className='font-bold'>Active User </h1>
             </div>
            </div>
            </div>
            <div className='bg-[#6176F7] w-[30%] rounded-2xl flex justify-center items-center'>
            <div className='w-[80%] h-[80%] flex items-center space-x-6'>
            <div >
             <UsersIcon className="w-[2rem] text-white"/>
             </div>
             <div className='space-y-2 text-[1.2rem] text-white'>
                <p>{dataActiveClass}</p>
                <h1 className='font-bold'>Active Class</h1>
             </div>
            </div>
          
            </div>
            <div className='bg-[#6176F7] w-[30%] rounded-2xl flex justify-center items-center'>
            <div className='w-[80%] h-[80%] flex items-center space-x-6'>
            <div>
             <UsersIcon className="w-[2rem] text-white"/>
             </div>
             <div className='space-y-2 text-[1.2rem] text-white'>
                <p>{dataPremiumClass}</p>
                <h1 className='font-bold'>Premium Class</h1>
             </div>
            </div>
            </div>
        </div>
    </div>
  )
}
