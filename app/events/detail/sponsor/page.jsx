import React from 'react'
import Image from 'next/image'
import eventSponsorDetailImage from '../../../../assets/img/event_detail_sponsor_image_1.png'
import ChatButton from '@/components/buttons/chat-button';
import { SiWhatsapp } from "react-icons/si";
export default function Detail() {
  return (
    <div className="flex flex-col w-100 min-h-screen justify-center items-center bg-white">
      <div className="event__detail flex flex-col w-11/12 mt-20">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Beranda</a></li>
            <li><a>Events</a></li>
            <li><a>Detail</a></li>
            <li><a>CILVEKI BANK</a></li>
          </ul>
        </div>
        <div className="event__detail_content mt-5">
          <Image src={eventSponsorDetailImage} width={1280} className='rounded max-h-[480px] object-cover' />
          <h1 className='event_detail_title mt-10 text-3xl text-gray-900 font-bold'>CILVEKI BANK</h1>
          <div className="event__detai_description mt-5">
            <p className='text-base font-semibold'>Deskripsi :</p>
            <p className='mt-2.5 w-9/12'>DBS Indonesia adalah bagian dari DBS Group, salah satu grup perbankan terbesar di Asia yang berkantor pusat di Singapura. DBS Indonesia berkomitmen untuk menyediakan layanan perbankan terbaik dan inovatif, dengan fokus pada integritas, keunggulan layanan, dan pertumbuhan berkelanjutan.</p>
          </div>
          <div className="event__detai_support mt-5">
            <p className='text-base font-semibold'>Dukungan :</p>
            <p className='mt-2.5 w-9/12'>Finansial: Pendanaan utama atau parsial untuk acara. Promosi dan Pemasaran: Eksposur media dan publikasi bersama. Fasilitas dan Infrastruktur: Penyediaan tempat, peralatan, dan teknologi. Program Pendidikan: Workshop, seminar, dan beasiswa. Dukungan Logistik: Transportasi dan akomodasi. Kegiatan CSR: Program CSR dan kolaborasi komunitas. Layanan Khusus: Sesi networking dan stand khusus di acara.</p>
          </div>

          <div className="event__detail_terms  mt-5">
            <p className='text-base font-semibold'>Ketentuan Pengajuan Kerjasama :</p>
            <p className='mt-2.5 w-9/12'>
              Proposal Terperinci: Mengajukan proposal yang mencakup tujuan acara, target audiens, anggaran, rencana promosi, dan manfaat bagi DBS Indonesia.
              Timeline Pengajuan: Mengajukan proposal minimal 3 bulan sebelum tanggal pelaksanaan acara.
              Rencana Evaluasi: Menyertakan rencana evaluasi dan laporan pasca-acara yang menjelaskan pencapaian dan dampak dari dukungan yang diberikan.</p>
          </div>
        </div>
        <div className="event_detail_chat flex flex-col sm:flex-row sm:gap-x-4 gap-y-2 my-10">
          <div className="event__detail_chat_owner flex items-center">
            <ChatButton type={'0'} text={'Chat sebagai Event Owner'} />
          </div>
          <div className="event__detail_chat_sponsor">
            <ChatButton type={'1'} text={'Chat sebagai Event Organizer'} />
          </div>
        </div>
      </div>
    </div >
  )
}
