import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedBooks from "../Components/RelatedBooks";

const Product = () => {
  const allBooks = useSelector((store) => store.bookData.allBooks);
  const { bookId } = useParams();

  const [currentBook, setCurrentBook] = useState(null);

  const fetchBook = () => {
    let matchedBook = allBooks.find((book) => book.id == bookId);
    console.log(matchedBook);
    if (matchedBook) {
      setCurrentBook(matchedBook);
    }
  };
  useEffect(() => {
    fetchBook();
  }, [allBooks, bookId]);
  return (
    <div className="my-5">
      {
        currentBook ? 
        <div className="flex flex-col sm:flex-row gap-10 items-center">
        {/* Left Side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center ">
          <img className="w-full sm:max-w-96 px-4 py-3" src={currentBook.image} alt="" />
        </div>
        {/* Right Side */}
        <div className="w-full sm:w-1/2 px-4">
          <p className="text-sm sm:text-base text-[#1b5e20] font-medium">{currentBook.author}</p>
          <p className="text-xs sm:text-sm text-gray-400 p-2">{currentBook.category}</p>
          <div className="flex flex-col sm:mb-3">
            <h2 className="text-3xl sm:text-5xl font-medium text-[#003c36] py-4 ">{currentBook.name}</h2>
            <h4 className="text-xl sm:text-2xl md:text-3xl text-green-600 font-medium py-2">${currentBook.price}</h4>
          </div>
          <p className="text-xs sm:text-sm font-medium text-green-950 w-full sm:w-3/4">{currentBook.description}</p>
            <button className="px-4 py-2 text-white bg-[#003c36] text-sm sm:text-xl rounded-3xl my-4">ADD TO CART</button>
        </div>
      
      </div> : (
      <p className="text-center text-gray-500">Loading book details...</p>
    )
      }
     {
      currentBook && <RelatedBooks category={currentBook.category} />}
    </div>
  );
};

export default Product;
