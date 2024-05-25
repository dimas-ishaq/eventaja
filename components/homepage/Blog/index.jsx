import React from 'react'
import Container from '@/components/container'
import BlogCard from '../blogCard'

export default function Blog() {
  return (
    <div className="flex justify-center pt-20">
        <Container className="flex gap-5 flex-col">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Blog
            </h2>
            <p className="text-xl text-slate-600 text-center">
            Mulai dari artikel inspiratif hingga panduan praktis, temukan informasi terbaru seputar event dan tips-tips berguna untuk sukses di industri event.
            </p>
          </div>

          <div className="w-full flex gap-3">
            <BlogCard
              image="/homepage/event-services.png"
              title="10 Tips Efektif dalam Manajemen Event yang Sukses"
              text="Dalam industri event, manajemen yang efektif adalah kunci keberhasilan. Dengan mempertimbangkan berbagai aspek mulai dari perencanaan hingga eksekusi, berikut adalah 10 tips yang dapat membantu Anda mengelola event Anda dengan sukses."
              createdAt="Admin | May 17, 2024"
              href="/"
            />
            <BlogCard
              image="/homepage/sponsor-services.png"
              title="10 Tips Efektif dalam Manajemen Event yang Sukses"
              text="Dalam industri event, manajemen yang efektif adalah kunci keberhasilan. Dengan mempertimbangkan berbagai aspek mulai dari perencanaan hingga eksekusi, berikut adalah 10 tips yang dapat membantu Anda mengelola event Anda dengan sukses."
              createdAt="Admin | May 17, 2024"
              href="/"
            />
            <BlogCard
              image="/homepage/sponsor-services.png"
              title="10 Tips Efektif dalam Manajemen Event yang Sukses"
              text="Dalam industri event, manajemen yang efektif adalah kunci keberhasilan. Dengan mempertimbangkan berbagai aspek mulai dari perencanaan hingga eksekusi, berikut adalah 10 tips yang dapat membantu Anda mengelola event Anda dengan sukses."
              createdAt="Admin | May 17, 2024"
              href="/"
            />
          </div>
        </Container>
      </div>
  )
}
