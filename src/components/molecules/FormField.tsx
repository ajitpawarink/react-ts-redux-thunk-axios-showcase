// src/components/molecules/FormField.tsx

import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  error,
  placeholder,
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>

      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hasError={!!error}
      />

      {error && (
        <div style={{ color: "#d32f2f", fontSize: "0.8rem", marginTop: "0.25rem" }}>
          {error}
        </div>
      )}
    </div>
  );
};

export default FormField;
