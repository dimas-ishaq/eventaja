import React from 'react'

export default function MainButton({ text, type = 'button', onClick }) {
  return (
    <button className=" px-5 py-3 rounded bg-violet-900 hover:bg-violet-800 text-white" type={type} onClick={onClick}>{text}</button>
  )
}
