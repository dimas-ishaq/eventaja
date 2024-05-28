import React from 'react'
import { SiWhatsapp } from "react-icons/si";
export default function ChatButton({ text, type, onClick }) {
  return (
    <button className={`flex gap-x-2 px-4 py-2.5 items-center ${type === '0' ? 'bg-violet-900 hover:bg-violet-800' : ' bg-fuchsia-800 hover:bg-fuchsia-700 '} rounded-md text-white`} type='button' onClick={onClick} >
      <span > <SiWhatsapp /></span >
      <p>{text}</p>
    </button >
  )

}
