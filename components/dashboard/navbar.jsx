'use client';
import React, { useEffect } from 'react';
import {
  IoNotifications,
  IoChatbubbleSharp,
  IoSearchSharp,
} from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import Image from 'next/image';
import adminProfile from '../../assets/img/profile_admin.png';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Navbar({ links }) {
  const router = useRouter();

  const session = useSession();
  console.log(session);
  useEffect(() => {
    if (session.status !== 'loading') {
      if (session.status !== 'authenticated') {
        router.push('/login');
      }
    }
  }, [session.status]);

  console.log(links);
  return (
    <div className="w-full h-20 bg-fuchsia-600 rounded-md justify-center items-center lg:sticky lg:top-0">
      <div className="flex justify-between items-center h-full">
        <div className="drawer md:hidden max-w-[60px] z-10 ">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="drawer-button hover:cursor-pointer"
            >
              <RxHamburgerMenu className=" ml-5 w-6 h-auto text-white" />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

              {links.map((link, index) => {
                return <li className='font-medium hover:bg-pink-500 hover:text-white rounded-sm' key={index} >

                  <a href={link.href}>{link.name}</a>
                </li>
              })}
              <li className='font-medium hover:bg-pink-500 hover:text-white rounded-sm' >
                <a href='/'>Logout</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-96 flex justify-center">
          <input
            type="input"
            name="search"
            id="search"
            placeholder="Type to search"
            className="ml-5 w-full px-3 py-2.5 rounded-lg bg-fuchsia-600 text-white outline-none placeholder:text-white placeholder:text-sm"
          />
          <button type="button" className="ml-2">
            <IoSearchSharp className="w-10 h-auto rounded-full hover:bg-white p-2 hover:text-gray-600 text-white" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <span>
            <IoNotifications className="ml-2 w-10 h-auto rounded-full hover:bg-white p-2 hover:text-gray-600 text-white" />
          </span>
          <span>
            <IoChatbubbleSharp className="ml-3 md:ml-5 lg:ml-8 w-10 h-auto rounded-full hover:bg-white p-2 hover:text-gray-600 text-white" />
          </span>
          {session?.status === 'authenticated' && (
            <div className="ml-10 mr-5 flex justify-center items-center">
              <div className="hidden md:block min-w-[70px]">
                <p className="text-sm text-white font-medium">
                  {session?.data?.user?.name}
                </p>
                <p className="text-xs text-white font-light">{session?.data?.user?.position}</p>
              </div>
              <div className='max-w-[50px] max-h-[50px] rounded-full border-2 border-white mx-2 overflow-hidden relative'>
                <Image
                  src={session?.data?.user?.image}
                  className="w-full h-full"
                  width={0}
                  height={0}
                  objectFit="contain"
                  alt={session?.data?.user?.name}
                  sizes="100vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
