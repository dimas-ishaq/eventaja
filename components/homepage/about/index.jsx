import MainButton from '@/components/buttons/main-buttons';
import Image from 'next/image';
import React from 'react';
import AboutUs from '../../../public/homepage/deal.jpg';
import Container from '@/components/container';

export default function About() {
  return (
    <div className="flex justify-center pt-20 ">
      <Container className="flex gap-5 flex-wrap-reverse xl:flex-nowrap">
        <div className="flex flex-col w-full">
          <div className="text-black">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-6">Tentang Kami</h2>
            <p className="text-sm md:text-lg md:mt-2.5 mt-2">
              Event Aja adalah platform revolusioner yang menghubungkan Event
              Organizer, Event Owner, dan Sponsor untuk menciptakan kolaborasi
              yang sukses dan berkesinambungan
            </p>
          </div>
          <div className="text-black flex mt-5 gap-5">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-6">Misi Kami</h2>
              <p className="text-sm md:text-lg md:mt-2.5 mt-2">
                Event Aja adalah platform revolusioner yang menghubungkan Event
                Organizer, Event Owner, dan Sponsor untuk menciptakan kolaborasi
                yang sukses dan berkesinambungan
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-6">Cerita Kami</h2>
              <p className="text-sm md:text-lg md:mt-2.5 mt-2">
                Event Aja dibentuk untuk mengatasi tantangan dalam industri
                event. Dengan latar belakang di manajemen, teknologi, dan
                pemasaran, kami menyatukan semua elemen untuk kesuksesan event.
              </p>
            </div>
          </div>
          <div className="w-40 mt-10">
            <MainButton text="Mulai Sekarang" />
          </div>
        </div>
        <div className="w-full">
          <Image
              src={AboutUs}
              alt="Shoes"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="contain"
              className='w-full h-auto'
            />
        </div>
      </Container>
    </div>
  );
}
