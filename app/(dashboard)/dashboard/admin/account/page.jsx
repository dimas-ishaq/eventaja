import React from 'react'
import TableAccount from '@/components/dashboard/table-account'


export default function Account() {
  return (
    <div className="w-full flex flex-col md:mt-5">
      <div className=" flex justify-between items-center">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Dashboard</a></li>
            <li><a>Admin</a></li>
            <li>Manajemen Akun</li>
          </ul>
        </div>
      </div>
      <div className="mt-3">
        <TableAccount />
      </div>

    </div>
  )
}
