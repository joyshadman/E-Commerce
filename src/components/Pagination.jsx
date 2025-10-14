import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ itemsPerPage, totalItems, onPageChange, currentPage }) => {
  const pageCount =
    itemsPerPage && totalItems ? Math.ceil(totalItems / itemsPerPage) : 0;

  if (pageCount <= 1) return null;

  return (
    <div className="flex flex-wrap justify-start mt-10 relative z-50 select-none">
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onPageChange}
        forcePage={currentPage}
        pageRangeDisplayed={6}
        marginPagesDisplayed={1}
        breakLabel="..."
        previousLabel={null}
        nextLabel={null}
        containerClassName="flex flex-wrap gap-2"
        pageClassName="flex items-center justify-center w-15 h-8 border bg-black text-white cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
        activeClassName="bg-black text-white border-black scale-110"
        pageLinkClassName="w-full h-full flex items-center justify-center"
      />
    </div>
  );
};

export default Pagination;
