'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiLock } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import LogoEventAja from '@/assets/img/logo/logo-event-aja.png';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Spiner from '../spiner';

export default function LoginForm() {
  const router = useRouter();

  const { data: session, status } = useSession();
  console.log(session, status);
  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard/user');
    }
  }, [status]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandle = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    const data = {
      username,
      password,
      redirect: false,
    };

    console.log(data);
    const stats = await signIn('credentials', data);
    if (stats.error) {
      setMessage('Username atau password salah');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={submitHandle}>
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
          {message !== '' && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{message}</span>
            </div>
          )}
          <label className="mb-2.5 block font-medium">Email</label>
          <div className="relative">
            <input
              type="email"
              autoComplete="off"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        <button
          type="submit"
          className={`w-full cursor-pointer rounded-lg border ${loading ? 'border-violet-900/50 bg-violet-900/50 p-4 ' : 'border-violet-900 bg-violet-900 p-4 text-white transition hover:bg-white hover:text-black'}`}
          disabled={loading}
        >
          {loading ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : (
            'Masuk'
          )}
        </button>
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
              Daftar Sekarang
            </span>
          </Link>
        </p>
      </div>
    </form>
  );
}
