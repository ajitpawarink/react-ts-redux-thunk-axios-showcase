// src/components/organisms/DashboardCharts.tsx
import React, { useMemo } from "react";
import ChartWrapper from "../molecules/ChartWrapper";

const DashboardCharts: React.FC = () => {
  // Dummy data for bar chart
  const barData = useMemo(
    () => [
      { x: "Jan", y: 50 },
      { x: "Feb", y: 80 },
      { x: "Mar", y: 65 },
    ],
    []
  );

  // Dummy data for pie chart
  const pieData = useMemo(
    () => [
      { x: "Chrome", y: 60 },
      { x: "Firefox", y: 25 },
      { x: "Edge", y: 15 },
    ],
    []
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      {/* Bar Chart */}
      <ChartWrapper
        type="bar"
        data={barData}
        options={{
          title: { text: "Monthly Sales" },
          legend: { position: "bottom" },
        }}
      />

      {/* Pie Chart */}
      <ChartWrapper
        type="pie"
        data={pieData}
        options={{
          title: { text: "Browser Usage" },
          legend: { position: "bottom" },
        }}
      />
    </div>
  );
};

export default DashboardCharts;
