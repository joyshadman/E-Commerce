import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const Apiproducts = ({ category, itemsPerPage }) => { 
  const [products, setProducts] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItemOffset(0);
    setCurrentPage(0);
    setLoading(true);

    let url = "https://dummyjson.com/products?limit=50";
    if (category) url = `https://dummyjson.com/products/category/${category}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = data.products || data;
        const mappedProducts = fetchedProducts.map((p) => ({
          id: p.id,
          name: p.title,
          image: p.thumbnail,
          discount: p.discountPercentage,
          price: p.price,
          oldPrice: p.price + 50,
          reviews: p.rating,
        }));
        setProducts(mappedProducts);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category]);

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

  // Skeleton Loader Card
  const SkeletonCard = () => (
    <div className="border rounded-lg p-4 animate-pulse w-full max-w-[350px]">
      <div className="bg-gray-300 h-56 w-full rounded-md mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto mt-10 mb-40 select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, i) => <SkeletonCard key={i} />)
          : currentItems.length > 0
          ? currentItems.map((product) => (
              <Card key={product.id} product={product} />
            ))
          : !loading && (
              <p className="text-gray-500 col-span-3 text-center">
                No products found.
              </p>
            )}
      </div>

      {!loading && products.length > 0 && (
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
