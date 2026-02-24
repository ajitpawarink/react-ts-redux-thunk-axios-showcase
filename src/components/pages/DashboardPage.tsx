// src/components/pages/DashboardPage.tsx

import React from "react";
import DashboardCharts from "../organisms/DashboardCharts";

const DashboardPage: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>
      <DashboardCharts />
    </div>
  );
};

export default DashboardPage;
