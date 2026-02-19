// src/redux/product/ProductTypes.ts

// Product Entity (from API)
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

// API Request Status
export type RequestStatus = "idle" | "loading" | "succeeded" | "failed";

// Redux Slice State
export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  status: RequestStatus;
  error: string | null;
}