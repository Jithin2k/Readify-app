import React from 'react'

const NewsLetter = () => {
  return (
    <div className='my-10'>
      <div className='flex flex-col items-center text-center'>
        <h2 className='text-xl sm:text-2xl font-medium mb-2 text-[#1b5e20]'>Subscribe now & get 20% off</h2>
        <p className='text-sm sm:text-base mb-4 text-[#a2cea1]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className='flex items-center m-5 border w-full sm:w-1/2'>
            <input className='outline-none px-4 py-2 flex-1' type="text" placeholder='Enter Your Email'/>
            <button className='px-4 py-2 bg-[#1b5e20] text-white outline-none'>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
