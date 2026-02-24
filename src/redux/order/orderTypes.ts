// src/redux/order/orderTypes.ts

export interface Order {
  id: number;
  customerId: number;
  productId: number;
  order_date: string;
}

export interface OrderState {
  orders: Order[];
  loading: boolean;
  error: string | null;
}
