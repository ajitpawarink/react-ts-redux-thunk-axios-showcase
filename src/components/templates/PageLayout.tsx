// src/components/templates/PageLayout.tsx

import React, { type ReactNode } from "react";
import ThemeToggleButton from "../atoms/ThemeToggleButton";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between", // heading left, button right
          alignItems: "center", // vertically center items
          borderBottom: "1px solid var(--border-color)",
        }}
      >
        <h1 style={{ margin: 0 }}>React TS Redux Showcase</h1> 
        <ThemeToggleButton />
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, padding: "1rem" }}>{children}</main>

      {/* Footer */}
      <footer style={{ padding: "1rem", backgroundColor: "var(--bg-foot)", textAlign: "center", color: "var(--text-color)" }}>
        &copy; {new Date().getFullYear()} Demo FMCG Inc.
      </footer>
      
    </div>
  );
};

export default PageLayout;
