import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function ServicesCard({ image, title, text, href }) {
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
        <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
        <p className="text-xl text-slate-600">{text}</p>
        <div className="card-actions justify-center pt-10">
          <Link className="text-xl text-fuchsia-600 text-center" href={href}>
            Selengkapnya
          </Link>
        </div>
      </div>
    </div>
  );
}
