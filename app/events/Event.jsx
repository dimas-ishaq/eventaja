import React from 'react'
import EventItem from '@/components/event/EventItem'
export default function Event() {
  return (
    <div className='mt-20 flex flex-col w-100'>
      <h1 className="event__title text-4xl font-bold text-black">
        Event Terbaru
      </h1>
      <p className="event__description text-lg font-medium text-gray-400 lg:w-6/12 mt-2.5">
        Mulai dari acara musik hingga konferensi bisnis, temukan event-event terbaru yang akan datang dan jangan lewatkan kesempatan untuk berpartisipasi.
      </p>
      <div className="event__list mt-[60px] grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-100 gap-x-6 gap-y-4">
        <EventItem />
      </div>
    </div>
  )
}


