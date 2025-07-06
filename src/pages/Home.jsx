import React from "react";
import { ProductCard } from "../components/ProductCard/ProductCard";
import {product} from '../assets/assests.js';


function Home() {
  return (
    <section className="p-4 container mx-auto">
      <h1 className="text-center text-2xl font-bold mb-6">Top Picks</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-y-5 gap-5">
        {product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Home;