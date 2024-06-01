'use client'

import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
export default function SearchInput({ searchHandler, placeholder }) {
  return (
    <>
      <input type="search" name="search_blog" id="search_blog" className='px-3 py-2.5 w-full rounded-md outline-1 outline-violet-500 border-1 bg-gray-200/80' placeholder={placeholder} />
      <button type="button" className='px-3 py-2.5 ml-2 bg-violet-700 hover:bg-violet-600 rounded' onClick={() => { }}>
        <IoSearchSharp className='w-6 h-auto text-white' />
      </button>
    </>

  )
}
