import React from 'react';
import Image from 'next/image';
import ChatButton from '@/components/buttons/chat-button';
import { supabase } from '@/utils/conections/supabase';

import parse from 'html-react-parser';
import { Rupiah } from '@/utils';

export const revalidate = 100; // revalidate the data at most every hour

async function getData(id) {
  const res = await supabase
    .from('tbl_eo')
    .select(
      'id,title,description,price,picture,service_type(*),user_id,created_at,is_show,cooperation_policy,support'
    )
    .eq('id', id)
    .single();

  return res.data;
}
export default async function Detail({ params: { id } }) {
  const event = await getData(id);
  return (
    <div className="flex flex-col w-100 min-h-screen justify-center items-center bg-white">
      <div className="event__detail flex flex-col w-11/12 mt-20">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>Beranda</a>
            </li>
            <li>
              <a>Events</a>
            </li>
            <li>
              <a>Detail</a>
            </li>
            <li>
              <a>PT. WAHANA SOUNDSYSTEM</a>
            </li>
          </ul>
        </div>
        <div className="event__detail_content mt-5">
          {/* id,title,description,price,picture,service_type,user_id,created_at,is_show,cooperation_policy,support */}
          <Image
            src={
              'https://vlljvshssngonqwagiho.supabase.co/storage/v1/object/public/' +
              event.picture
            }
            alt={event.title}
            width={0}
            height={0}
            sizes="100vw"
            className="rounded w-full max-h-[480px] object-cover"
          />
          <h1 className="event_detail_title mt-10 text-3xl text-gray-900 font-bold">
            {event.title}
          </h1>
          <div className="event__detai_description mt-5">
            <p className="text-base font-semibold">Deskripsi :</p>
            <div className="mt-2.5 w-9/12">{parse(event.description)}</div>
          </div>
          <div className="event__detai_support mt-5">
            <p className="text-base font-semibold">Dukungan :</p>
            <div className="mt-2.5 w-9/12">
              {parse(event.cooperation_policy)}
            </div>
          </div>

          <div className="event__detail_terms  mt-5">
            <p className="text-base font-semibold">
              Ketentuan Pengajuan Kerjasama :
            </p>
            <div className="mt-2.5 w-9/12">{parse(event.support)}</div>
          </div>

          <div className="event__detail_budget  mt-5">
            <p className="text-base font-semibold">Harga Mulai Dari :</p>
            <p> {Rupiah.format(event.price)}</p>
          </div>
        </div>
        <div className="event_detail_chat flex flex-col sm:flex-row sm:gap-x-4 gap-y-2 my-10">
          <div className="event__detail_chat_owner flex items-center">
            <ChatButton type={'0'} text={'Chat sebagai Event Owner'} />
          </div>
          <div className="event__detail_chat_sponsor">
            <ChatButton type={'1'} text={'Chat sebagai Sponsor'} />
          </div>
        </div>
      </div>
    </div>
  );
}
