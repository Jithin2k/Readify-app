import React, { useEffect } from "react";
import Title from "./Title";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const LatestBooks = () => {
  const books = useSelector((store) => store.bookData.allBooks);
  const latestBooks = books.slice(0, 10);

 
  return (
    <div className="my-10">
      <div  className="text-center py-6 text-3xl" >
        <Title text1={"LATEST"} text2={"BOOKS"} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6">
        {latestBooks.map((book, index) => (
          <BookCard key={book._id} image={book.image} name={book.name} price={book.price} />
        ))}
      </div>
    </div>
  );
};

export default LatestBooks;
