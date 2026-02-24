// src/app/store.ts

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/product/productSlice";
import orderReducer from "../redux/order/orderSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    order: orderReducer,
    // Add other reducers here if needed
  },
  devTools: import.meta.env.MODE !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
