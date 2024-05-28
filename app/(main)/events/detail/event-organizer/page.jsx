import React from 'react'
import Image from 'next/image'
import eventOrganizerDetailImage from '../../../../assets/img/event_detail_organizer_image_1.png'
import ChatButton from '@/components/buttons/chat-button'

export default function Detail() {
  return (
    <div className="flex flex-col w-100 min-h-screen justify-center items-center bg-white">
      <div className="event__detail flex flex-col w-11/12 mt-20">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Beranda</a></li>
            <li><a>Events</a></li>
            <li><a>Detail</a></li>
            <li><a>PT. WAHANA SOUNDSYSTEM</a></li>
          </ul>
        </div>
        <div className="event__detail_content mt-5">
          <Image src={eventOrganizerDetailImage} width={1280} className='rounded max-h-[480px] object-cover' />
          <h1 className='event_detail_title mt-10 text-3xl text-gray-900 font-bold'>PT. WAHANA SOUNDSYSTEM</h1>
          <div className="event__detai_description mt-5">
            <p className='text-base font-semibold'>Deskripsi :</p>
            <p className='mt-2.5 w-9/12'>PT Wahana Soundsystem adalah perusahaan event organizer yang berdedikasi untuk menyediakan solusi terbaik dalam penyelenggaraan acara dengan fokus pada kualitas suara dan teknologi. Dengan pengalaman yang luas dan tim profesional, kami bertekad untuk menghadirkan pengalaman acara yang tak terlupakan bagi klien kami. </p>
          </div>
          <div className="event__detai_support mt-5">
            <p className='text-base font-semibold'>Dukungan :</p>
            <p className='mt-2.5 w-9/12'>Penyewaan Peralatan Audio-Visual: Menyediakan peralatan suara, pencahayaan, dan proyeksi berkualitas tinggi untuk berbagai jenis acara. Desain dan Produksi Acara: Mengelola semua aspek produksi acara, mulai dari konsep desain hingga pelaksanaan teknis.Manajemen Acara: Menyelenggarakan acara mulai dari perencanaan hingga pelaksanaan, termasuk koordinasi tim, jadwal, dan logistik.
              Teknisi Profesional: Menyediakan teknisi ahli yang terlatih untuk mengoperasikan peralatan dan memastikan kelancaran acara.
              Konsultasi Teknis: Memberikan saran dan rekomendasi tentang solusi teknis terbaik sesuai dengan kebutuhan acara.</p>
          </div>

          <div className="event__detail_terms  mt-5">
            <p className='text-base font-semibold'>Ketentuan Pengajuan Kerjasama :</p>
            <p className='mt-2.5 w-9/12'>Proposal yang Komprehensif: Mengajukan proposal yang mencakup detail tentang jenis acara, kebutuhan teknis, dan harapan klien. Pemesanan Tepat Waktu: Mengajukan permintaan kerjasama minimal 1 bulan sebelum tanggal acara untuk memastikan ketersediaan layanan. Konsultasi Pratinjau: Menyediakan sesi konsultasi pratinjau untuk menentukan kebutuhan teknis dan anggaran acara. Pembayaran dan Jaminan: Melakukan pembayaran uang muka sebesar 50% dari total biaya layanan saat kesepakatan kerjasama dan menyerahkan jaminan penuh sebelum pelaksanaan acara.</p>
          </div>
        </div>
        <div className="event_detail_chat flex flex-col sm:flex-row sm:gap-x-4 gap-y-2 my-10">
          <div className="event__detail_chat_owner flex items-center">
            <ChatButton type={'0'} text={'Chat sebagai Event Owner'} />
          </div>
          <div className="event__detail_chat_sponsor">
            <ChatButton type={'1'} text={'Chat sebagai Sponsor'} />
          </div>

        </div>
      </div>
    </div>
  )
}
