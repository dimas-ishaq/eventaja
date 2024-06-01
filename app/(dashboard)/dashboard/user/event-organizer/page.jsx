import React from 'react'
import TableEventOrganizer from '@/components/dashboard/table-event_organizer';
import Modal from '@/components/dashboard/modal';
import SearchInput from '@/components/dashboard/search-input';
import EventOrganizerInput from '@/components/dashboard/event_organizer-input';

export default function EventOrganizer() {
  const services = [
    {
      id: 1,
      title: "Wedding Planning",
      description: "Comprehensive wedding planning services to ensure your special day is perfect.",
      price: 1500,
      user_id: 3,
      pictures: "wedding_planning.jpg",
      service_type: "Event Planning",
      created_at: "2024-01-01T08:00:00Z",
      support: "24/7 Customer Support",
      cooperation_policy: "Submit proposal 2 months before the event. Full payment required upon agreement."
    },
    {
      id: 2,
      title: "Corporate Event Management",
      description: "Professional management of corporate events, including conferences and seminars.",
      price: 2500,
      user_id: 4,
      pictures: "corporate_event.jpg",
      service_type: "Event Planning",
      created_at: "2024-02-15T09:30:00Z",
      support: "Dedicated Event Coordinator",
      cooperation_policy: "Submit proposal 3 months before the event. 50% deposit required upon agreement."
    },
    {
      id: 3,
      title: "Birthday Party Planning",
      description: "Creative and fun birthday party planning services for all ages.",
      price: 500,
      user_id: 5,
      pictures: "birthday_party.jpg",
      service_type: "Event Planning",
      created_at: "2024-03-20T10:45:00Z",
      support: "Phone and Email Support",
      cooperation_policy: "Submit proposal 1 month before the event. Full payment required upon agreement."
    },
    {
      id: 4,
      title: "Catering Services",
      description: "Delicious catering services for any event, from small gatherings to large celebrations.",
      price: 1000,
      user_id: 2,
      pictures: "catering.jpg",
      service_type: "Catering",
      created_at: "2024-04-05T11:15:00Z",
      support: "On-site Support during Event",
      cooperation_policy: "Submit proposal 2 months before the event. 50% deposit required upon agreement."
    },
    {
      id: 5,
      title: "Photography and Videography",
      description: "Professional photography and videography services to capture your event's best moments.",
      price: 800,
      user_id: 1,
      pictures: "photography.jpg",
      service_type: "Media",
      created_at: "2024-05-01T12:00:00Z",
      support: "Post-event Support for Editing",
      cooperation_policy: "Submit proposal 1 month before the event. Full payment required upon agreement."
    },
    {
      id: 6,
      title: "Sound and Lighting",
      description: "Top-notch sound and lighting services to enhance your event experience.",
      price: 1200,
      user_id: 3,
      pictures: "sound_lighting.jpg",
      service_type: "Technical",
      created_at: "2024-06-10T13:30:00Z",
      support: "Technical Support during Event",
      cooperation_policy: "Submit proposal 2 months before the event. 50% deposit required upon agreement."
    },
    {
      id: 7,
      title: "Venue Decoration",
      description: "Beautiful and customized venue decoration services to match your event theme.",
      price: 700,
      user_id: 4,
      pictures: "venue_decoration.jpg",
      service_type: "Decoration",
      created_at: "2024-07-15T14:45:00Z",
      support: "Consultation and On-site Support",
      cooperation_policy: "Submit proposal 1 month before the event. Full payment required upon agreement."
    },
    {
      id: 8,
      title: "Entertainment Booking",
      description: "Booking services for bands, DJs, and entertainers to keep your guests entertained.",
      price: 900,
      user_id: 5,
      pictures: "entertainment.jpg",
      service_type: "Entertainment",
      created_at: "2024-08-20T15:00:00Z",
      support: "Artist Liaison Support",
      cooperation_policy: "Submit proposal 2 months before the event. 50% deposit required upon agreement."
    },
    {
      id: 9,
      title: "Transportation Services",
      description: "Reliable transportation services to ensure your guests arrive on time.",
      price: 600,
      user_id: 2,
      pictures: "transportation.jpg",
      service_type: "Logistics",
      created_at: "2024-09-25T16:30:00Z",
      support: "On-call Support for Drivers",
      cooperation_policy: "Submit proposal 1 month before the event. Full payment required upon agreement."
    },
    {
      id: 10,
      title: "Event Staffing",
      description: "Professional event staffing services to ensure your event runs smoothly.",
      price: 1100,
      user_id: 1,
      pictures: "event_staffing.jpg",
      service_type: "Staffing",
      created_at: "2024-10-30T17:45:00Z",
      support: "On-site Coordinator Support",
      cooperation_policy: "Submit proposal 2 months before the event. 50% deposit required upon agreement."
    }
  ];


  return (
    <div className="w-full flex flex-col md:mt-2">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-start p-3">
        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className='text-xl font-bold'>Event Organizer</h4>
          <p className='text-sm mt-2'>Buat, Edit, dan Kelola Event Organizer Anda</p>
        </div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Dashboard</a></li>
            <li><a>User</a></li>
            <li>Event Organizer</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className='w-full justify-center items-center flex'>
          <SearchInput />
        </div>
        <div className="flex flex-col items-end mt-5">
          <Modal children={<EventOrganizerInput />} btnName={'+ Buat Event Organizer'} />
        </div>
        <TableEventOrganizer eventsOrganizer={services} />
      </div>
    </div>
  )
}