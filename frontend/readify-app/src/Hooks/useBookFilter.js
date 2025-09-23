import { useEffect, useState } from "react";

const useBookFilter = (allBooks) => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [genre, setGenre] = useState([]);

  const toggleGenre = (e) => {
    const value = e.target.value;
    if (genre.includes(value)) {
      setGenre(genre.filter((book) => book !== value));
    } else {
      setGenre([...genre, value]);
    }
  };

  const applyFilter = () => {
    let booksCopy = allBooks;
    if (genre.length > 0) {
      booksCopy = booksCopy.filter((book) => genre.includes(book.category));
    }
    setFilteredBooks(booksCopy);
  };

  useEffect(() => {
    applyFilter()
  },[allBooks,genre]);

  return {
    filteredBooks,genre,toggleGenre
  }
};

export default useBookFilter;
