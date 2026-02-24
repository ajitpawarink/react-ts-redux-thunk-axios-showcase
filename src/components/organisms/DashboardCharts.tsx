// src/components/organisms/DashboardCharts.tsx

import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import ChartWrapper from "../molecules/ChartWrapper";

const DashboardCharts: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.product);
  const { orders } = useSelector((state: RootState) => state.order);

  /**
   * 1️⃣ Product Price Chart Data (Bar Chart)
   * Transform products into { x, y } format
   */
  const productPriceData = useMemo(() => {
    const productData = products.map((product) => ({
      x: product.title,
      y: product.price,
    }));
    console.log("Product Price Data:", productData); // Debug log


    const barData = [
    { x: "Jan", y: 50 },
    { x: "Feb", y: 80 },
    { x: "Mar", y: 65 },
    ]; // Example static data for testing

    return productData;

  }, [products]);

  /**
   * 2️⃣ Orders Per Product (Pie Chart)
   */
  const ordersPerProductData = useMemo(() => {
    const countMap: Record<number, number> = {};

    orders.forEach((order) => {
      countMap[order.productId] =
        (countMap[order.productId] || 0) + 1;
    });

    return products.map((product) => ({
      x: product.title,
      y: countMap[product.id] || 0,
    }));
  }, [orders, products]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      {/* Product Price Chart */}
      <ChartWrapper
        type="bar"
        data={productPriceData}
        options={{
          title: { text: "Product Prices" },
          legend: { position: "bottom" },
        }}
      />

      {/* Orders Distribution Chart */}
      <ChartWrapper
        type="pie"
        data={ordersPerProductData}
        options={{
          title: { text: "Orders Per Product" },
        }}
      />
    </div>
  );
};

export default DashboardCharts;
