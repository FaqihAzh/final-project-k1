import React from 'react'
import { SideBar } from '../components/SideBar'
import { AdminHeader } from '../components/AdminHeader'

export const AdminLayout = ({children}) => {
  return (
    <div className=''>
    <SideBar/>
    <div className='ml-[15rem]  '>
    <AdminHeader />
        {children}
    </div>
    
</div>
  )
}
