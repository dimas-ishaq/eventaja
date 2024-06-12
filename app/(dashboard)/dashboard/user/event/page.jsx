export const revalidate = 10;


import React from 'react';
import EventInput from '@/components/dashboard/event-input';
import TableEvent from '@/components/dashboard/table-event';
import Modal from '@/components/dashboard/modal';
import SearchInput from '@/components/dashboard/search-input';
import { supabase } from '@/utils/conections/supabase';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
  async function getData() {
    const session = await getServerSession(authOptions);
      const res = await supabase.from('tbl_sponsor').select().eq('user_id',session?.user?.id);
  
    return res;
  }

export default async function Event() {
  const res = await getData();

  return (
    <div className="w-full flex flex-col md:mt-2">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-start p-3">
        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className="text-xl font-bold">Event</h4>
          <p className="text-sm mt-2">Buat, edit, dan kelola events</p>
        </div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>User</a>
            </li>
            <li>Event</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className="w-full justify-center items-center flex">
          <SearchInput />
        </div>
        <div className="flex flex-col items-end mt-5">
          <Modal children={<EventInput />} btnName={'+ Buat Event'} />
        </div>
        <TableEvent events={res.data} />
      </div>
    </div>
  );
}
