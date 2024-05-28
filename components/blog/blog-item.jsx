'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogs from '@/utils/blogs';
import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/fa';

const BlogItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="parent">
      <div initial="hidden">
        <h1 className="text-3xl font-semibold text-center">
          Informasi Terbaru
        </h1>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3" initial="hidden">
          {currentBlogs.map((blog) => {
            const { _id, title, date, img, description, path } = blog;
            return (
              <div
                key={_id}
                className="flex flex-col items-center justify-between w-full gap-8 rounded-lg min-h-32"
              >
                <div className="w-full">
                  <Link href={'/blog/' + path}>
                    <Image
                      alt={'image blog'}
                      width={500}
                      height={280}
                      src={img}
                      className="rounded-lg cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="w-full">
                  <Link href={'/blog/' + path}></Link>
                </div>
                <div className="w-full">
                  <h2 className="text-[22px] font-medium text-black cursor-pointer hover:text-violet-900 mt-[-25px]">
                    <Link href={'/blog/' + path}>{title}</Link>
                  </h2>
                  <span className="text-sm text-gray-600">
                    <p>{date}</p>
                  </span>
                  <p className="mt-1 mb-6 text-gray">
                    {description?.slice(0, 80)} ...
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <button
          onClick={handlePreviousPageClick}
          disabled={currentPage === 1}
          className="flex items-center gap-3 text-black duration-500 bg-transparent border-2 btn border-violet-900 hover:bg-violet-900 hover:border-transparent hover:text-white"
        >
          <FaAngleDoubleLeft />
        </button>
        <span className="px-4 text-gray">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPageClick}
          disabled={currentPage === totalPages}
          className="flex items-center gap-3 text-white duration-500 border-2 btn bg-violet-900 hover:bg-transparent hover:border-violet-900 hover:text-black"
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default BlogItem;
