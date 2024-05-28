import MainButton from '@/components/buttons/main-buttons'
import Container from '@/components/container'
import React from 'react'

export default function Subscribetion() {
    return (
        <div className="flex justify-center pt-20 pb-20 bg-[#CF0A84]">
            <Container className="flex gap-5 flex-col">
                <div className="w-full">
                    <h2 className="text-3xl font-bold mb-6 text-center text-white">
                        Berlangganan Newsletter Kami
                    </h2>
                    <p className="text-xl text-white text-center">
                        Mulai dari update terbaru hingga tips eksklusif, dapatkan informasi terkini langsung di kotak masuk Anda. Daftarkan email Anda sekarang!
                    </p>
                </div>
                <div className='w-full flex items-center justify-center flex-col gap-10'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                <MainButton text='Berlanganan ' className="text-white w-[25%]" />
                </div>
            </Container>
        </div>
    )
}
