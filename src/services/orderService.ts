// src/services/orderService.ts

import axiosInstance from "./axiosInstance";
import type { Order } from "../redux/order/orderTypes";

// GET ALL ORDERS
export const fetchOrdersAPI = async (): Promise<Order[]> => {
  const response = await axiosInstance.get("/orders");
  return response.data;
};

// GET SINGLE ORDER
export const fetchOrderByIdAPI = async (id: number): Promise<Order> => {
  const response = await axiosInstance.get(`/orders/${id}`);
  return response.data;
};

// CREATE ORDER
export const createOrderAPI = async (
  order: Omit<Order, "id">
): Promise<Order> => {
  const response = await axiosInstance.post("/orders", order);
  return response.data;
};

// UPDATE ORDER
export const updateOrderAPI = async (
  id: number,
  order: Omit<Order, "id">
): Promise<Order> => {
  const response = await axiosInstance.put(`/orders/${id}`, order);
  return response.data;
};

// DELETE ORDER
export const deleteOrderAPI = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/orders/${id}`);
};
