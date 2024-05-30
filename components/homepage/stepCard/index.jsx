import Container from '@/components/container';
import React from 'react';

export default function StepCard({ step, title, text }) {
  return (
    <div className="flex border border-fuchsia-600 justify-center items-center w-full md:w-[45%] lg:[20%] h-52 md:h-60 rounded-lg ">
      <Container className="flex flex-col justify-between h-[80%]">
        <div className="flex flex-col w-full justify-center items-center ">
          <div className="flex border border-black justify-center items-center w-[80%] h-16 rounded-full ">
            {step}
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center ">
          <h3 className="text-base md:text-lg font-bold text-slate-800 text-center">{title}</h3>
          <p className="text-sm md:text-base text-slate-600">{text}</p>
        </div>
      </Container>
    </div>
  );
}
