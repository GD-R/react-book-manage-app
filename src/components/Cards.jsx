import React from "react";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  
    const { id, bookname, author, price, quantity, date, handelDelete } = props

    const navigate = useNavigate()

    

  return (
    <>
      <div className="border border-gray-300 rounded-sm bg-white my-3">
  <div className="p-3">
    <h5 className="text-lg font-medium">{bookname}</h5>
    <div className="mt-2">
     <p><b>Author:</b> {author}</p>
     <p><b>Quantity:</b> {quantity}</p>
     <p><b>Price:</b> {price} </p>
     <p><b>Date:</b> {new Date(date).toDateString()}</p>
    </div>
    <div className="mt-4 flex gap-4">
      <button
        onClick={() => navigate(`/edit/${id}`)}
        className="px-3 inline-block rounded-sm border border-solid cursor-pointer  text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600"
      >
        Edit
      </button>
      <button
        onClick={() => handelDelete(id)}
        className="px-3 inline-block rounded-sm border border-solid cursor-pointer  text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600"
      >
        Delete
      </button>
    </div>
  </div>
</div>
    </>
  );
};

export default Cards;
