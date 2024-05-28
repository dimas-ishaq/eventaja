import React from 'react';
import Image from 'next/image';
import LoginImg from '@/assets/img/login/loginImg.png';
import LoginForm from '@/components/login/login-form';

export default function Login() {
  return (
    <div className="parent bg-white flex items-center justify-center min-h-screen">
      <div className="flex flex-wrap items-center justify-center w-full">
        <div className="hidden w-full xl:block xl:w-1/2 justify-center">
          <Image
            className="w-80 h-100 sm:max-w-none"
            src={LoginImg}
            alt="Image Login Event Aja"
          />
        </div>
        <div className="w-full xl:w-1/3">
          <div className="w-full sm:p-12.5 xl:p-17.5">
            <LoginForm/>
          </div>
        </div>
      </div>
    </div>
  );
}
