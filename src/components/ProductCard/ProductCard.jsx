import React from "react";
import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  return (
    <div className="border border-gray-400 rounded shadow p-4   ">
     <Link to={`/product/${product.id}`}> <img src={product.image} alt={product.name} className=" mx-auto w-[400px] cursor-pointer object-cover mb-4" /></Link>
      <h2 className="text-lg font-bold mb-2">{product.name.length > 10 ? product.name?.substr(0,40)+"...": product.name}</h2>

      <h2 className="text-lg font-bold mb-2">{product.price} <span className="text-[12px] line-through text-gray-500 mb-2">{product.mrp}</span></h2>
      <Link to={`${product.link}`} >
      <button className="bg-blue-600 mb-2 text-white cursor-pointer py-2 px-5 mx-[-5px] rounded-full border">Buy now</button>
      </Link>

      <p className="text-gray-700 mb-4">{product.description} </p>
      <Link to={`/product/${product.id}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
}