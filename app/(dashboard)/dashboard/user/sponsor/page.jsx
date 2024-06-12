export const revalidate = 10;

import React from 'react'
import Modal from '@/components/dashboard/modal';
import SearchInput from '@/components/dashboard/search-input';
import SponsorInput from '@/components/dashboard/user/sponsor-input';
import TableSponsor from '@/components/dashboard/user/table-sponsor';

export default function Sponsor() {

  const sponsor = [
    {
      "id": 1,
      "name": "TechCo",
      "description": "Sponsorship for tech conference",
      "budget_start": 10000,
      "budget_end": 20000,
      "event_capacity_minimum": 100,
      "user_id": 1,
      "pictures": "conference_sponsor.png",
      "support": "Financial support, promotional materials",
      "policies": "Sponsor must be mentioned in all event promotions",
      "created_at": "2024-05-01T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Sportify",
      "description": "Sports event sponsorship",
      "budget_start": 5000,
      "budget_end": 15000,
      "event_capacity_minimum": 500,
      "user_id": 2,
      "pictures": "sports_event_sponsor.jpg",
      "support": "Equipment, financial support",
      "policies": "Sponsor logos must be displayed on all athlete jerseys",
      "created_at": "2024-05-02T11:00:00Z"
    },
    {
      "id": 3,
      "name": "MusicFest",
      "description": "Music festival sponsor",
      "budget_start": 20000,
      "budget_end": 50000,
      "event_capacity_minimum": 1000,
      "user_id": 3,
      "pictures": "music_festival_sponsor.jpg",
      "support": "Financial support, VIP passes",
      "policies": "Sponsor banners must be placed on stage",
      "created_at": "2024-05-03T12:00:00Z"
    },
    {
      "id": 4,
      "name": "ArtExhibit",
      "description": "Art exhibition sponsor",
      "budget_start": 3000,
      "budget_end": 10000,
      "event_capacity_minimum": 50,
      "user_id": 4,
      "pictures": "art_exhibition_sponsor.jpg",
      "support": "Venue, financial support",
      "policies": "Sponsor name must be included in all exhibit catalogs",
      "created_at": "2024-05-04T13:00:00Z"
    },
    {
      "id": 5,
      "name": "FoodFest",
      "description": "Food festival sponsor",
      "budget_start": 8000,
      "budget_end": 20000,
      "event_capacity_minimum": 300,

    }]



  return (
    <div className="w-full flex flex-col md:mt-2">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-start p-3">
        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className='text-xl font-bold'>Sponsor</h4>
          <p className='text-sm mt-2'>Buat, Edit, dan Kelola Sponsor</p>
        </div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Dashboard</a></li>
            <li><a>User</a></li>
            <li>Sponsor</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col p-3">
        <div className='w-full justify-center items-center flex'>
          <SearchInput />
        </div>
        <div className="flex flex-col items-end mt-5">
          <Modal children={<SponsorInput />} btnName={'+ Buat Sponsor'} />
        </div>
        <TableSponsor sponsor={res?.data} />
      </div>
    </div>
  )
}