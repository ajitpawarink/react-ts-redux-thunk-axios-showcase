// src/services/productService.ts

import axiosInstance from "./axiosInstance";
import type { Product } from "../redux/product/productTypes";

// GET ALL PRODUCTS
export const fetchProductsAPI = async (): Promise<Product[]> => {
  const response = await axiosInstance.get<Product[]>("/products");
  return response.data;
};

// GET PRODUCT BY ID
export const fetchProductByIdAPI = async (
  id: number
): Promise<Product> => {
  const response = await axiosInstance.get<Product>(`/products/${id}`);
  return response.data;
};

// CREATE PRODUCT
export const createProductAPI = async (
  product: Omit<Product, "id">
): Promise<Product> => {
  const response = await axiosInstance.post<Product>(
    "/products",
    product
  );
  return response.data;
};

// UPDATE PRODUCT
export const updateProductAPI = async (
  id: number,
  product: Partial<Product>
): Promise<Product> => {
  const response = await axiosInstance.put<Product>(
    `/products/${id}`,
    product
  );
  return response.data;
};

// DELETE PRODUCT
export const deleteProductAPI = async (
  id: number
): Promise<void> => {
  await axiosInstance.delete(`/products/${id}`);
};
