import React from 'react'
import SponsorItem from '@/components/event/SponsorItem'
export default function Sponsor() {
  return (
    <div className='mt-20 flex flex-col w-100'>
      <h1 className="event__title text-4xl font-bold text-black">
        Sponsor
      </h1>
      <p className="event__description text-lg font-medium text-gray-400 lg:w-6/12 mt-2.5">
        Mulai dari dukungan finansial hingga kemitraan strategis, sponsor kami memainkan peran penting dalam kesuksesan setiap event. Kami berterima kasih atas kontribusi mereka yang luar biasa.
      </p>
      <div className="event__list mt-[60px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-100 gap-x-6 gap-y-4">
        <SponsorItem />
      </div>
    </div>
  )
}


