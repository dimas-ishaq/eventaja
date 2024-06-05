import React from 'react'

export default function TableSponsor({ sponsor }) {
  return (
    <div class="overflow-x-auto mt-5">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-200">
          <tr>
            <th scope="col" class="px-6 py-3">
              Sponsor
            </th>
            <th scope="col" class="px-6 py-3">
              Deskripsi
            </th>
            <th scope="col" class="px-6 py-3">
              Event Capacity
            </th>
            <th scope="col" class="px-6 py-3">
              Budget Start - End
            </th>
          </tr>
        </thead>
        <tbody>
          {sponsor.map((item, key) => (
            <tr key={key} class="bg-white border-b  ">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {item.name}
              </th>
              <td class="px-6 py-4">
                {item.description}
              </td>
              <td class="px-6 py-4">
                {item.event_capacity_minimum} Orang
              </td>
              <td class="px-6 py-4">
                IDR {item.budget_start} - {item.budget_start}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}