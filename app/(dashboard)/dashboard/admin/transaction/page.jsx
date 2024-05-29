import React from 'react'
import TableTransaction from '@/components/dashboard/table-transaction'

export default function Transaction() {
  return (
    <div className="w-full flex flex-col md:mt-5">
      <div className=" flex justify-between items-center">
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
