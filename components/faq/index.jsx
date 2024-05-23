import React from 'react'


export default function Faq() {
  return (
    <div className="faq flex flex-col mt-20 justify-center items-center">
      <h2 className='font-bold lg:text-3xl text-xl sm:text-2xl text-center'>Pertanyaan Yang Sering Diajukan</h2>
      <p className='text-gray-500 max-w-[515px] text-center text-sm sm:text-base'>Temukan jawaban atas pertanyaan umum tentang layanan kami di sini.</p>
      <div className="faq__container grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 mt-10 w-full">
        <div className="faq__left">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-base font-medium text-gray-500">
                Apa itu Event Aja ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-base font-medium text-gray-500">
                Bagaimana cara mendaftar di platform Event Aja ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-base font-medium text-gray-500">
                Apa saja layanan yang ditawarkan oleh platform Event Aja ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-base font-medium text-gray-500">
                Bagaimana cara menghubungi tim support Event Aja ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
        <div className="faq__right">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-base font-medium text-gray-500">
                Apakah Event Aja tersedia untuk semua jenis event ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-base font-medium text-gray-500">
                Bagaimana Event Aja membantu dalam mencari sponsor ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-base font-medium text-gray-500">
                Apakah Event Aja menyediakan alat untuk mempromosikan event ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-base font-medium text-gray-500">
                Apakah ada biaya untuk menggunakan layanan Event Aja ?
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )

}
