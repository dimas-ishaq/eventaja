import React from 'react'
import Event from './Event'
import EventOrganizer from './EventOrganizer'
import Sponsor from './Sponsor'
import Faq from '@/components/faq'
import Footer from '@/components/footer'

export default function Events() {
  return (
    <div className='flex flex-col w-100 min-h-screen justify-center items-center bg-white'>
      <div className="flex flex-col w-11/12">
        <Event />
      </div>
      <div className="flex flex-col w-11/12">
        <EventOrganizer />
      </div>
      <div className="flex flex-col w-11/12">
        <Sponsor />
      </div>
      <div className="flex flex-col w-11/12">
        <Faq />
      </div>
      <div className="flex flex-col w-11/12">
        <Footer />
      </div>
    </div >
  )
}
