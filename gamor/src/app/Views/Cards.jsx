import React from 'react'
import Image from 'next/image'
import fornite from '../Images/fornite.webp'
import Table from "../Components/table"

function Cards() {
  return (
    <div className=' bg-gray-900 justify-center flex flex-row pb-10 pt-10 '>
     
      <div className='bg-gray-800 size-1/4 p-14 h-auto w-auto rounded-xl space-y-3'>
        <h1 className='text-white text-4xl font-mono tracking-wide'>start</h1>
        <h1 className='text-purple-500 text-4xl font-mono tracking-wide'>streaming</h1>
        <h1 className='text-white text-4xl font-mono tracking-wide'>game</h1>
        <h1 className='text-white text-4xl font-mono tracking-wide'>diferently</h1>
        <p className='text-gray-600 pt-4'>gamor now has <strong className='text-white underline decoration-orange-500'>stream party</strong>  platform</p>
        <div className=" lg:flex lg:flex-1 lg:justify-center pt-6">
        <a href="#" className="text-sm font-semibold text-gray-100 rounded-full p-3 bg-slate-700 -mt-2 shadow-lg">
            Create acount
            
        </a>
          <a href="#" className="text-sm font-normal leading-6 text-gray-300 ml-6 ">
            Sign in
          </a>
        </div>
      </div>

      <div className='bg-orange-500  size-1/4  p-10 h-auto w-auto rounded-xl space-y-2 text-center'>
        <h1 className='font-semibold text-white text-2xl'>Fornite New Season</h1>
        <h1 className='text-orange-700 text-lg'>Join live stream</h1>
        <div className=" lg:flex lg:flex-1 lg:justify-center pt-6">
        <div href="#" className="text-sm font-semibold text-gray-100 rounded-full p-2 w-32 bg-white -mt-6 shadow-lg">
           <p className=' font-extrabold text-orange-500 text-lg'>11 : 45</p> 
        </div>
        </div>
        <div className=''>
        <Image src={fornite} width={240}/>
        </div>
      </div>
      
      <div className='bg-gray-800 size-1/4 p-10 h-auto w-auto rounded-xl space-y-2'>
        <p className='text-gray-200 text-xl font-bold ml-2'>
 <span className='text-gray-400'>01.</span> Choose Platform </p>
       <div className='bg-gray-900 rounded-full p-2'>
        <span className="isolate inline-flex rounded-md shadow-sm">
      <button
        type="button"
        className=" relative inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-gray-200 ring-gray-300 hover:bg-gray-600 focus:z-10"
      >
        <div className='mr-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
        </svg>
        </div>
        Party
      </button>
      <button
        type="button"
        className="relative inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-gray-200 ring-gray-300 hover:bg-gray-600 focus:z-10"
      >
        Matchs
      </button>
      <button
        type="button"
        className="relative inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-gray-200 ring-gray-300 hover:bg-gray-600 focus:z-10"
      >
        Streams
      </button>
    </span>
    </div>
    <div>
    <p className='text-gray-200 text-xl font-bold ml-2'>
 <span className='text-gray-400'>01.</span> Searching Game </p>
    </div>
       <Table/>
    </div>
    </div>
  )
}

export default Cards