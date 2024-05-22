import React from 'react'
import Image from 'next/image'
import eventImage from '../../assets/img/event_image_1.png'
export default function EventItem() {

  const events = [
    {
      image: eventImage,
      name: 'Expo Campus 2024',
      date: '22 -27 Juni 2024',
      capacity: '1000 - 3000 Orang',
      description: 'Jangan lewatkan Expo Campus 2024, akan ada universitas terkemuka, lembaga pendidikan, dan perusahaan untuk menawarkan peluang pendidikan dan karir terbaik bagi Anda. Temukan beragam program, beasiswa, dan kesempatan kerja yang menarik di sini!',
      author: 'John Doe'
    },
    {
      image: eventImage,
      name: 'Expo Campus 2024',
      date: '22 -27 Juni 2024',
      capacity: '1000 - 3000 Orang',
      description: 'Jangan lewatkan Expo Campus 2024, akan ada universitas terkemuka, lembaga pendidikan, dan perusahaan untuk menawarkan peluang pendidikan dan karir terbaik bagi Anda. Temukan beragam program, beasiswa, dan kesempatan kerja yang menarik di sini!',
      author: 'John Doe'
    },
    {
      image: eventImage,
      name: 'Expo Campus 2024',
      date: '22 -27 Juni 2024',
      capacity: '1000 - 3000 Orang',
      description: 'Jangan lewatkan Expo Campus 2024, akan ada universitas terkemuka, lembaga pendidikan, dan perusahaan untuk menawarkan peluang pendidikan dan karir terbaik bagi Anda. Temukan beragam program, beasiswa, dan kesempatan kerja yang menarik di sini!',
      author: 'John Doe'
    },
    {
      image: eventImage,
      name: 'Expo Campus 2024',
      date: '22 -27 Juni 2024',
      capacity: '1000 - 3000 Orang',
      description: 'Jangan lewatkan Expo Campus 2024, akan ada universitas terkemuka, lembaga pendidikan, dan perusahaan untuk menawarkan peluang pendidikan dan karir terbaik bagi Anda. Temukan beragam program, beasiswa, dan kesempatan kerja yang menarik di sini!',
      author: 'John Doe'
    },

  ]


  return (
    events.map((event, index) => (
      <div key={index} className='event__item flex flex-col rounded-md shadow-md '>
        <Image src={event.image} alt={event.name} className='object-fit rounded-md' />
        <div className="event__item_detail px-5 py-5">
          <h2 className='event__item_title text-lg font-semibold'>
            {event.name}
          </h2>
          <p className='event__item_date text-sm font-normal mt-2.5'>Tanggal : {event.date}</p>
          <p className="event__item_capacity text-sm font-normal mt-2.5">Kapasitas : {event.capacity}</p>
          <div className="event__item_description">
            <p className='text-base mt-2.5 font-semibold'>Deskripsi :</p>
            <p className='text-sm font-normal mt-2.5 lg:max-w-[290px] line-clamp-5 text-gray-600'>{event.description}</p>
            <p className='text-xs text-right mt-5 font-medium'>{event.author}</p>
          </div>
        </div>
      </div>
    ))
  )

}
