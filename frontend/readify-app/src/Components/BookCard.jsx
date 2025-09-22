import React from 'react'

const BookCard = ({image,name,price}) => {
  return (
    <div className=' flex flex-col items-center max-w-56 p-3 hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg shadow-lg shadow-gray-400'>
      <div>
        <img className='w-full h-72 object-cover' src={image} alt="" />
      </div>
      <p className='text-xl text-blue-950 font-medium mt-3 text-center min-h-12'>{name}</p>
      <p className='text-base text-[#a2cea1] font-semibold '>${price}</p>
    </div>
  )
}

export default BookCard
