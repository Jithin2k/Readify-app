import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Title from './Title'
import BookCard from './BookCard'
import { Link } from 'react-router-dom'

const BestSeller = () => {
    const books = useSelector((store)  => store.bookData.allBooks)
    const bestSeller = books.filter((book) => book.bestseller === true).slice(0,10)

  return (
    <div className='my-10'>
      <div className='text-center py-6 text-3xl'>
        <Title text1={"BEST"} text2={"SELLER"}/>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6'>
        {
            bestSeller.map((book,index) =>(
              <Link to ={`/book/${book.id}`}>
                <BookCard key={book.id} name={book.name} image={book.image} price={book.price}/></Link>
            ))
        }
      </div>
    </div>
  )
}

export default BestSeller
