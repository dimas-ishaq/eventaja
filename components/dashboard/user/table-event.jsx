import React from 'react'

export default function TableEvent({ events }) {
  return (
    <div class="overflow-x-auto mt-5">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" class="px-6 py-3">
              Judul Event
            </th>
            <th scope="col" class="px-6 py-3">
              Lokasi
            </th>
            <th scope="col" class="px-6 py-3">
              Budget
            </th>
            <th scope="col" class="px-6 py-3">
              Kapasitas
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, key) => (
            <tr key={key} class="bg-white border-b  ">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {event.title}
              </th>
              <td class="px-6 py-4">
                {event.location}
              </td>
              <td class="px-6 py-4">
                IDR {event.budget}
              </td>
              <td class="px-6 py-4">
                {event.capacity} Orang
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
