import React from 'react'

const BookCard = ({image,name,price}) => {
  return (
    <div className=' flex flex-col items-center max-w-56 p-3 hover:scale-105 transition-all duration-300 cursor-pointer rounded-lg shadow-lg shadow-gray-400'>
      <div>
        <img className='w-full h-64 object-cover' src={image} alt="" />
      </div>
      <p className='text-base text-blue-950 font-medium my-2 text-center h-12 line-clamp-2'>{name}</p>
      <p className='text-xl text-green-800 font-semibold mt-2'>${price}</p>
    </div>
  )
}

export default BookCard
