// src/components/atoms/Label.tsx

import React, { type LabelHTMLAttributes,type ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  required?: boolean;
}

const Label: React.FC<LabelProps> = ({
  children,
  required = false,
  style,
  ...rest
}) => {
  const baseStyle: React.CSSProperties = {
    display: "block",
    marginBottom: "0.25rem",
    fontWeight: 500,
    fontSize: "0.9rem",
    ...style,
  };

  return (
    <label style={baseStyle} {...rest}>
      {children}
      {required && <span style={{ color: "#d32f2f" }}> *</span>}
    </label>
  );
};

export default Label;
