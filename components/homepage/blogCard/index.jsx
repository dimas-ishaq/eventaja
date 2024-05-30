import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BlogCard({ image, title, text, href, createdAt }) {
  return (
    <div
      className="card card-compact w-[100%] md:w-[50%] lg-[30%] bg-base-100 "
      style={{ borderRadius: 0 }}
    >
      <figure>
          <Image
            src={image}
            alt="Shoes"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
          />
      </figure>
      <div className="card-body">
        <small className='border flex items-center justify-center h-5 rounded min-w-9 max-w-16 font-bold text-sm'>Event</small>
        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-6 text-left">{title}</h2>
        <p className="text-sm md:text-lg text-slate-600">{text}</p>
        <small className="text-sm block text-right">{createdAt}</small>
        <div className="card-actions justify-center pt-10">
          <Link className="text-sm md:text-lg text-fuchsia-600 text-center" href={href}>
            Baca Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
}
