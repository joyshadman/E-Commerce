import React, { useEffect, useState } from "react";
import Card from "./Card";

const Apiproducts = () => {
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then(res => res.json())
      .then(data => {
        const mappedProducts = data.products.map(p => ({
          name: p.title,
          image: p.thumbnail,
          discount: p.discountPercentage,
          price: p.price,
          oldPrice: p.price + 50,
          reviews: p.rating
        }));
        setProducts(mappedProducts);
      })
      
  }, []);

  return (

    <div className="w-[90%] max-w-[1200px] mx-auto mt-10 mb-40">
      <div className="flex items-center gap-4 mb-6 justify-end pr-6">
        <h1 className="text-[16px] font-poppins font-[400] text-[#000000] leading-[24px]">
          Show
        </h1>
        <div className="w-[70px] h-[29px] rounded-sm border border-[#D9D9D9] flex items-center justify-center text-gray-500 cursor-pointer">
          6
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
};
export default Apiproducts;
