import Container from '@/components/container';
import React from 'react';
import StepCard from '../stepCard';
import Image from 'next/image';

export default function HowTo() {
  return (
    <div className="flex w-full justify-center pt-20" id="howto">
      <Container className="flex flex-col gap-5 w-full">
        <div className="flex justify-between gap-5 flex-col-reverse lg:flex-row w-full">
          <div className="flex flex-col w-full lg:w-6/12">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black">
              Langkah Mudah Memulai di Event Aja
            </h2>
            <p className="text-sm md:text-lg w-full md:max-w-[680px] mt-2.5">
              Mulai dari Evenet Aja dulu. Langkah mudah untuk mendapatkan
              kebutuhan event anda.
            </p>
          </div>
          <div className="w-full lg:w-6/12 ">
            <Image
              src="/homepage/howto.jpg"
              alt="Shoes"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="contain"
              className='rounded-md object-cover w-full  '
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 min-h-80 gap-5  ">
          <StepCard step="Langkah 1" title="Daftar Akun" text="Buat akun di Event Aja dengan mengisi informasi dasar Anda." />
          <StepCard step="Langkah 2" title="Buat Event" text="Isi detail event Anda, termasuk tanggal, lokasi, dan deskripsi"/>
          <StepCard step="Langkah 3" title="Undang Kolabolator" text="Ajak event organizer, owner, dan sponsor untuk berkolaborasi"/>
          <StepCard step="Langkah 4" title="Publikasi Event" text="Publikasikan event Anda dan mulai promosikan ke audiens target"/>
        </div>
      </Container>
    </div>
  );
}
