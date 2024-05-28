import React from 'react'

export default function Acordion({title,text, name}) {
    return (
        <div className="collapse collapse-arrow bg-base-200 w-[100%]">
            <input type="radio" name={name}/>
            <div className="collapse-title text-xl font-medium">
                {title}
            </div>
            <div className="collapse-content">
                <p>{text}</p>
            </div>
        </div>
    )
}
