'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiUser, FiLock } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { GoOrganization } from 'react-icons/go';
import { MdWorkOutline } from 'react-icons/md';
import { BsBuilding, BsHouse, BsTelephone } from 'react-icons/bs';
import LogoEventAja from '@/assets/img/logo/logo-event-aja.png';
import Link from 'next/link';
import { supabase } from '@/utils/conections/supabase';

export default function RegisterForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [position, setPosition] = useState('');
  const [noTelp, setNoTelp] = useState('');
  const [organization, setOrganization] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [organizationAddress, setOrganizationAddress] = useState('');
  const [isSure, setisSure] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandel = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await supabase.from('tbl_user').insert({
        name: fullName,
        username: email,
        password,
        phone_number: noTelp,
        organization: organization,
        position: position,
        user_address: userAddress,
        organization_address: organizationAddress,
        avatar:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Fuser-profile&psig=AOvVaw1J612v_XlSPTC8HIG6CpV2&ust=1717574842922000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCB0P--wYYDFQAAAAAdAAAAABAE',
      });
      console.log('res resgister : ', res);
    } catch (error) {
      console.log('error saat insert', error);
    }
    reset();
    setLoading(false);
  };

  const reset = () => {
    setFullName('');
    setEmail('');
    setPassword('');
    setPosition('');
    setNoTelp('');
    setOrganization('');
    setUserAddress('');
    setOrganizationAddress('');
    setisSure('');
  };

  return (
    <form onSubmit={submitHandel} className={loading ? 'animate-pulse' : ''}>
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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
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
            value={position}
            onChange={(e) => setPosition(e.target.value)}
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
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
          />
          <BsTelephone className="absolute right-4 top-4 text-xl" />
        </div>
      </div>
      <div className="mb-6">
        <label className="mb-2.5 block font-medium">Alamat pengguna</label>
        <div className="relative">
          <textarea
            autoComplete="off"
            required
            placeholder="Masukkan Alamat pengguna"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-violet-900"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />
          <BsHouse className="absolute right-4 top-4 text-xl" />
        </div>
      </div>
      <div className="mb-6">
        <label className="mb-2.5 block font-medium">Alamat Organisasi</label>
        <div className="relative">
          <textarea
            autoComplete="off"
            required
            placeholder="Masukkan Alamat Organisasi"
            className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-violet-900"
            value={organizationAddress}
            onChange={(e) => setOrganizationAddress(e.target.value)}
          />
          <BsBuilding className="absolute right-4 top-4 text-xl" />
        </div>
      </div>
      <div className="mb-6 flex justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="checkbox1"
            className="mr-4"
            value={isSure}
            onClick={() => setisSure(!isSure)}
          />{' '}
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
          disabled={!isSure}
          className={`w-full cursor-pointer rounded-lg border ${isSure ? 'border-violet-900 bg-violet-900 p-4 text-white transition hover:bg-white hover:text-black' : 'border-violet-900/50 bg-violet-900/50 p-4 text-white transition '}`}
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
