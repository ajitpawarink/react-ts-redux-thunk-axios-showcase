// src/components/pages/ListProductPage.tsx

import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import ProductTable from "../organisms/ProductTable";

const ListProductPage: React.FC = () => {
  const { products, status, error } = useSelector(
    (state: RootState) => state.product
  );

  if (status === "loading") {
    return <div>Loading products...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Product List</h1>
      <ProductTable products={products} />
    </div>
  );
};

export default ListProductPage;
