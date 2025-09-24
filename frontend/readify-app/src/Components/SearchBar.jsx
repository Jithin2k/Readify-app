import React from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setShowSearchBar } from "../Store/searchSlice";

const SearchBar = () => {
  const searchTerm = useSelector((store) => store.search.searchTerm);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
  };

  const closeSearchBar = () => {
    dispatch(setShowSearchBar(false));
  };
  return (
    <div className="border-t border-[#003c36] bg-grat-100 text-center flex items-center justify-center">
      <div className="inline-flex items-center justify-center border border-[#a2cea1] rounded-full py-2 px-2 mx-3 my-5 w-3/4 sm:w-1/2">
        <input
          onChange={handleSearch}
          placeholder="Search"
          value={searchTerm}
          className="flex-1 outline-none text-sm bg-inherit pl-6"
          type="text"
        />
        <p>
          <IoIosSearch size={30} />
        </p>
      </div>
      <p onClick={closeSearchBar} className="inline cursor-pointer">
        <IoMdClose size={30} />
      </p>
    </div>
  );
};

export default SearchBar;
