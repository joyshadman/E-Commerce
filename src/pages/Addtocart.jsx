import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Btn from "../components/Btn";
import { IoClose } from "react-icons/io5"; // ❌ cross icon

const Addtocart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleRemove = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="mt-20 mb-20">
          <Breadcrumb />
        </div>

        <div className="flex flex-col items-center justify-center w-[1170px] mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-4 text-base font-poppins text-black font-normal leading-6 w-full border-b pb-3 mb-3 text-center">
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1>Subtotal</h1>
          </div>

          {/* Cart Items */}
          {cartItems.length === 0 ? (
            <p className="mt-10 text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 text-base font-poppins text-black font-normal w-full py-4 border-b items-center text-center"
              >
                {/* Product */}
                <div className="flex items-center gap-4 justify-start relative">
                  {/* ❌ Remove Button */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="absolute -left-[-10px] top-1/4 transform cursor-pointer -translate-y-1/2 bg-[#DB4444] hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md"
                  >
                    <IoClose size={24} />
                  </button>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <h1 className="text-left">{item.name}</h1>
                </div>

                {/* Price */}
                <h1>${item.price}</h1>

                {/* Quantity */}
                <h1>{item.quantity}</h1>

                {/* Subtotal */}
                <h1>${(item.price * item.quantity).toFixed(2)}</h1>
              </div>
            ))
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-10 w-full">
            <Btn
              bgColor="white"
              label="Return To Shop"
              textColor="black"
              borderColor="black"
              borderWidth="1px"
            />
            <Btn
              bgColor="white"
              label="Update Cart"
              textColor="black"
              borderColor="black"
              borderWidth="1px"
            />
          </div>

          {/* Cart Totals */}
          <div className="w-full flex justify-end mt-10">
            <div className="h-[354px] w-[470px] border border-black p-6 rounded-md">
              <h1 className="text-[20px] font-poppins font-[500] mb-5">
                Cart Totals
              </h1>

              <div className="flex justify-between border-b pb-2 mb-2">
                <h1>Subtotal</h1>
                <h1>${total.toFixed(2)}</h1>
              </div>

              <div className="flex justify-between border-b pb-2 mb-2">
                <h1>Shipping:</h1>
                <h1>Free</h1>
              </div>

              <div className="flex justify-between mb-4">
                <h1>Total</h1>
                <h1>${total.toFixed(2)}</h1>
              </div>

              <Btn label="Proceed to Checkout" marginTop="10px" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addtocart;
