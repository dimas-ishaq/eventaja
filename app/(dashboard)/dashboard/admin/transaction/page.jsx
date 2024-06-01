import React from 'react'
import TableTransaction from '@/components/dashboard/table-transaction'

export default function Transaction() {
  return (
    <div className="w-full flex flex-col md:mt-5">
      <div className=" flex flex-col-reverse md:flex-row justify-between items-start p-3">
        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className='text-xl font-bold'>Transaksi</h4>
          <p className='text-sm mt-2'>History transaksi layanan event aja</p>
        </div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Dashboard</a></li>
            <li><a>Admin</a></li>
            <li>Transaksi</li>
          </ul>
        </div>
      </div>
      <div className="mt-3">
        <TableTransaction />
      </div>

    </div>
  )
}
