// src/components/pages/AddProductPage.tsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { createProduct } from "../../redux/product/productThunk";
import ProductForm from "../organisms/ProductForm";

const AddProductPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { status } = useSelector((state: RootState) => state.product);

  const handleSubmit = async (data: {
    title: string;
    description: string;
    price: number;
  }) => {
    await dispatch(createProduct(data));
  };

  return (
    <div>
      <h2>Add Product</h2>

      <ProductForm
        onSubmit={handleSubmit}
        loading={status === "loading"}
      />
    </div>
  );
};

export default AddProductPage;
