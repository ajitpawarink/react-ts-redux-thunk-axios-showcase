// src/components/templates/PageLayout.tsx

import React, { type ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ padding: "1rem", backgroundColor: "#1976d2", color: "white" }}>
        <h1>React TS Redux Showcase</h1>
      </header>

      {/* Main content */}
      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>

      {/* Footer */}
      <footer style={{ padding: "1rem", backgroundColor: "#f5f5f5", textAlign: "center" }}>
        &copy; 2026 My Company
      </footer>
    </div>
  );
};

export default PageLayout;
