// src/redux/product/ProductThunk.ts

import { createAsyncThunk } from "@reduxjs/toolkit";

import type { Product } from "./productTypes";


import {
  fetchProductsAPI,
  fetchProductByIdAPI,
  createProductAPI,
  updateProductAPI,
  deleteProductAPI

} from "../../services/productService";

interface UpdateProductPayload {
  id: number;
  product: Partial<Product>;
}

// FETCH ALL PRODUCTS
export const fetchProducts = createAsyncThunk<
  Product[], // Return type
  void, // Argument type
  { rejectValue: string }
>("product/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const data = await fetchProductsAPI();
    return data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch products"
    );
  }
});

// FETCH SINGLE PRODUCT (for Edit Page)
export const fetchProductById = createAsyncThunk<
  Product,
  number,
  { rejectValue: string }
>("product/fetchProductById", async (id, { rejectWithValue }) => {
  try {
    const data = await fetchProductByIdAPI(id);
    return data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch product"
    );
  }
});

// CREATE PRODUCT
export const createProduct = createAsyncThunk<
  Product,
  Omit<Product, "id">,
  { rejectValue: string }
>("product/createProduct", async (product, { rejectWithValue }) => {
  try {
    const data = await createProductAPI(product);
    return data;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to create product"
    );
  }
});

// Update Product
export const updateProduct = createAsyncThunk<
  Product,
  UpdateProductPayload
>(
  "product/updateProduct",
  async ({ id, product }, thunkAPI) => {
    try {
      console.log("Updating product with IDeeee:", id, "and data:", product);
      const updatedProduct = await updateProductAPI(id, product);
      return updatedProduct;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to update product"
      );
    }
  }
);

// DELETE PRODUCT
export const deleteProduct = createAsyncThunk<
  number, // return type: id of deleted product
  number, // argument: id to delete
  { rejectValue: string }
>("product/deleteProduct", async (id, thunkAPI) => {
  try {
    await deleteProductAPI(id);
    return id; // return deleted product id so slice can remove it
  } catch (error: any) {
    return thunkAPI.rejectWithValue(
      error.response?.data || "Failed to delete product"
    );
  }
});
