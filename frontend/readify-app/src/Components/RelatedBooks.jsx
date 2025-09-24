import React, { useEffect, useState } from "react";
import Title from "./Title";
import { useSelector } from "react-redux";
import BookCard from "./BookCard";

const RelatedBooks = ({ category }) => {
  const allBooks = useSelector((store) => store.bookData.allBooks);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (allBooks.length > 0) {
      let booksCopy = allBooks.slice();

      booksCopy = booksCopy.filter((book) => book.category === category);
      setRelated(booksCopy.slice(0, 5));
    }
  }, [allBooks, category]);

  return (
    <div className="my-15">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"BOOKS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {related.map((book) => (
          <BookCard
            key={book.id}
            image={book.image}
            name={book.name}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedBooks;
