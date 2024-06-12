'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Container from '../container';
import { useSession } from 'next-auth/react';

export default function Navbar() {
  const session = useSession();
  console.log('session',{session});
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsScrolled(true);
        setIsOpen(false);
      } else {
        setIsScrolled(false);
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Ubah breakpoint sesuai kebutuhan
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <nav
      className={`navbar bg-base-100 z-30 sticky top-0 justify-start md:justify-center ${isScrolled ? 'bg-white bg-opacity-90 shadow-lg' : ''}`}
    >
      <Container className="flex ">
        <div className="flex-1">
          <Link href="/">
            <Image
              src="/logo.png"
              width="70"
              height="70"
              alt="Logo event aja"
            />
          </Link>
        </div>
        {isMobile ? (
          <>
            <button
              className="block lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {/* Tombol navigasi mobile */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {isOpen && (
              <div
                className={`flex-none flex justify-center items-center flex-col px-5 md:flex gap-8 pb-11 absolute top-[86px] bg-white z-40 md:z-0 right-0 md:right-auto ${isScrolled ? 'bg-opacity-90' : ''}`}
              >
                <div>
                  <Link href="/">Beranda</Link>
                </div>
                <div>
                  <Link href="/events">Event</Link>
                </div>
                <div>
                  <Link href="/services">Layanan</Link>
                </div>
                <div>
                  <Link href="/blog">Blog</Link>
                </div>
                <div>
                  <Link href="/contact">Kontak</Link>
                </div>
                <div>
                  <Link
                    href="/login"
                    className="border border-black px-5 py-3 rounded bg-violet-900 text-white"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex-none md:flex gap-8   z-40 md:z-0 right-4 md:right-auto">
            <div>
              <Link href="/">Beranda</Link>
            </div>
            <div>
              <Link href="/events">Event</Link>
            </div>
            <div>
              <Link href="/services">Layanan</Link>
            </div>
            <div>
              <Link href="/blog">Blog</Link>
            </div>
            <div>
              <Link href="/contact">Kontak</Link>
            </div>
            <div>
              {session.status !== 'loading' &&
                (session.status === 'authenticated' ? (
                  <Link
                    href="/dashboard/user/"
                    className="border border-black px-5 py-3 rounded bg-violet-900 text-white"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    className="border border-black px-5 py-3 rounded bg-violet-900 text-white"
                  >
                    Daftar Sekarang
                  </Link>
                ))}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
