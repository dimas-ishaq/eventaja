'use client';
import { supabase } from '@/utils/conections/supabase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsInfo, BsPencil} from 'react-icons/bs';
import { MdOutlineDeleteForever } from 'react-icons/md';

export default function TableEvent({ events }) {
  const router = useRouter();
  const deleteHandel = async (id) => {
    if (confirm('Yakin hapus event dengan id :' + id)) {
      await supabase.from('tbl_event').delete().eq('id', id);
      router.refresh();
    }
  };
  return (
    <div class="overflow-x-auto mt-5">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" class="px-6 py-3">
              Judul Event
            </th>
            <th scope="col" class="px-6 py-3">
              Lokasi
            </th>
            <th scope="col" class="px-6 py-3">
              Budget
            </th>
            <th scope="col" class="px-6 py-3">
              Kapasitas
            </th>
            <th scope="col" class="px-6 py-3">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, key) => (
            <tr key={key} class="bg-white border-b  ">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {event.title}
              </th>
              <td class="px-6 py-4">{event.location}</td>
              <td class="px-6 py-4">IDR {event.budget}</td>
              <td class="px-6 py-4">{event.capacity} Orang</td>
              <td class="px-6 py-4 flex justify-center items-center gap-2">
                <Link
                  href={'/dashboard/user/event/' + event.id}
                  className="flex text-white rounded-full justify-center items-center p-2 bg-violet-700 hover:bg-violet-600"
                >
                  <BsInfo className="text-xl" />
                </Link>
                <Link
                  href={'/dashboard/user/event/edit/' + event.id}
                  className="flex text-white rounded-full justify-center items-center p-2 bg-fuchsia-600 hover:bg-fuchsia-500"
                >
                  <BsPencil className="text-xl" />
                </Link>
                <button
                  onClick={() => deleteHandel(event.id)}
                  className="flex text-white rounded-full justify-center items-center p-2 bg-purple-600 hover:bg-purple-500"
                >
                  <MdOutlineDeleteForever className="text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
