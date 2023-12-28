import React, { useState } from 'react'
import { SideBar } from '../components/SideBar'
import { AdminHeader } from '../components/AdminHeader'

export const AdminLayout= ({ children }) => {
const [showSideBar, setshowSideBar] = useState(false)

  return (
    <div className=''>
      <SideBar setSideBar={setshowSideBar} showSideBar={showSideBar}/>
      <div className='md:ml-[15rem]'>
        <AdminHeader setSideBar={setshowSideBar} showSideBar={showSideBar} />
        {children}
      </div>
    </div>
  );
};
