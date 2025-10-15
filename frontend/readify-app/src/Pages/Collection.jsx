import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import Title from "../Components/Title";
import { useSelector } from 'react-redux'
import BookCard from "../Components/BookCard"
import useBookFilter from "../Hooks/useBookFilter.js";
import useSort from "../Hooks/useSort.js"
import SearchBar from "../Components/SearchBar.jsx";
import { Link } from "react-router-dom";

const Collection = () => {

  const allBooks = useSelector((store) => store.bookData.allBooks);
  const showSearchBar = useSelector((store) => store.search.showSearchBar);
  const searchTerm = useSelector((store) => store.search.searchTerm);

  const [showFilter,setShowFilter] = useState(false);

  const {toggleGenre,filteredBooks} = useBookFilter(allBooks);

  const {setSortBy,sortedList} = useSort(filteredBooks);

  const searchResults = sortedList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
<>{showSearchBar && <SearchBar/>}
      <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Left Section */}
      <div className="min-w-60">
        <div onClick={()=>setShowFilter(!showFilter)} className="flex gap-2 items-center">
          <p>FILTERS</p>
          <p className="sm:hidden">
            <IoMdArrowDropdown size={30} />
          </p>
        </div>
        <div className={`border py-3 pl-6 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          <p className="text-sm mb-3 font-medium">GENRES</p>
          <div className="flex flex-col gap-2">
            < p className="text-sm">
              <input value={"Productivity"} onChange={toggleGenre} type="checkbox" className="w-5" />
              Productivity
            </p>
            <p className="text-sm">
              <input value={"Self-Help"} onChange={toggleGenre} type="checkbox" className="w-5" />
              Self Help
            </p>
            <p className="text-sm">
              <input value={"Finance"} onChange={toggleGenre} type="checkbox" className="w-5" />
              Finance
            </p>
            <p className="text-sm">
              <input value={"Fiction"} onChange={toggleGenre} type="checkbox" className="w-5" />
              Fiction
            </p>
            <p className="text-sm">
              <input value={"Romance"} onChange={toggleGenre} type="checkbox" className="w-5" />
              Romance
            </p>
            <p className="text-sm">
              <input value={"Fantasy"} onChange={toggleGenre} type="checkbox" className="w-5" />
              Fantasy
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4 text-2xl my-4">
          <Title text1={"ALL"} text2={"BOOKS"} />
          <div>
            <select onChange={(e)=>setSortBy(e.target.value)} className="border px-4 py-3 text-sm">
              <option value="relevence">Sort By : Relevence</option>
              <option value="low-high">Sort By : Low to High</option>
              <option value="high-low">Sort By : High to Low</option>
            </select>
          </div>
        </div>
        {/* All Books */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-6">
          {
            searchResults.map((book)=>(
              <Link to ={`/book/${book._id}`}>
              <BookCard key={book._id} image={book.image} name={book.name} price={book.price}/>
            
              </Link>
              
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Collection;
