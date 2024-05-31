import Container from '@/components/container';
import React from 'react';

export default function StepCard({ step, title, text }) {
  return (
    <div className="flex text-white bg-violet-700  shadow-md justify-center items-center w-full h-52 md:h-60 rounded-lg ">
      <Container className="flex flex-col justify-between ">
        <div className="flex flex-col w-full justify-center items-center ">
          <div className="flex border-2 border-white justify-center items-center px-10 py-3  rounded-full ">
            {step}
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center text-center mt-5">
          <h3 className="text-base md:text-lg font-bold  text-center">{title}</h3>
          <p className="text-sm md:text-base ">{text}</p>
        </div>
      </Container>
    </div>
  );
}
