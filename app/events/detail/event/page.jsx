import React from 'react'
import Image from 'next/image'
import eventDetailImage from '../../../../assets/img/event_detail_image_1.png'

export default function Detail() {
  return (
    <div className="flex flex-col w-100 min-h-screen justify-center items-center bg-white">
      <div className="event__detail flex flex-col w-11/12 mt-20">
        <div className="text-sm breadcrumbs">
          <ul>
            <li><a>Beranda</a></li>
            <li><a>Event</a></li>
            <li><a>Detail</a></li>
            <li><a>Expo Campus 2024</a></li>
          </ul>
        </div>
        <div className="event__detail_content mt-5">
          <Image src={eventDetailImage} width={1280} className='rounded' />
          <h1 className='event_detail_title mt-10 text-3xl text-gray-900 font-bold'>Expo Campus 2024</h1>
          <p className='event__detail_date mt-3'>Tanggal: 22 - 27 Juni 2024</p>
          <p className='event__detail_capacity mt-3'>Kapasistas: 1000 - 3000 Orang</p>
          <p className='event__detail_location mt-3'>Lokasi: Kampus A Brawijaya</p>
          <div className="event__detai_description mt-5">
            <p className='text-base font-semibold'>Deskripsi :</p>
            <p className='mt-2.5 w-9/12'>Jangan lewatkan acara terbesar tahun ini, Expo Campus 2024, yang akan diadakan di Kampus A Brawijaya dari tanggal 22 hingga 27 Juni 2024. Acara ini merupakan kesempatan emas bagi para siswa, mahasiswa, dan profesional muda untuk menjelajahi berbagai peluang pendidikan dan karir. </p>
          </div>
          <div className="event__detai_needs mt-5">
            <p className='text-base font-semibold'>Kebutuhan :</p>
            <p className='mt-2.5 w-9/12'>Venue, tenda dan booth, kursi dan meja, panggung, sound system, penerangan, dekorasi, fasilitas kebersihan, area parkir, proyektor dan layar, komputer dan laptop, koneksi internet, alat tulis, panitia penyelenggara, volunteer, petugas keamanan, tim IT, kampanye media sosial, poster dan brosur, website acara, press release, platform registrasi online, lencana dan tanda pengenal, goodie bag, tempat istirahat, katering, jadwal seminar dan workshop, hiburan live music, lomba dan kompetisi, photobooth, perizinan, asuransi acara, dan dokumentasi dengan fotografer dan videografer.</p>
          </div>

          <div className="event__detail_budget  mt-5">
            <p className='text-base font-semibold'>Budget :</p>
            <p> Rp. 100.000.000,00</p>
          </div>
        </div>
        <div className="event_detail_chat grid grid-cols-2">
          <div className="event__detail_chat_organizer">
            <p>Chat sebagai Event Organizer</p>
          </div>
          <div className="event__detail_chat_sponsor">
            <p>Chat sebagai Sponsor</p>
          </div>

        </div>
      </div>
    </div>
  )
}
