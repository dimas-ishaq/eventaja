import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function TestimoniCard({ image, rate, text, name }) {
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
        <div className="text-3xl font-bold mb-6 text-center flex justify-center">
            <Image src='/homepage/star.png' width={35} height={35} alt='star' />
            <Image src='/homepage/star.png' width={35} height={35} alt='star' />
            <Image src='/homepage/star.png' width={35} height={35} alt='star' />
            <Image src='/homepage/star.png' width={35} height={35} alt='star' />
            <Image src='/homepage/star.png' width={35} height={35} alt='star' />
        </div>
        <p className="text-xl text-slate-600">{text}</p>
        <div className="card-actions justify-center pt-10">
          <p className="text-xl text-slate-600 text-right">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
}
