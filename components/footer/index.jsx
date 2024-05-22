import React from 'react';
import {
  FaPhoneAlt,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';
import AvatarLogoEventAja from '../../assets/img/logo/logo-event-aja.png';
import IconPayments from '../../assets/img/footer/sslcommerzPayments.png';

function Footer() {
  return (
    <div className="parent bg-white">
      <footer className="container mx-auto p-10 md:flex md:justify-between md:items-start">
        <div className="md:mr-12">
          <Image
            src={AvatarLogoEventAja}
            alt="Logo Event Aja"
            className="w-32 sm:w-46"
          />
          <h1 className="text-2xl font-bold text-gradient mb-4 text-black">
            Event Aja
          </h1>
          <span className="text-black block mb-4">
            Event Aja adalah platform revolusioner yang
            <br />
            menghubungkan Event Organizer, Event
            <br />
            Owner & Sponsor untuk menciptakan <br />
            kolaborasi yang sukses & berkesinambungan
          </span>
          <div className="mb-2">
            <div className="flex items-center">
              <a
                aria-label="link"
                href="https://github.com/capstone-project-c624-ps014"
                target="_blank"
                className="text-2xl text-black hover:text-violet-900 hover:-translate-y-1.5 shadow-lg duration-300"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                aria-label="link"
                href="https://github.com/capstone-project-c624-ps014"
                target="_blank"
                className="text-2xl text-black hover:text-violet-900 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
              <a
                aria-label="link"
                href="https://github.com/capstone-project-c624-ps014"
                target="_blank"
                className="text-2xl text-black hover:text-violet-900 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                rel="noreferrer"
              >
                <FaFacebookSquare />
              </a>
              <a
                aria-label="link"
                href="https://github.com/capstone-project-c624-ps014"
                target="_blank"
                className="text-2xl text-black hover:text-violet-900 hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                rel="noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </div>
        <div className="mb-8 mt-12">
          <div className="mb-4">
            <span className="font-bold text-gradient block mb-4">Tautan</span>
            <div
              to="home"
              offset={-200}
              className="link link-hover hover:text-violet-900 text-black block mb-4 cursor-pointer"
            >
              Beranda
            </div>
            <div
              to="services"
              className="link link-hover hover:text-violet-900 text-black block mb-4 cursor-pointer"
            >
              Layanan
            </div>
            <div
              to="events"
              className="link link-hover hover:text-violet-900 text-black block mb-4 cursor-pointer"
            >
              Event
            </div>
            <div
              to="blogs"
              className="link link-hover hover:text-violet-900 text-black block mb-4 cursor-pointer"
            >
              Blog
            </div>
            <div
              to="contact"
              className="link link-hover hover:text-violet-900 text-black block mb-4 cursor-pointer"
            >
              Kontak
            </div>
          </div>
        </div>
        <div className="mb-8 mt-12">
          <div className="mb-4">
            <span className="font-bold text-gradient block mb-4">
              Layanan Kami
            </span>
            <div
              to="events"
              className="link link-hover hover:text-violet-900 text-black block mb-4 cursor-pointer"
            >
              Event
            </div>
            <div
              to="eventorganizer"
              className="link link-hover hover:text-violet-900 text-black block mb-4 cursor-pointer"
            >
              Event Organizer
            </div>
            <div
              to="sponsors"
              className="link link-hover hover:text-violet-900 text-black block mb-4 cursor-pointer"
            >
              Sponsor
            </div>
          </div>
        </div>
        <div className="mb-8 mt-12">
          <div className="mb-4">
            <span className="font-bold text-gradient block mb-4">
              Hubungi Kami
            </span>
            <div className="text-black mb-4 flex items-center cursor-pointer">
              <FaPhoneAlt className="mr-2 text-xl text-black hover:text-violet-900" />
              <p className="text-black hover:text-violet-900">082161222292</p>
            </div>
            <div className="text-black mb-4 flex items-center cursor-pointer hover:text-violet-900">
              <MdEmail className="mr-2 text-xl text-black hover:text-violet-900" />
              <p className="text-black hover:text-violet-900">
                info@eventaja.com
              </p>
            </div>
            <div className="link link-hover hover:text-violet-900 text-black block mb-4 cursor-pointer">
              www.eventaja.com
            </div>
          </div>
        </div>
      </footer>
      <footer className="px-10 text-sm sm:py-2 py-2 text-center text-base-100 translate-y-[-40%] sm:translate-y-[-20%]">
        <div className="flex flex-col items-center">
          <Image
            src={IconPayments}
            alt="Logo Payment"
            className="w-full max-w-200 sm:max-w-none mx-auto justify-center"
          />
        </div>
        <div className="w-full h-[1px] bg-black mt-10" />
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <p className="md:mb-0 text-black">
            &copy; Copyright 2024, <span className="font-bold">Event Aja</span>
          </p>
          <p>
            <span className=" md:inline text-black mr-1">
              Designed & Developed by
            </span>
            <a
              href="https://github.com/capstone-project-c624-ps014"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-black/50 font-bold"
            >
              <span className="underline hover:text-violet-900">
                Team C624-PS014
              </span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
