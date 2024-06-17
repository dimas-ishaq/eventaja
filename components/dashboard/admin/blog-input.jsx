"use client"
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function BlogInput() {
  const [value, setValue] = useState('');

  return (
    <div className='flex flex-col'>
      <div className="rounded-sm shadow-default">
        <div className="flex flex-col gap-5.5 p-6.5 mt-2.5">
          <div>
            <label className="mb-3 block text-sm font-medium text-black">
              Judul
            </label>
            <input
              type="text"
              placeholder="Masukkan Judul Blog/Artikel"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-violet-500 active:border-violet-500 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-violet-500"
            />
          </div>

          <div className='mt-2.5'>
            <label className="mb-3 block text-sm font-medium text-black">
              Tags
            </label>
            <input
              type="text"
              placeholder="Masukkan Tag Blog/Artikel"
              className="w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-violet-500 active:border-violet-500 disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
            />
          </div>
          <div className='mt-2.5'>
            <label className="mb-3 block text-sm font-medium text-black">
              Upload Gambar
            </label>
            <input
              type="file"
              className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-violet-500 file:hover:bg-opacity-10 focus:border-violet-500 active:border-violet-500 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark"
            />
          </div>
        </div>
        <div className="mt-5">
          <p className='font-medium text-sm text-black'>Content</p>
          <ReactQuill theme="snow" value={value} onChange={setValue} className='mt-2.5' />
        </div>
        <button type='button' className='px-2 py-1 bg-violet-600 hover:bg-violet-500 mt-5 font-medium text-white rounded-md'>
          Buat Postingan
        </button>
      </div>

    </div>
  )
}
