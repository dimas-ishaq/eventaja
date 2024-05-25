import Container from '@/components/container';
import React from 'react';
import StepCard from '../stepCard';
import Image from 'next/image';

export default function HowTo() {
  return (
    <div className="flex w-full justify-center pt-20" id="howto">
      <Container className="flex flex-col gap-5 ">
        <div className="flex flex-col-reverse md:flex-row justify-between flex-wrap">
          <div className="flex flex-col gap-5 w-full md:w-[40%] mt-10 md:mt-0">
            <h2 className="text-3xl font-bold mb-6">
              Langkah Mudah Memulai di Event Aja
            </h2>
            <p className="text-xl text-slate-600">
              Mulai dari Evenet Aja dulu. Langkah mudah untuk mendapatkan
              kebutuhan event anda.
            </p>
          </div>
          <div className="flex w-full md:w-[50%]">
            <Image
              src="/homepage/howto.jpg"
              alt="Shoes"
              width={0}
              height={0}
              sizes="100vw"
              objectFit="cover"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
        <div className="flex mt-20 min-h-80 gap-5 flex-wrap lg:flex-nowrap justify-normal md:justify-between">
          <StepCard step="Langkah 1" title="Daftar Akun" text="Buat akun di Event Aja dengan mengisi informasi dasar Anda." />
          <StepCard step="Langkah 2" title="Buat Event" text="Isi detail event Anda, termasuk tanggal, lokasi, dan deskripsi"/>
          <StepCard step="Langkah 3" title="Undang Kolabolator" text="Ajak event organizer, owner, dan sponsor untuk bergabung dan berkolaborasi"/>
          <StepCard step="Langkah 4" title="Publikasi Event" text="Publikasikan event Anda dan mulai promosikan ke audiens target"/>
        </div>
      </Container>
    </div>
  );
}
