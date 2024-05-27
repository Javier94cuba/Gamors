import React from 'react'
import Image from 'next/image'
import fornite from '../Images/fornite.webp'


function Cards({numbers,name}) {
  return (
    <div className='bg-gray-800 items-center justify-center size-1/6 pt-4 pb-6 pl-5 w-1/5 hover:bg-purple-400 hover:bg-none'>
    <div className='flex space-x-1'>
    <p className='text-red-400 -mt-1'>/</p>
    <p className='text-gray-400'>
        {numbers}
    </p>
    </div>
    <p className='text-white'>{name}</p>
    <p className='text-white ml-7  '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</p>
    </div>
  )
}

export default Cards