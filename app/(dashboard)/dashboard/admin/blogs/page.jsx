'use client'

import React from 'react'
import TableBlogs from '@/components/dashboard/table-blogs'
import { IoSearchSharp } from "react-icons/io5";
import BlogInput from '@/components/dashboard/blog-input';
import { useState } from 'react';


export default function Blogs() {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="w-full flex flex-col md:mt-2">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-start p-3">
        <div className="flex flex-col mt-2 md:mt-0">
          <h4 className='text-xl font-bold'>Blogs</h4>
          <p className='text-sm mt-2'>Buat, edit, dan kelola blogs</p>
        </div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Dashboard</a></li>
            <li><a>Admin</a></li>
            <li>Blogs</li>
          </ul>
        </div>

      </div>
      <div className="m-3 flex flex-col">
        <div className="flex flex-col items-center w-full">
          <div className={`w-full ml-2.5  justify-center items-center  ${isOpen ? 'hidden' : 'flex'} `}>
            <input type="search" name="search_blog" id="search_blog" className='px-3 py-2.5 w-full rounded-md outline-1 outline-violet-500 border-1 bg-gray-200/80' placeholder='Search blogs here ...' />
            <button type="button" className='px-3 py-2.5 ml-2 bg-violet-700 hover:bg-violet-600 rounded'>
              <IoSearchSharp className='w-6 h-auto text-white' />
            </button>
          </div>
          <div className="flex justify-between border-b border-gray-300 w-full mt-5 pb-5">
            <h5 className="text-lg font-semibold">{isOpen ? 'Buat Post' : 'Post'}</h5>
            <button type="button" className="bg-pink-700 hover:bg-pink-600 px-2 py-1 text-sm font-normal text-white rounded-sm" onClick={() => isOpen ? setOpen(false) : setOpen(true)}>
              {isOpen ? 'x Batalkan' : ' + Tambahkan Post Baru'}
            </button>
          </div>
        </div>
        <div className={` flex-col w-full ${isOpen ? 'hidden' : 'flex'} `}>
          <TableBlogs />
        </div>
        <div className={` w-full ${isOpen ? 'block' : 'hidden'} `}>
          <BlogInput />
        </div>

      </div>

    </div >
  )
}
