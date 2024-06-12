import React from 'react'
import Image from 'next/image'
import sponsorImage from '../../assets/img/sponsor_image_1.png'
export default function SponsorItem() {

  const events = [
    {
      image: sponsorImage,
      name: 'Mandala Corporation',
      description: 'Mandala Corporation adalah salah satu sponsor utama kami yang menyediakan dukungan finansial serta sumber daya untuk berbagai event besar. Kami bangga bekerja sama dengan perusahaan yang berkomitmen pada inovasi dan keberlanjutan.',
      author: 'Michael Johnson, CEO'
    },
    {
      image: sponsorImage,
      name: 'Mandala Corporation',
      description: 'Mandala Corporation adalah salah satu sponsor utama kami yang menyediakan dukungan finansial serta sumber daya untuk berbagai event besar. Kami bangga bekerja sama dengan perusahaan yang berkomitmen pada inovasi dan keberlanjutan.',
      author: 'Michael Johnson, CEO'
    },
    {
      image: sponsorImage,
      name: 'Mandala Corporation',
      description: 'Mandala Corporation adalah salah satu sponsor utama kami yang menyediakan dukungan finansial serta sumber daya untuk berbagai event besar. Kami bangga bekerja sama dengan perusahaan yang berkomitmen pada inovasi dan keberlanjutan.',
      author: 'Michael Johnson, CEO'
    },
    {
      image: sponsorImage,
      name: 'Mandala Corporation',
      description: 'Mandala Corporation adalah salah satu sponsor utama kami yang menyediakan dukungan finansial serta sumber daya untuk berbagai event besar. Kami bangga bekerja sama dengan perusahaan yang berkomitmen pada inovasi dan keberlanjutan.',
      author: 'Michael Johnson, CEO'
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
          <p className="text-xs text-right mt-5 font-medium">
            {event.user_id.name}
          </p>
        </div>
      </div>
    </div>
  ));
}
