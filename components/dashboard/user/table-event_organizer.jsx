import React from 'react'

export default function TableEventOrganizer({ eventsOrganizer }) {
  return (
    <div class="overflow-x-auto mt-5">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" class="px-6 py-3">
              Thumbnail
            </th>
            <th scope="col" class="px-6 py-3">
              Judul Layanan
            </th>
            <th scope="col" class="px-6 py-3">
              Jenis Layanan
            </th>
            <th scope="col" class="px-6 py-3">
              Deskripsi
            </th>
            <th scope="col" class="px-6 py-3">
              Tanggal Dibuat
            </th>
          </tr>
        </thead>
        <tbody>
          {eventsOrganizer.map((event, key) => (
            <tr key={key} class="bg-white border-b  ">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {event.pictures}
              </th>
              <td class="px-6 py-4">
                {event.title}
              </td>
              <td class="px-6 py-4">
                {event.service_type}
              </td>
              <td class="px-6 py-4">
                {event.description}
              </td>
              <td class="px-6 py-4">
                {event.created_at}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
