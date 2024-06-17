
'use client'

import React from 'react'
import { IoEyeOutline, IoCalendarOutline, IoLogoBuffer, IoHandLeftOutline } from "react-icons/io5";
import dynamic from 'next/dynamic';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });
export default function ChartUser() {
  const dataChart = {
    options: {
      plotOptions: {
        bar: {
          borderRadius: 10
        },
      },
      chart: {
        id: "bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49]
      },
      {
        name: "series-2",
        data: [30, 40, 45, 50, 49]
      },
      {
        name: "series-3",
        data: [30, 40, 45, 50, 49]
      }

    ]
  };
  return (
    <div className='border-1 border-gray-950 flex flex-col md:mt-6 mt-3' >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3 md:gap-5 gap-3 w-full justify-center items-center">
        <div className="lg:max-w-[260px] lg:mx-h-[140px] p-5 rounded-lg bg-white shadow-md text-gray-700 hover:shadow-lg ">
          <IoEyeOutline className='w-8 h-auto' />
          <div className="flex flex-col">
            <p className='font-bold text-2xl'>120 K</p>
            <p className='text-sm font-light'>Total View</p>
          </div>

        </div>
        <div className="lg:max-w-[260px] lg:mx-h-[140px] p-5 rounded-lg shadow-md bg-fuchsia-500 hover:shadow-lg text-white">
          <IoCalendarOutline className='w-8 h-auto' />
          <div className="flex flex-col">
            <p className='font-bold text-2xl'>IDR 120 K</p>
            <p className='text-sm font-light'>Total Event</p>
          </div>
        </div>
        <div className="lg:max-w-[260px] lg:mx-h-[140px] p-5 rounded-lg shadow-md bg-purple-600 hover:shadow-lg text-white">
          <IoLogoBuffer className='w-8 h-auto' />
          <div className="flex flex-col">
            <p className='font-bold text-2xl'>IDR 120 K</p>
            <p className='text-sm font-light'>Total Event Organizer</p>
          </div>
        </div>
        <div className="lg:max-w-[260px] lg:mx-h-[140px] p-5 rounded-lg shadow-md bg-pink-500 hover:shadow-lg text-white">
          <IoHandLeftOutline className='w-8 h-auto' />
          <div className="flex flex-col">
            <p className='font-bold text-2xl'>IDR 120 K</p>
            <p className='text-sm font-light'>Total Sponsor</p>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3 gap-5 w-full border-1 border-gray-950 mt-8">
        <div className="">
          <Chart
            options={dataChart.options}
            series={dataChart.series}
            type="line"
          />

        </div>
        <div className="">
          <Chart
            options={dataChart.options}
            series={dataChart.series}
            type="bar"
          />
        </div>
      </div>
    </div >

  )
};