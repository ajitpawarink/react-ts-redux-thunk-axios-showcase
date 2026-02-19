// src/app/store.ts

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/product/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    // Add other reducers here if needed
  },
  devTools: import.meta.env.MODE !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
