import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Productivity");
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async(e)=>{
     e.preventDefault();
     try {
      const formData = new FormData();
      formData.append("name",name);
      formData.append("description",description);
      formData.append("price",price);
      formData.append("author",author);
      formData.append("category",category);
      formData.append("bestseller",bestseller);
      image && formData.append("image",image); 

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}});
      
      if(response.data.success){
        toast.success(response.data.message);
        setName("")
        setAuthor("");
        setDescription("");
        setCategory("Productivity");
        setPrice("");
        setImage(false);
      } else{
        toast.error(response.data.message)
      }

     } catch (error) {
      console.log(error);
      toast.error(error.message)
      
     }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div>
          <label htmlFor="image">
            <img
              className="w-30"
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt=""
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Book Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type Here"
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Book Author</p>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type Here"
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Book Description</p>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write Here"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:gap-8">
        <div>
          <p className="mb-2">Book Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full px-3 py-2"
          >
            <option value="Productivity">Productivity</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Finance">Finance</option>
            <option value="Fiction">Fiction</option>
            <option value="Romance">Romance</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Book Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="24"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>
      <button type="submit" className="w-28 py-3 mt-4 bg-[#197351] text-white">
        ADD
      </button>
    </form>
  );
};

export default Add;
