import React from 'react'
import SearchInput from "./SearchInput";
import {UsersIcon} from "@heroicons/react/24/outline"
import { useGetDataAdmin } from '../services/auth/get-admin';

export const AdminHeader = () => {

   const { data: fetchAdmin } = useGetDataAdmin({})
   console.log('Fetch Admin Data:', fetchAdmin);  // Ta
 


  return (
    <div className='space-y-10 flex flex-col items-center mb-5' >
    <div className='bg-cyan-200 w-full h-[7rem] flex justify-between px-5 items-center'>
    <h1>Hi, {fetchAdmin?.data?.user?.idAdmin}</h1>
    <div> <SearchInput/></div>
    </div>
        <div className=' flex w-[85%] h-[7rem] justify-between'>
            <div className='bg-blue-500 w-[30%] rounded-2xl flex justify-center items-center '>  
            <div className='w-[80%] h-[80%] flex items-center space-x-6'>
            <div className='bg-white w-[20%] h-[60%] rounded-3xl flex items-center justify-center'>
             <UsersIcon className="w-10 h-10 text-[#6176F7]"/>
             </div>
             <div className='space-y-2 text-[1.2rem] text-white'>
                <p>13</p>
                <h1 className='font-bold'>Active User</h1>
             </div>
            </div>
            </div>
            <div className='bg-blue-500 w-[30%] rounded-2xl flex justify-center items-center'>
            <div className='w-[80%] h-[80%] flex items-center space-x-6'>
            <div className='bg-white w-[20%] h-[60%] rounded-3xl flex items-center justify-center'>
             <UsersIcon className="w-10 h-10 text-[#6176F7]"/>
             </div>
             <div className='space-y-2 text-[1.2rem] text-white'>
                <p>13</p>
                <h1 className='font-bold'>Active User</h1>
             </div>
            </div>
          
            </div>
            <div className='bg-blue-500 w-[30%] rounded-2xl flex justify-center items-center'>
            <div className='w-[80%] h-[80%] flex items-center space-x-6'>
            <div className='bg-white w-[20%] h-[60%] rounded-3xl flex items-center justify-center'>
             <UsersIcon className="w-10 h-10 text-[#6176F7]"/>
             </div>
             <div className='space-y-2 text-[1.2rem] text-white'>
                <p>13</p>
                <h1 className='font-bold'>Active User</h1>
             </div>
            </div>
            </div>
        </div>
    </div>
  )
}
