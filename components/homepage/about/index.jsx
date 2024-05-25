import MainButton from '@/components/buttons/main-buttons';
import Image from 'next/image';
import React from 'react';
import AboutUs from '../../../public/homepage/deal.jpg';
import Container from '@/components/container';

export default function About() {
  return (
    <div className="flex justify-center pt-20">
      <Container className="flex gap-5">
        <div className="flex flex-col ">
          <div className="text-black">
            <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
            <p className="text-xl text-slate-600">
              Event Aja adalah platform revolusioner yang menghubungkan Event
              Organizer, Event Owner, dan Sponsor untuk menciptakan kolaborasi
              yang sukses dan berkesinambungan
            </p>
          </div>
          <div className="text-black flex mt-5 gap-5">
            <div>
              <h2 className="text-3xl font-bold mb-6">Misi Kami</h2>
              <p className="text-xl text-slate-600">
                Event Aja adalah platform revolusioner yang menghubungkan Event
                Organizer, Event Owner, dan Sponsor untuk menciptakan kolaborasi
                yang sukses dan berkesinambungan
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Cerita Kami</h2>
              <p className="text-xl text-slate-600">
                Event Aja dibentuk untuk mengatasi tantangan dalam industri
                event. Dengan latar belakang di manajemen, teknologi, dan
                pemasaran, kami menyatukan semua elemen untuk kesuksesan event.
              </p>
            </div>
          </div>
          <div className="w-40 mt-14">
            <MainButton text="Mulai Sekarang" />
          </div>
        </div>
        <div className="flex-shrink">
          <div className="relative w-[750px] h-[500px]">
            <Image
              src={AboutUs}
              alt="Gambaran event"
              fill
              objectFit="cover"
              priority={true}
              className="rounded-2xl"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
