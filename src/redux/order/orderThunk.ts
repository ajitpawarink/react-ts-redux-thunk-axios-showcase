// src/redux/order/orderThunk.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Order } from "./orderTypes";
import {
  fetchOrdersAPI,
  fetchOrderByIdAPI,
  createOrderAPI,
  updateOrderAPI,
  deleteOrderAPI,
} from "../../services/orderService";

/**
 * Fetch All Orders
 */
export const fetchOrders = createAsyncThunk<
  Order[],
  void,
  { rejectValue: string }
>("orders/fetchAll", async (_, { rejectWithValue }) => {
  try {
    return await fetchOrdersAPI();
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch orders");
  }
});

/**
 * Fetch Single Order
 */
export const fetchOrderById = createAsyncThunk<
  Order,
  number,
  { rejectValue: string }
>("orders/fetchById", async (id, { rejectWithValue }) => {
  try {
    return await fetchOrderByIdAPI(id);
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to fetch order");
  }
});

/**
 * Create Order
 */
export const createOrder = createAsyncThunk<
  Order,
  Omit<Order, "id">,
  { rejectValue: string }
>("orders/create", async (order, { rejectWithValue }) => {
  try {
    return await createOrderAPI(order);
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to create order");
  }
});

/**
 * Update Order
 */
export const updateOrder = createAsyncThunk<
  Order,
  { id: number; order: Omit<Order, "id"> },
  { rejectValue: string }
>("orders/update", async ({ id, order }, { rejectWithValue }) => {
  try {
    return await updateOrderAPI(id, order);
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to update order");
  }
});

/**
 * Delete Order
 */
export const deleteOrder = createAsyncThunk<
  number,
  number,
  { rejectValue: string }
>("orders/delete", async (id, { rejectWithValue }) => {
  try {
    await deleteOrderAPI(id);
    return id;
  } catch (error: any) {
    return rejectWithValue(error.message || "Failed to delete order");
  }
});
