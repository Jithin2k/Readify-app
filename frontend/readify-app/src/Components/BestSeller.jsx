import React from 'react'
import { useSelector } from 'react-redux'

const BestSeller = () => {
    const books = useSelector((store)  => store.bookData.allBooks)
    const bestSeller = books.filter((book) => book.bestSeller === true);
  return (
    <div>
      
    </div>
  )
}

export default BestSeller
