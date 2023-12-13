import React from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { TableAdminKelolaKelas } from '../../components/TableAdminKelolaKelas'

export const AdminKelolaKelas = () => {
  return (
    <AdminLayout>
        <div className=''>
        <TableAdminKelolaKelas/>  
        </div>
    </AdminLayout>
  )
}
