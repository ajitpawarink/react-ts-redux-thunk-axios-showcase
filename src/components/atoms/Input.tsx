// src/components/atoms/Input.tsx

import React, { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ hasError = false, style, ...rest }, ref) => {
    const baseStyle: React.CSSProperties = {
      padding: "0.5rem 0.75rem",
      borderRadius: 4,
      border: hasError ? "1px solid #d32f2f" : "1px solid #ccc",
      outline: "none",
      fontSize: "0.95rem",
      width: "100%",
      boxSizing: "border-box",
      ...style,
    };

    return <input ref={ref} style={baseStyle} {...rest} />;
  }
);

Input.displayName = "Input";

export default Input;
