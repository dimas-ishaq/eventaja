import React from 'react'
import TableAccount from '@/components/dashboard/admin/table-account'


export default function Account() {
  return (
    <div className="w-full flex flex-col md:mt-5">
      <div className=" flex flex-col-reverse md:flex-row justify-between items-start  p-3">
        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className='text-xl font-bold'>Manajemen Akun</h4>
          <p className='text-sm mt-2'>Manajemen akun pengguna event aja</p>
        </div>
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
