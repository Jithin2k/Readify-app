import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Title from './Title'
import BookCard from './BookCard'

const BestSeller = () => {
    const books = useSelector((store)  => store.bookData.allBooks)
    const bestSeller = books.filter((book) => book.bestseller === true).slice(0,10)

     useEffect(() => {
    console.log(bestSeller);
  }, []);
  return (
    <div className='my-10'>
      <div className='text-center py-6 text-3xl'>
        <Title text1={"BEST"} text2={"SELLER"}/>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6'>
        {
            bestSeller.map((book,index) =>(
                <BookCard key={book._id} name={book.name} image={book.image} price={book.price}/>
            ))
        }
      </div>
    </div>
  )
}

export default BestSeller
