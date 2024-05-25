import React from 'react'
import Container from '@/components/container'
import BlogCard from '../blogCard'
import Acordion from '../acordion/Acordion'

export default function Question() {
    return (
        <div className="flex justify-center pt-20">
            <Container className="flex gap-5 flex-col">
                <div className="w-full">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Pertanyaan yang Sering Diajukan
                    </h2>
                    <p className="text-xl text-slate-600 text-center">
                        Temukan jawaban atas pertanyaan umum tentang layanan kami di sini.
                    </p>
                </div>

                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3  justify-center">
                    <Acordion name="acordion-2" title="Apa itu event aja " text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis alias deleniti. Id, aut. Sequi expedita nihil necessitatibus cumque explicabo. " />
                    <Acordion name="acordion-2" title="Bagaimana cara mendaftar di Event aja? " text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis alias deleniti. Id, aut. Sequi expedita nihil necessitatibus cumque explicabo. "/>
                    <Acordion name="acordion-2" title="Apa saja layanan yang ditawarkan oleh Event aja? " text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis alias deleniti. Id, aut. Sequi expedita nihil necessitatibus cumque explicabo. "/>
                    <Acordion name="acordion-2" title="Bagaimana cara menghubungi tim support Event aja?" text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis alias deleniti. Id, aut. Sequi expedita nihil necessitatibus cumque explicabo. "/>
                    <Acordion name="acordion-2" title="Apakah Event aja tersedia untuk semua jenis event?" text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis alias deleniti. Id, aut. Sequi expedita nihil necessitatibus cumque explicabo. "/>
                    <Acordion name="acordion-2" title="Bagaimana Event aja membantu dalam mencari solusi sponsor?" text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis alias deleniti. Id, aut. Sequi expedita nihil necessitatibus cumque explicabo. "/>
                    <Acordion name="acordion-2" title="Apakah event aja menyediakan alat untuk promosi event?" text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis alias deleniti. Id, aut. Sequi expedita nihil necessitatibus cumque explicabo. "/>
                    <Acordion name="acordion-2" title="Apakah ada biaya untuk menggunakan Event aja?" text=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reiciendis alias deleniti. Id, aut. Sequi expedita nihil necessitatibus cumque explicabo. "/>

                </div>
            </Container>
        </div>
    )
}
