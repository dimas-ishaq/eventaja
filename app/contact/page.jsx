import React from 'react'
import Image from 'next/image'
import contactHeroImage from '../../assets/img/contact_image_hero.png'
import contactFormImage from '../../assets/img/contact_form_image.png'
import SecondaryButton from '@/components/buttons/secondary-button'

export default function Contact() {
  return (
    <div className='flex flex-col w-full justify-center items-center bg-white'>
      <div className="contact flex flex-col md:w-11/12 px-5 md:px-0 ">
        <Image src={contactHeroImage} width={1280} height={420} alt='Contact Hero Image' className='rounded-md object-cover' />
        <div className="contact__form mt-16 mb-20 flex justify-center items-center lg:justify-end gap-x-10 ">
          <div className="contact__form_input flex flex-col">
            <h2 className="contact__title text-3xl font-bold">Hubungi Kami</h2>
            <h4 className='font-medium text-lg mt-2.5'>Layanan Pelanggan :</h4>
            <p className='text-sm text-gray-600 mt-2.5 max-w-[630px]'>Di manapun Anda berada, kami siap untuk membantu Anda. Hubungi kami melalui call center kami di bawah ini ;
              <br />Whatsapp: (+62)811-193-80888 (hanya melayani chat)
              <br />Selain itu, Anda dapat mengirimkan email ke customercare@eventaja.com.
              Anda juga dapat menyampaikan masukan atau pertanyaan melalui formulir daring kami.
            </p>
            <h3 className='mt-10 font-bold text-2xl'>Tetap Terhubung Bersama Kami</h3>
            <p className='mt-2.5 text-base text-gray-600'>Anda dapat mengirimkan umpan balik atau pertanyaan Anda dengan mengisi formulir berikut ;</p>
            <form action="" className='mt-16 md:w-11/12 px-5 md:px-0 flex flex-col justify-center'>
              <div className="flex flex-col">
                <label htmlFor="nama" className='font-medium'>Nama</label>
                <input type="text" name='nama' placeholder='Masukkan nama lengkap anda' className='border-1 bg-gray-100 rounded-md px-3 py-2.5 mt-2 outline-1 outline-gray-500' />
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="email" className='font-medium'>Email</label>
                <input type="email" name='email' placeholder='Masukkan alamat email anda' className='border-1 bg-gray-100 rounded-md px-3 py-2.5 mt-2 outline-1 outline-gray-500' />
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="layanan" className='font-medium'>Layanan </label>
                <select name="layanan" id="layanan" className='border-1 bg-gray-100 text-gray-600 rounded-md px-3 py-3 mt-2 outline-1 outline-gray-500'>
                  <option value="#" disabled>Silahkan pilih jenis layanan</option>
                  <option value="Event" >Event</option>
                  <option value="Event_Organizer" >Event Organizer</option>
                  <option value="Sponsor" >Sponsor</option>
                </select>
              </div>
              <div className="flex flex-col mt-5">
                <label htmlFor="pesan" className='font-medium'>Pesan</label>
                <textarea name="pesan" id="pesan" cols="30" rows="8" className='p-2.5 mt-2 border-1 bg-gray-100 rounded-md outline-1 outline-gray-500'></textarea>
              </div>
              <div className="contact__form_submit mt-10 flex flex-col">
                <SecondaryButton type='submit' text={'Kirim'} />
              </div>
            </form>
          </div>
          <div className="contact__form_image hidden lg:block">
            <Image src={contactFormImage} alt='Contact Form Image' className='max-h-[976px] max-w-[405px] object-cover rounded-md' />
          </div>

        </div>
      </div>

    </div>
  )
}
