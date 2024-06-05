
import React from 'react'

export default function EventInput() {
  return (
    <form>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="title" id="title" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer" placeholder=" " required />
        <label for="title" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Judul Event</label>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input type="number" min={1} name="budget" id="budget" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer" placeholder=" " required />
          <label for="budget" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Budget (Rupiah)</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="number" name="capacity" id="capacity" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer" placeholder=" " required />
          <label for="capacity" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Kapasitas Acara (Orang)</label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="location" id="location" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer" placeholder=" " required />
          <label for="location" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Lokasi Acara</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="file" name="banner" id="banner" className="block cursor-pointer  py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer" placeholder=" " required />
          <label for="banner" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Upload Banner Acara</label>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-5 group">
          <input type="date" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer" placeholder=" " required />
          <label for="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Mulai</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="date" name="company" id="company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer" placeholder=" " required />
          <label for="company" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tanggal Berakhir</label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" name="description" id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-fuchsia-600 peer" placeholder=" " required />
        <label for="description" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deskripsi</label>
      </div>
      <button type="submit" className="text-white bg-fuchsia-700 hover:bg-fuchsia-600 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Buat Event</button>
    </form>
  )
}
