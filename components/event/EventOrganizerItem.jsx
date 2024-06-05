import React from 'react'
import Image from 'next/image'
import eventOrganizerImage from '../../assets/img/event_organizer_image_1.png'
export default function EventOrganizerItem() {

  const events = [
    {
      image: eventOrganizerImage,
      name: 'PT. Kreatif Event Mandiri',
      description: 'PT. Kreatif Event Mandiri memiliki pengalaman bertahun-tahun dalam menyelenggarakan event besar seperti konferensi, pameran, dan konser. Kami berkomitmen untuk memberikan layanan terbaik dan memastikan setiap event berjalan lancar dan sukses.',
      author: 'Jane Doe, CEO'
    },
    {
      image: eventOrganizerImage,
      name: 'PT. Kreatif Event Mandiri',
      description: 'PT. Kreatif Event Mandiri memiliki pengalaman bertahun-tahun dalam menyelenggarakan event besar seperti konferensi, pameran, dan konser. Kami berkomitmen untuk memberikan layanan terbaik dan memastikan setiap event berjalan lancar dan sukses.',
      author: 'Jane Doe, CEO'
    },
    {
      image: eventOrganizerImage,
      name: 'PT. Kreatif Event Mandiri',
      description: 'PT. Kreatif Event Mandiri memiliki pengalaman bertahun-tahun dalam menyelenggarakan event besar seperti konferensi, pameran, dan konser. Kami berkomitmen untuk memberikan layanan terbaik dan memastikan setiap event berjalan lancar dan sukses.',
      author: 'Jane Doe, CEO'
    },
    {
      image: eventOrganizerImage,
      name: 'PT. Kreatif Event Mandiri',
      description: 'PT. Kreatif Event Mandiri memiliki pengalaman bertahun-tahun dalam menyelenggarakan event besar seperti konferensi, pameran, dan konser. Kami berkomitmen untuk memberikan layanan terbaik dan memastikan setiap event berjalan lancar dan sukses.',
      author: 'Jane Doe, CEO'
    },
  ]


  return (
    events.map((event, index) => (
      <div key={index} className='event__item flex flex-col rounded-md shadow-md hover:shadow-lg  hover:transition hover:scale-105 hover:delay-100'>
        <Image src={event.image} alt={event.name} className='object-fit rounded-md' />
        <div className="event__item_detail px-5 py-5">
          <h2 className='event__item_title text-lg font-semibold'>
            {event.name}
          </h2>
          <div className="event__item_description">
            <p className='text-base mt-2.5 font-semibold'>Deskripsi :</p>
            <p className='text-sm font-normal mt-1 lg:max-w-[290px] line-clamp-5 text-gray-600'>{event.description}</p>
            <p className='text-xs text-right mt-5 font-medium'>{event.author}</p>
          </div>
        </div>
      </div>
    ))
  )

}
