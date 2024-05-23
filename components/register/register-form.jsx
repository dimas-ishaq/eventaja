import React from 'react';
import Image from 'next/image';
import { FiUser, FiLock } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { GoOrganization } from 'react-icons/go';
import { MdWorkOutline } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import LogoEventAja from '@/assets/img/logo/logo-event-aja.png';
import Link from 'next/link';

export default function RegisterForm() {
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
            Daftar
          </p>
          <p className="text-black 2xl:px-20 mb-4 text-center">
            Gabung bersama di Event Aja
          </p>
        </div>
        <div className="mb-6">
          <label className="mb-2.5 block font-medium">Nama Lengkap</label>
          <div className="relative">
            <input
              type="text"
              autoComplete="off"
              required
              maxLength={50}
              placeholder="Masukkan nama lengkap (Maks. 50 Karakter)"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-violet-900"
            />
            <FiUser className="absolute right-4 top-4 text-xl" />
          </div>
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
      <div className="mb-6">
        <label className="mb-2.5 block font-medium">
          Organisasi/Perusahaan
        </label>
        <div className="relative">
          <input
            type="text"
            autoComplete="off"
            required
            placeholder="Masukkan organisasi/perusahaan"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-violet-900"
          />
          <GoOrganization className="absolute right-4 top-4 text-xl" />
        </div>
      </div>
      <div className="mb-6">
        <label className="mb-2.5 block font-medium">Jabatan</label>
        <div className="relative">
          <input
            type="text"
            autoComplete="off"
            required
            placeholder="Masukkan jabatan"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-violet-900"
          />
          <MdWorkOutline className="absolute right-4 top-4 text-xl" />
        </div>
      </div>
      <div className="mb-6">
        <label className="mb-2.5 block font-medium">Nomor Telepon</label>
        <div className="relative">
          <input
            type="number"
            autoComplete="off"
            required
            placeholder="Masukkan nomor telepon"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-violet-900"
          />
          <BsTelephone className="absolute right-4 top-4 text-xl" />
        </div>
      </div>
      <div className="mb-6 flex justify-between">
        <div className="flex items-center">
          <input type="checkbox" id="checkbox1" className="mr-4" />{' '}
          <label htmlFor="checkbox1" className="block font-medium">
            Saya memastikan bahwa informasi yang diberikan adalah benar dan
            akurat
          </label>
        </div>
      </div>

      <div className="mb-5">
        <input
          type="submit"
          value={'Daftar'}
          className="w-full cursor-pointer rounded-lg border border-violet-900 bg-violet-900 p-4 text-white transition hover:bg-white hover:text-black"
        />
      </div>
      <div className="mb-5 text-center">
        <p>
          <span className="md:inline text-black mr-1">
            Sudah memiliki akun?
          </span>
          <Link
            href="/login"
            className="text-black hover:text-black/50 font-bold"
          >
            <span className="underline hover:text-violet-900">
              Masuk sekarang
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
}
