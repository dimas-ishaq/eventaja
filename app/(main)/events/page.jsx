export const revalidate = 60;

import React from 'react';
import Event from './Event';
import EventOrganizer from './EventOrganizer';
import Sponsor from './Sponsor';
import Faq from '@/components/faq';
import { supabase } from '@/utils/conections/supabase';

async function getData() {
  const eo = await supabase.from('tbl_eo').select('id,title,description,price,picture,service_type(*),user_id,created_at,is_show,cooperation_policy,support');
  const event = await supabase.from('tbl_event').select('id,title,capacity,description,start_date,end_date,location,budget,user_id(*),picture,is_show,created_at');
  const sponsor = await supabase.from('tbl_sponsor').select('id,description,budget_start,budget_end,event_capacity_minimum,user_id(*),picture,created_at,is_show,title');
  return {
    eo : eo.data,
    event : event.data,
    sponsor : sponsor.data
  };
}

export default async function Events() {
  const {eo,event,sponsor} = await getData();
  return (
    <div className="flex flex-col w-100 min-h-screen justify-center items-center bg-white">
      <div className="flex flex-col w-11/12">
        <Event event={event} />
      </div>
      <div className="flex flex-col w-11/12">
        <EventOrganizer eo={eo} />
      </div>
      <div className="flex flex-col w-11/12">
        <Sponsor sponsor={sponsor} />
      </div>
      <div className="flex flex-col w-11/12">
        <Faq />
      </div>
    </div>
  );
}
