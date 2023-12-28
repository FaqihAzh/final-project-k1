import React from 'react'
import { AdminLayout } from '../../Layout/AdminLayout'
import { TableTransaction } from '../../components/TableTransaction'

export const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div>
        <TableTransaction/>
      </div>
      
    </AdminLayout>
  )
}
