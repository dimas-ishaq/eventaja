import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function EventItem({ event }) {
  const events = event;

  return events.map((event, index) => (
    <div
      key={index}
      className="event__item flex flex-col rounded-md shadow-md "
    >
      <Image
        src={
          'https://vlljvshssngonqwagiho.supabase.co/storage/v1/object/public/' +
          event.picture
        }
        alt={event.title}
        className="object-cover rounded-md w-full h-60"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="event__item_detail px-5 py-5">
        <h2 className="event__item_title text-lg font-semibold">
          <Link href={`/events/detail/event/${event.id}`} >{event.title}</Link>
        </h2>
        <p className="event__item_date text-sm font-normal mt-2.5">
          Tanggal : {event.start_date} - {event.end_date}
        </p>
        <p className="event__item_capacity text-sm font-normal mt-2.5">
          Kapasitas : {event.capacity}
        </p>
        <div className="event__item_description">
          <p className="text-base mt-2.5 font-semibold">Deskripsi :</p>
          <p className="text-sm font-normal mt-2.5 lg:max-w-[290px] line-clamp-5 text-gray-600">
            {event.description}
          </p>
          <p className="text-xs text-right mt-5 font-medium">{event.user_id.name}</p>
        </div>
      </div>
    </div>
  ));
}
