import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ category, product }) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  const crumbs = [];

  crumbs.push(
    <span key="home">
      <Link to="/" className="capitalize text-[#272727] hover:underline">
        home
      </Link>
    </span>
  );

  if (category) {
    crumbs.push(
      <span key="shop">
        <span className="mx-2 text-[#272727]">/</span>
        <Link to={`/shop/${category}`} className="capitalize text-[#272727] hover:underline">
          {category.replace(/-/g, " ")}
        </Link>
      </span>
    );
  }

  if (product) {
    crumbs.push(
      <span key="product">
        <span className="mx-2 text-[#272727]">/</span>
        <span className="capitalize text-[#272727] font-semibold">
          {product.title || product.name}
        </span>
      </span>
    );
  }


  if (!category && !product && paths.length > 0) {
    paths.forEach((path, index) => {
      const routeTo = "/" + paths.slice(0, index + 1).join("/");
      const isLast = index === paths.length - 1;

      crumbs.push(
        <span key={index}>
          <span className="mx-2 text-[#272727]">/</span>
          {!isLast ? (
            <Link to={routeTo} className="capitalize text-[#272727] hover:underline">
              {path.replace(/-/g, " ")}
            </Link>
          ) : (
            <span className="capitalize text-[#272727] font-semibold">
              {path.replace(/-/g, " ")}
            </span>
          )}
        </span>
      );
    });
  }

  return (
    <div className="text-[14px] font-poppins font-[400] leading-[21px] mb-[50px] mt-3 flex flex-wrap">
      {crumbs}
    </div>
  );
};

export default Breadcrumb;
