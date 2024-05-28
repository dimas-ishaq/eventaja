import SecondaryButton from '@/components/buttons/secondary-button';
import Image from 'next/image';
import React from 'react';

export default function Jumbotron() {
  return (
    <div className="h-[100vh] bg-black text-white">
      <div className="relative w-full h-full z-0">
        <Image
          src="/homepage/jumbotron.jpg"
          alt="Gambaran event"
          fill
          objectFit="cover"
          priority={true}
        />
      </div>
      <div className=" flex items-center justify-center flex-col absolute z-10 w-full h-full top-0 gap-9">
        <div>
          <h1 className="lg:text-9xl md:text-8xl text-5xl">Event Aja</h1>
        </div>
        <div>
          <h2 className="lg:text-xl  md:text-xl ">
            Platform Kolaborasi Terbaik untuk Event Organizer, Event Owner, dan
            Sponsor
          </h2>
        </div>
        <div>
          <SecondaryButton text="Coba Sekarang" />
        </div>
      </div>
    </div>
  );
}
