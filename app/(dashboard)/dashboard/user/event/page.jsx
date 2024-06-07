export const revalidate = 3600

async function getData() {
  const res = await supabase.from('tbl_event').select();
  
 
  return res
}

import React from 'react'
import EventInput from '@/components/dashboard/event-input';
import TableEvent from '@/components/dashboard/table-event';
import Modal from '@/components/dashboard/modal';
import SearchInput from '@/components/dashboard/search-input';
import { supabase } from '@/utils/conections/supabase'

export default async  function Event() {
  const res = await getData();
  console.log(res);
  const events = [
    {
      id: 1,
      title: "Tech Conference 2024",
      capacity: 200,
      description: "Annual tech conference featuring the latest in technology.",
      start_date: "2024-07-15",
      end_date: "2024-07-17",
      location: "New York Convention Center",
      budget: 50000,
      user_id: 3,
      pictures: "tech_conference_2024.jpg",
      createdAt: "2024-05-01T08:30:00Z",
      is_show: true
    },
    {
      id: 2,
      title: "Healthcare Innovations Summit",
      capacity: 150,
      description: "Summit discussing the newest innovations in healthcare.",
      start_date: "2024-08-20",
      end_date: "2024-08-21",
      location: "Los Angeles Medical Center",
      budget: 30000,
      user_id: 5,
      pictures: "healthcare_summit.jpg",
      createdAt: "2024-05-10T09:00:00Z",
      is_show: true
    },
    {
      id: 3,
      title: "AI & Machine Learning Workshop",
      capacity: 100,
      description: "Hands-on workshop on AI and machine learning technologies.",
      start_date: "2024-09-05",
      end_date: "2024-09-06",
      location: "San Francisco Tech Hub",
      budget: 20000,
      user_id: 2,
      pictures: "ai_ml_workshop.jpg",
      createdAt: "2024-05-15T10:15:00Z",
      is_show: true
    },
    {
      id: 4,
      title: "Green Energy Expo",
      capacity: 250,
      description: "Expo showcasing the latest advancements in green energy.",
      start_date: "2024-10-10",
      end_date: "2024-10-12",
      location: "Chicago Expo Center",
      budget: 45000,
      user_id: 4,
      pictures: "green_energy_expo.jpg",
      createdAt: "2024-05-20T11:00:00Z",
      is_show: true
    },
    {
      id: 5,
      title: "Blockchain Summit",
      capacity: 200,
      description: "Summit discussing the future of blockchain technology.",
      start_date: "2024-11-15",
      end_date: "2024-11-16",
      location: "Miami Blockchain Center",
      budget: 35000,
      user_id: 1,
      pictures: "blockchain_summit.jpg",
      createdAt: "2024-05-25T12:30:00Z",
      is_show: true
    },
    {
      id: 6,
      title: "Cybersecurity Forum",
      capacity: 120,
      description: "Forum on the latest trends in cybersecurity.",
      start_date: "2024-12-01",
      end_date: "2024-12-02",
      location: "Seattle Security Conference Hall",
      budget: 25000,
      user_id: 3,
      pictures: "cybersecurity_forum.jpg",
      createdAt: "2024-05-30T13:45:00Z",
      is_show: true
    },
    {
      id: 7,
      title: "Virtual Reality Expo",
      capacity: 180,
      description: "Expo highlighting the latest in virtual reality technology.",
      start_date: "2025-01-10",
      end_date: "2025-01-12",
      location: "Las Vegas VR Center",
      budget: 40000,
      user_id: 2,
      pictures: "vr_expo.jpg",
      createdAt: "2024-06-01T14:00:00Z",
      is_show: true
    },
    {
      id: 8,
      title: "E-commerce Innovations Forum",
      capacity: 140,
      description: "Forum discussing the future of e-commerce.",
      start_date: "2025-02-15",
      end_date: "2025-02-16",
      location: "Boston E-commerce Hub",
      budget: 30000,
      user_id: 5,
      pictures: "ecommerce_forum.jpg",
      createdAt: "2024-06-05T15:30:00Z",
      is_show: true
    },
    {
      id: 9,
      title: "Fintech Conference",
      capacity: 160,
      description: "Conference on the latest advancements in financial technology.",
      start_date: "2025-03-20",
      end_date: "2025-03-21",
      location: "Austin Fintech Center",
      budget: 35000,
      user_id: 4,
      pictures: "fintech_conference.jpg",
      createdAt: "2024-06-10T16:00:00Z",
      is_show: true
    },
    {
      id: 10,
      title: "Smart Home Technology Expo",
      capacity: 200,
      description: "Expo showcasing the latest in smart home technology.",
      start_date: "2025-04-25",
      end_date: "2025-04-27",
      location: "Denver Tech Expo Hall",
      budget: 45000,
      user_id: 1,
      pictures: "smart_home_expo.jpg",
      createdAt: "2024-06-15T17:00:00Z",
      is_show: true
    }
  ];

  return (
    <div className="w-full flex flex-col md:mt-2">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-start p-3">
        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className='text-xl font-bold'>Event</h4>
          <p className='text-sm mt-2'>Buat, edit, dan kelola events</p>
        </div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Dashboard</a></li>
            <li><a>User</a></li>
            <li>Event</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className='w-full justify-center items-center flex'>
          <SearchInput />
        </div>
        <div className="flex flex-col items-end mt-5">
          <Modal children={<EventInput />} btnName={'+ Buat Event'} />
        </div>
        <TableEvent events={res.data} />
      </div>

    </div>
  )

}
