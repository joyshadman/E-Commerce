import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const Apiproducts = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    setItemOffset(0); // Reset pagination when category changes
    setCurrentPage(0);

    let url = "https://dummyjson.com/products?limit=50";

    if (category) {
      url = `https://dummyjson.com/products/category/${category}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const fetchedProducts = data.products || data; // category endpoint returns products in .products
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
      });
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

  return (
    <div className="w-[90%] max-w-[1200px] mx-auto mt-10 mb-40 select-none">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {currentItems.length > 0 ? (
          currentItems.map((product) => <Card key={product.id} product={product} />)
        ) : (
          <p className="text-gray-500 col-span-3 text-center">No products found.</p>
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
