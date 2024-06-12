import React from 'react';
import Image from 'next/image';
import parse from 'html-react-parser';
import Link from 'next/link';
export default function SponsorItem({ sponsor }) {
  const events = sponsor;

  return events.map((event, index) => (
    <div key={index} className="event__item flex flex-col rounded-md shadow-md">
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
        <Link href={`/events/detail/sponsor/${event.id}`} >{event.title}</Link>
        </h2>
        <div className="event__item_description">
          <p className="text-base mt-2.5 font-semibold">Deskripsi :</p>
          <div className="text-sm font-normal mt-2.5 lg:max-w-[290px] line-clamp-5 text-gray-600">
            {parse(event.description)}
 
          </div>
          <p className="text-xs text-right mt-5 font-medium">
            {event.user_id.name}
          </p>
        </div>
      </div>
    </div>
  ));
}
