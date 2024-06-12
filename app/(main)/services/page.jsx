import React from 'react'
import Image from 'next/image'
import serviceImage from '../../../assets/img/service_image.png'
import serviceEventImage from '../../../assets/img/service_event_image.png'
import serviceEventOrganizerImage from '../../../assets/img/service_event-organizer_image.png'
import serviceSponsorImage from '../../../assets/img/service_sponsor_image.png'
import Faq from '@/components/faq'
export default function Services() {
  return (
    <div className="bg-white flex flex-col w-full justify-center items-center ">
      <div className="relative">
        <Image src={serviceImage} className='w-full object-cover' />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-700/50 p-4 rounded-md w-full max-w-2xl flex flex-col items-center">
          <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white  max-w-[620px] text-center'>Menghubungkan Kreativitas dan Kesuksesan dalam Setiap Event</h1>
          <p className=' text-xs sm:text-sm md:text-base text-white text-center md:mt-2 max-w-[625px]'>Bergabunglah dengan platform kami untuk kolaborasi tanpa batas antara event owner, event organizer, dan sponsor.</p>
        </div>
      </div>
      <div className="flex flex-col w-11/12 border-1 border-black justify-center mt-14">
        <div className="flex flex-col w-full items-center">
          <h2 className='text-lg sm:text-2xl md:text-3xl text-center font-bold'>Layanan</h2>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 text-center mt-1'>Layanan terbaik untuk setiap acara, Maksimalkan kesuksesan acara anda dengan berbagai layanan yang kami tawarkan.</p>
        </div>
        <div className="flex flex-col w-full justify-center items-center mt-20 ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 shadow-md hover:shadow-xl rounded-md">
            <Image src={serviceEventImage} className='w-full  object-cover rounded-md' />
            <div className="flex flex-col justify-center  p-8 lg:p-0">
              <h3 className='text-base sm:text-xl md:text-2xl font-bold'>Event</h3>
              <h4 className='text-sm sm:text-lg md:text-xl text-gray-700 font-medium ]'>Solusi Terbaik untuk Setiap Event</h4>
              <p className='text-xs md:text-base text-gray-700 mt-2.5'>Kami memahami betapa pentingnya setiap detail dalam penyelenggaraan acara. Itulah mengapa kami menawarkan berbagai layanan untuk membantu Anda merencanakan, mengatur, dan melaksanakan acara yang sempurna. Dari acara bisnis, pameran, konser, hingga pernikahan, platform kami memudahkan Anda untuk menghubungkan dengan para profesional terbaik di industri ini. Dapatkan dukungan penuh dari konsep hingga eksekusi, memastikan setiap momen dalam acara Anda berjalan tanpa hambatan.</p>
              <button type="button" className=' bg-fuchsia-600 hover:bg-fuchsia-700 text-white lg:px-3 lg:py-2.5 p-2 text-sm md:text-base w-40 rounded-md mt-10'>Coba Sekarang </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 shadow-md hover:shadow-xl rounded-md mt-14">
            <Image src={serviceEventOrganizerImage} className='w-full  object-cover rounded-md' />
            <div className="flex flex-col justify-center p-8 lg:p-0">
              <h3 className='text-base sm:text-xl md:text-2xl font-bold'>Event Organizer</h3>
              <h4 className='text-sm sm:text-lg md:text-xl text-gray-700 font-medium ]'>Dukungan Penuh untuk Penyelenggara Acara</h4>
              <p className='text-xs md:text-base text-gray-700 mt-2.5'>Sebagai penyelenggara acara, Anda membutuhkan tim yang kompeten dan layanan yang handal. Kami menyediakan akses ke berbagai sumber daya yang Anda butuhkan untuk menjalankan acara dengan sukses. Platform kami memudahkan Anda untuk menemukan dan bekerja sama dengan vendor, pemasok, dan mitra lain yang dapat membantu mewujudkan visi Anda. Dengan sistem manajemen acara yang terintegrasi, Anda dapat mengelola setiap aspek acara Anda dengan efisiensi dan profesionalisme.</p>
              <button type="button" className=' bg-fuchsia-600 hover:bg-fuchsia-700 text-white lg:px-3 lg:py-2.5 p-2 text-sm md:text-base w-40 rounded-md mt-10'>Coba Sekarang </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 shadow-md hover:shadow-xl rounded-md mt-14">
            <Image src={serviceSponsorImage} className='w-full  object-cover rounded-md' />
            <div className="flex flex-col justify-center  p-8  lg:p-0">
              <h3 className='text-base sm:text-xl md:text-2xl font-bold'>Sponsor</h3>
              <h4 className='text-sm sm:text-lg md:text-xl text-gray-700 font-medium ]'>Maksimalkan Potensi Sponsorship Anda</h4>
              <p className='text-xs md:text-base text-gray-700 mt-2.5'>Sponsorship adalah kunci untuk menambah nilai dan dukungan finansial pada acara Anda. Kami membantu Anda menemukan sponsor yang sesuai dengan kebutuhan dan tujuan acara Anda. Platform kami memungkinkan sponsor untuk mengeksplorasi berbagai peluang kerjasama yang dapat meningkatkan eksposur merek mereka. Dengan alat analisis dan laporan yang komprehensif, sponsor dapat mengukur dampak dan ROI dari partisipasi mereka, memastikan kerjasama yang saling menguntungkan.</p>
              <button type="button" className=' bg-fuchsia-600 hover:bg-fuchsia-700 text-white lg:px-3 lg:py-2.5 p-2 text-sm md:text-base  w-40 rounded-md mt-10'>Coba Sekarang </button>
            </div>
          </div>

        </div>
        <div className="flex flex-col w-full justify-center items-center mt-20 ">
          <Faq />
        </div>
      </div>
    </div>
  )
}
