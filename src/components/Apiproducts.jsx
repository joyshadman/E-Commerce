import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const Apiproducts = () => {
  const [products, setProducts] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => {
        const mappedProducts = data.products.map((p) => ({
          id: p.id,
          name: p.title,
          image: p.thumbnail,
          discount: p.discountPercentage,
          price: p.price,
          oldPrice: p.price + 50,
          reviews: p.rating,
        }));
        setProducts(mappedProducts);
      });
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newPage = event.selected;
    const newOffset = newPage * itemsPerPage;
    setItemOffset(newOffset);
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto mt-10 mb-40 select-none">
      <div className="flex items-center gap-4 mb-6 justify-end pr-6">
        <h1 className="text-[16px] font-poppins font-[400] text-[#000000] leading-[24px]">
          Show
        </h1>
        <div className="w-[70px] h-[29px] rounded-sm border border-[#D9D9D9] flex items-center justify-center text-gray-500 cursor-default">
          {itemsPerPage}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {currentItems.length > 0 ? (
          currentItems.map((product) => (
            <Card key={product.id} product={product} />
          ))
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  justify-items-center md:w-200 sm:w-full lg:w-200 mx-auto" >
            {currentItems.length > 0 ? (
              currentItems.map((product) => <Card key={product.id} product={product} />)
            ) : (
              Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  role="status"
                  className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm">
                    <svg
                      className="w-10 h-10 text-gray-200"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 20"
                    >
                      <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                      <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full"></div>
                  <div className="flex items-center mt-4">
                    
                    <div>
                      <div className="h-2.5 bg-gray-200 rounded-full w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

        )}
      </div>

      {products.length > 0 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={products.length}
          onPageChange={handlePageClick}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default Apiproducts;

