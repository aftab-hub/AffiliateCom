import React from "react";
import { useParams } from "react-router-dom";
import {productDetails} from "../assets/assests.js";


 function ProductDetail() {
  const { id } = useParams();
  const product = productDetails[id];

  if (!product) return <p className="p-4">Product not found</p>;

  return (
    <section className=" p-4 container mx-auto">
     
      <div className="flex flex-wrap gap-2 mb-5 ">
     {product.image.map((img, index) => (
        <img key={index} src={img} alt={product.name} className="border border-gray-300 rounded w-[300px] max-w-md mb-4" />
      ))}
      </div>
      <h1 className="text-2xl font-bold mb-2">{ product.name}</h1>
      <button className="my-4 ">

      <a href={product.affiliateLink}
        className="bg-blue-600 text-white  px-15 py-2 rounded "
        target="_blank"
        rel="noopener noreferrer">
             Buy Now
      </a>
      </button>
      
    <div className="mb-5">

      <h4 className="font-semibold">{product.title} </h4>
     {product.description.map((element, index) => (
      

       <li className="m-2 px-2" key={index}>{element}</li>
     ))}
    </div>
  
     
    </section>
  );

}

export default ProductDetail;