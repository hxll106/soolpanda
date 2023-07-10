import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <>
      <div className="header_box">
        <h3 className="header">상품 관리</h3>
      </div>
      <div className="product_list_box">
        <ProductCard></ProductCard>
      </div>
    </>
  );
};

export default ProductList;
