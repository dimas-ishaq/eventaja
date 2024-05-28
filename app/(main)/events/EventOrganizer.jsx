import React from 'react'
import EventOrganizerItem from '@/components/event/EventOrganizerItem'

export default function EventOrganizer() {
  return (
    <div className='mt-20 flex flex-col w-100'>
      <h1 className="event__title text-4xl font-bold text-black">
        Event Organizer
      </h1>
      <p className="event__description text-lg font-medium text-gray-400 lg:w-6/12 mt-2.5">
        Mulai dari perencanaan hingga pelaksanaan, kami bekerja sama dengan event organizer profesional untuk memastikan setiap detail event Anda dikelola dengan sempurna.
      </p>
      <div className="event__list mt-[60px] grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-100 gap-x-6">
        <EventOrganizerItem />
      </div>
    </div>
  )
}
