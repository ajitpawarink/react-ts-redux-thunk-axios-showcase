// src/redux/order/orderSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import type { OrderState } from "./orderTypes";
import {
  fetchOrders,
  fetchOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} from "./orderThunk";

const initialState: OrderState = {
  orders: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // FETCH ALL
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      // FETCH BY ID
      .addCase(fetchOrderById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.loading = false;
        const existing = state.orders.find(
          (order) => order.id === action.payload.id
        );
        if (!existing) {
          state.orders.push(action.payload);
        }
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      // CREATE
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orders.push(action.payload);
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      })

      // UPDATE
      .addCase(updateOrder.fulfilled, (state, action) => {
        const index = state.orders.findIndex(
          (order) => order.id === action.payload.id
        );
        if (index !== -1) {
          state.orders[index] = action.payload;
        }
      })

      // DELETE
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (order) => order.id !== action.payload
        );
      });
  },
});

export default orderSlice.reducer;
