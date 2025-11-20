import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cartslider from "../components/Cartslider";
import { FaStar, FaTruck, FaUndoAlt, FaRegHeart } from "react-icons/fa";
import Breadcrumb from "../components/Breadcrumb";
import SectionHeader from "../components/SectionHeader";


const Cart = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-lg text-gray-500 animate-pulse">
          Loading product details...
        </p>
      </div>
    );

  if (!product)
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-lg text-gray-500">Product not found.</p>
      </div>
    );

  return (
    <div>
      <Navbar />

      <div className="container mx-auto">
        <div className="mt-[80px] mb-[80px]">
          <Breadcrumb category={product.category} product={product} />

        </div>

        <div className="flex justify-between flex-wrap gap-10">
          <div className="w-[188px] h-[615px] overflow-y-auto">
            {product.images.slice(0, 4).map((img, i) => (
              <div
                key={i}
                className="h-[138px] w-[170px] bg-[#F5F5F5] mb-4 cursor-pointer flex items-center justify-center"
              >
                <img
                  src={img}
                  alt={`${product.title}-${i}`}
                  className="max-h-[120px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-[500px] h-[600px] bg-[#F5F5F5] flex items-center justify-center">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-[400px] object-contain"
            />
          </div>

          {/* Right Side Details */}
          <div className="w-[350px]">
            <h1 className="text-2xl font-bold">{product.title}</h1>

            {/* Rating */}
            <div className="flex gap-0.5 items-center mt-3">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <FaStar key={i} className="text-[#FFAD33] text-[18px]" />
              ))}
              <span className="text-sm text-gray-500 ml-2">
                ({product.rating} / 5)
                <span className="text-[#00FF66] ml-3">In Stock</span>
              </span>
            </div>

            <h1 className="text-[30px] mt-4">${product.price}</h1>
            <p className="text-[14px] text-gray-700 w-[303px] mt-6">
              {product.description}
            </p>

            <div className="w-[303px] bg-black h-[1px] mt-6"></div>

            {/* Sizes */}
            <div className="flex gap-3 mt-4 items-center">
              <h1 className="text-[20px] font-[400]">Size:</h1>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div
                  key={size}
                  className="border border-black h-7 w-7 flex justify-center items-center ease-in-out cursor-pointer duration-300 rounded-sm hover:bg-[#DB4444] hover:text-white "
                >
                  {size}
                </div>
              ))}
            </div>

            {/* Buy Now Section */}
            <div className="w-full mt-6 space-y-4">
              <div className="flex items-center justify-between ">
                <div className="flex border rounded-md overflow-hidden ">
                  <button
                    onClick={decrease}
                    className="px-3 py-2 border-r hover:bg-[#DB4444]  ease-in-out cursor-pointer duration-300  hover:text-white"
                  >
                    −
                  </button>
                  <span className="px-8 py-2">{quantity}</span>
                  <button
                    onClick={increase}
                    className="px-3 py-2 border-l hover:bg-[#DB4444] ease-in-out cursor-pointer duration-300  hover:text-white"
                  >
                    +
                  </button>
                </div>

                <button className="bg-[#DB4444] text-white  ease-in-out cursor-pointer duration-300  font-semibold px-8 py-2 rounded-md hover:bg-[#DB4444]">
                  Buy Now
                </button>

                <button className="p-2 border rounded-md  ease-in-out cursor-pointer duration-300  hover:bg-[#DB4444] hover:text-white">
                  <FaRegHeart size={18} />
                </button>
              </div>

              {/* Delivery Info */}
              <div className="border rounded-md divide-y">
                <div className="flex items-start gap-3 p-3">
                  <FaTruck className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Free Delivery</p>
                    <p className="text-xs text-gray-600">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3">
                  <FaUndoAlt className="w-5 h-5 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Return Delivery</p>
                    <p className="text-xs text-gray-600">
                      Free 30 Days Delivery Returns.{" "}
                      <span className="underline cursor-pointer">Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SectionHeader sectionTitle="" monthText="Related Items" />
        <Cartslider />
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
