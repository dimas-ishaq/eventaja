import React from 'react'

export default function Container({className, children}) {
  return (
    <div className={`w-full lg:w-[90%] md:w-[95%] ${className}`}>
        {children}
    </div>
  )
}
