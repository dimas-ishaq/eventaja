'use client'

import React from 'react'
export default function Modal({ children, btnName }) {
  return (
    <>
      <button className="btn text-white bg-fuchsia-600 hover:bg-fuchsia-500" onClick={() => document.getElementById('form_event').showModal()}>{btnName}</button>
      <dialog id="form_event" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          {children}
        </div>
      </dialog>
    </>
  )
}

