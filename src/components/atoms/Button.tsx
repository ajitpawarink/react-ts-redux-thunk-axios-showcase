// src/components/atoms/Button.tsx

import React, { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  style,
  ...rest
}) => {
  // Basic variant styling
  const baseStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
    backgroundColor:
      variant === "primary"
        ? "#1976d2"
        : variant === "secondary"
        ? "#9e9e9e"
        : "#d32f2f", // danger
    color: "white",
    fontWeight: 500,
    ...style,
  };

  return (
    <button style={baseStyle} {...rest}>
      {children}
    </button>
  );
};

export default Button;
