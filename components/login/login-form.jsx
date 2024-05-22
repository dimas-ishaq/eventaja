import React from 'react';
import Image from 'next/image';
import { FiLock } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import LogoEventAja from '@/assets/img/logo/logo-event-aja.png';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <form>
      <div className="mb-5">
        <div className="flex justify-center">
          <span className="inline-block">
            <Image
              className="w-20 sm:max-w-none mx-auto"
              src={LogoEventAja}
              alt="Logo Event Aja"
              title="Logo Event Aja"
            />
          </span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-black text-2xl font-semibold text-center mb-4">
            Masuk
          </p>
          <p className="text-black 2xl:px-20 mb-4 text-center">
            Raih Sukses di Event Aja
          </p>
        </div>
        <div className="mb-6">
          <label className="mb-2.5 block font-medium">Email</label>
          <div className="relative">
            <input
              type="email"
              autoComplete="off"
              required
              placeholder="Masukkan email"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-violet-900"
            />
            <AiOutlineMail className="absolute right-4 top-4 text-xl" />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <label className="mb-2.5 block font-medium">Password</label>
        <div className="relative">
          <input
            type="password"
            required
            placeholder="Masukkan password"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-violet-900"
          />
          <FiLock className="absolute right-4 top-4 text-xl" />
        </div>
      </div>
      <div className="mb-6 flex justify-between">
        <div className="flex items-center">
          <input type="checkbox" id="checkbox1" className="mr-2" />{' '}
          <label className="block font-medium">Ingat saya</label>
        </div>
        <div className="flex items-center">
          <p className=" font-medium cursor-pointer link link-hover hover:text-violet-900">
            Lupa password?
          </p>
        </div>
      </div>

      <div className="mb-5">
        <input
          type="submit"
          value={'Masuk'}
          className="w-full cursor-pointer rounded-lg border border-violet-900 bg-violet-900 p-4 text-white transition hover:bg-white hover:text-black"
        />
      </div>
      <div className="mb-5 text-center">
        <p>
          <span className="md:inline text-black mr-1">
            Belum memiliki akun?
          </span>
          <Link
            href="/register"
            className="text-black hover:text-black/50 font-bold"
          >
            <span className="underline hover:text-violet-900">
              Daftar sekarang
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
}
