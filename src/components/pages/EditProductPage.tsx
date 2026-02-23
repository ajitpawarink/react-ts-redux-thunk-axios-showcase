// src/components/pages/EditProductPage.tsx

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import {clearSelectedProduct} from "../../redux/product/productSlice";
import {
  fetchProductById,
  updateProduct,
} from "../../redux/product/productThunk";
import ProductForm from "../organisms/ProductForm";

const EditProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { selectedProduct, status, error } = useSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    if (id) dispatch(fetchProductById(Number(id)));

    return () => {
      dispatch(clearSelectedProduct());
    };
  }, [dispatch, id]);

  const handleSubmit = async (product: { title: string; description: string; price: number }) => {
    if (!id) return;
    console.log("Submitting update for product ID:", id, "with data:", product);
    await dispatch(updateProduct({ id: Number(id), product }));
  };

  if (status === "loading" && !selectedProduct) return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Edit Product</h2>
      {selectedProduct && (
        <ProductForm
          initialData={selectedProduct}
          onSubmit={handleSubmit}
          loading={status === "loading"}
        />
      )}
    </div>
  );
};

export default EditProductPage;
