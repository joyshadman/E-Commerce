import React, { useState, useEffect } from "react";
import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Card = ({ product }) => {
  const [loaded, setLoaded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate();

  // Load wishlist state
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    const exists = storedWishlist.find((item) => item.id === product.id);
    setIsWishlisted(!!exists);
  }, [product.id]);

  const handleImageClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const alreadyAdded = storedCart.find((item) => item.id === product.id);
    if (alreadyAdded) {
      toast.error("Already added to cart");
      return;
    }

    const updatedCart = [...storedCart, { ...product, quantity: 1 }];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    toast.success("Added to cart");

    window.dispatchEvent(new Event("cartUpdated"));
  };

  // Add / Remove Wishlist
  const handleWishlistToggle = () => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

    if (isWishlisted) {
      const updated = storedWishlist.filter((item) => item.id !== product.id);
      localStorage.setItem("wishlistItems", JSON.stringify(updated));
      setIsWishlisted(false);
      toast.error("Removed from Wishlist");
    } else {
      const updated = [...storedWishlist, product];
      localStorage.setItem("wishlistItems", JSON.stringify(updated));
      setIsWishlisted(true);
      toast.success("Added to Wishlist ❤️");
    }

    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  const SkeletonCard = () => (
    <div className="p-4 rounded-lg bg-white animate-pulse w-full max-w-[300px]">
      <div className="w-full h-[220px] bg-gray-300 mb-2 rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="flex gap-2 mt-1">
        <div className="h-3 bg-gray-300 rounded w-10"></div>
        <div className="h-3 bg-gray-300 rounded w-10"></div>
      </div>
    </div>
  );

  return !product ? (
    <SkeletonCard />
  ) : (
    <div className="p-4 rounded-lg relative bg-white">
      <div className="relative group w-full h-[220px] bg-[#F5F5F5] mb-2 overflow-hidden flex items-center justify-center cursor-pointer">
        {product.discount && (
          <div className="absolute top-3 left-4 bg-red-500 text-white px-2 py-1 text-xs rounded">
            -{product.discount}%
          </div>
        )}

        {!loaded && <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>}

        <img
          src={product.image}
          alt={product.name}
          onLoad={() => setLoaded(true)}
          onClick={handleImageClick}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 p-9 ${
            loaded ? "block" : "hidden"
          }`}
        />

        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer ease-linear">
          <h1
            onClick={handleAddToCart}
            className="text-[14px] font-poppins text-white font-medium text-center p-2"
          >
            Add To Cart
          </h1>
        </div>

        <div className="absolute top-3 right-4 flex flex-col gap-2">

          {/* WISHLIST BUTTON */}
          <div
            onClick={handleWishlistToggle}
            className="bg-white h-[34px] w-[34px] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer"
          >
            {isWishlisted ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
          </div>

          <Link
            to={`/product/${product.id}`}
            className="bg-white h-[34px] w-[34px] rounded-full flex items-center justify-center shadow hover:scale-110 transition-transform cursor-pointer"
          >
            <AiOutlineEye className="text-gray-500" />
          </Link>
        </div>
      </div>

      <h3 className="text-[15px] font-poppins font-[500] text-[#000000] leading-[20px] truncate">
        {product.name}
      </h3>

      <div className="flex items-center gap-2 my-1 mb-2">
        <span className="text-[#db4444] text-[16px] font-semibold">
          ${product.price}
        </span>
        {product.oldPrice && (
          <span className="text-gray-500 text-[14px] line-through">
            ${product.oldPrice}
          </span>
        )}
      </div>

      <div className="flex items-center gap-1 text-[12px]">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-[12px] ${
              i < Math.round(product.reviews || 0)
                ? "text-[#FFAD33]"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="text-xs text-gray-500 ml-2">
          ({product.reviews})
        </span>
      </div>
    </div>
  );
};

export default Card;
