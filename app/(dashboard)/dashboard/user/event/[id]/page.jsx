'use client';
import ChatButton from '@/components/buttons/chat-button';
import { supabase } from '@/utils/conections/supabase';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function DetailEvent() {
  const { id } = useParams();
  const [event, setEvent] = useState([]);
  const getSingleData = async () => {
    const { data } = await supabase
      .from('tbl_event')
      .select()
      .eq('id', id)
      .single();
    setEvent(data);
  };

  useEffect(() => {
    getSingleData();
  }, []);
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
            <li>
              <a>Event</a>
            </li>
            <li>{id}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col p-3">
        {event.length === 0 ? (
          <p>Tidak ada data</p>
        ) : (
          <div className="flex flex-col w-100 min-h-screen justify-center items-center bg-white">
            <div className="event__detail flex flex-col w-11/12 mt-20">
              <Link
                href="/dashboard/user/event"
                className="border max-w-36 border-black px-5 py-3 rounded bg-violet-900 text-white"
              >
                Kembali
              </Link>
              <div className="event__detail_content mt-5">
                <Image
                  src={
                    'https://vlljvshssngonqwagiho.supabase.co/storage/v1/object/public/' +
                    event?.picture
                  }
                  width={500}
                  height={500}
                  alt={event?.title}
                  className="rounded max-h-[480px] object-cover"
                />
                <h1 className="event_detail_title mt-10 text-3xl text-gray-900 font-bold">
                  {event?.title}
                </h1>
                <p className="event__detail_date mt-3">
                  Tanggal: {event?.start_date + ' - ' + event?.end_date}
                </p>
                <p className="event__detail_capacity mt-3">
                  Kapasistas: {event?.capacity}
                </p>
                <p className="event__detail_location mt-3">
                  Lokasi: {event?.location}
                </p>
                <div className="event__detai_description mt-5">
                  <p className="text-base font-semibold">Deskripsi :</p>
                  <p className="mt-2.5 w-9/12">{event?.description} </p>
                </div>

                <div className="event__detail_budget  mt-5">
                  <p className="text-base font-semibold">Budget :</p>
                  <p> {event?.budget}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
