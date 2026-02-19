// src/redux/product/ProductThunk.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "./productTypes";
import {
  fetchProductsAPI,
  fetchProductByIdAPI,
} from "../../services/productService";

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
