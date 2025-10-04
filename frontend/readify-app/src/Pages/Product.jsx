import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedBooks from "../Components/RelatedBooks";
import { addToCart } from "../Store/cartSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../Store/urlSlice";

const Product = () => {
  const allBooks = useSelector((store) => store.bookData.allBooks);
  const { bookId } = useParams();
  const dispatch = useDispatch();

  const [currentBook, setCurrentBook] = useState(null);

  const fetchBook = () => {
    let matchedBook = allBooks.find((book) => book._id === bookId);
    if (matchedBook) {
      setCurrentBook(matchedBook);
    }
  };

  const handleAddToCart = async () => {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token")

    if (!userId) {
      toast.error("Please Login First");
    }
    try {
      const response = await axios.post(backendUrl + "/api/cart/add", {
        userId,
        itemId: currentBook._id,
      },{headers :{ token : token}});

      if (response.data.success) {
        dispatch(
          addToCart({
            id: currentBook._id,
            name: currentBook.name,
            price: currentBook.price,
            image: currentBook.image,
          })
        );
          toast.success("Book Added To Cart");
      } else {
              toast.error(response.data.message || "Failed to add to cart");
      }
    } catch (error) {
        console.error(error);
    toast.error("Something went wrong while adding to cart");
    }
  };

  useEffect(() => {
    fetchBook();
  }, [allBooks, bookId]);

  return (
    <div className="my-5">
      {currentBook ? (
        <div className="flex flex-col sm:flex-row gap-10 items-center">
          {/* Left Side */}
          <div className="w-full sm:w-1/2 flex items-center justify-center ">
            <img
              className="w-full sm:max-w-96 px-4 py-3"
              src={currentBook.image}
              alt=""
            />
          </div>
          {/* Right Side */}
          <div className="w-full sm:w-1/2 px-4">
            <p className="text-sm sm:text-base text-[#1b5e20] font-medium">
              {currentBook.author}
            </p>
            <p className="text-xs sm:text-sm text-gray-400 p-2">
              {currentBook.category}
            </p>
            <div className="flex flex-col sm:mb-3">
              <h2 className="text-3xl sm:text-5xl font-medium text-[#003c36] py-4 ">
                {currentBook.name}
              </h2>
              <h4 className="text-xl sm:text-2xl md:text-3xl text-green-600 font-medium py-2">
                ${currentBook.price}
              </h4>
            </div>
            <p className="text-xs sm:text-sm font-medium text-green-950 w-full sm:w-3/4">
              {currentBook.description}
            </p>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 text-white bg-[#003c36] text-sm sm:text-xl rounded-3xl my-4 cursor-pointer"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading book details...</p>
      )}
      {currentBook && <RelatedBooks category={currentBook.category} />}
    </div>
  );
};

export default Product;
