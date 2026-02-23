// src/components/organisms/ProductForm.tsx

import React, { useEffect, useState } from "react";
import { type Product } from "../../redux/product/productTypes";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

interface ProductFormProps {
  initialData?: Product | null;
  onSubmit: (data: Omit<Product, "id">) => void;
  loading?: boolean;
}

interface FormErrors {
  title?: string;
  description?: string;
  price?: string;
}

const ProductForm: React.FC<ProductFormProps> = ({
  initialData,
  onSubmit,
  loading = false,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [errors, setErrors] = useState<FormErrors>({});

  const navigate = useNavigate();  


  // Populate form in Edit mode
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setPrice(initialData.price);
    }
  }, [initialData]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (price === "" || Number(price) <= 0)
      newErrors.price = "Price must be greater than 0";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      // Call the create/edit submit function
      await onSubmit({
        title,
        description,
        price: Number(price),
      });

      // Redirect to listing page after success
      navigate("/products"); // <-- change path if needed
    } catch (err) {
      console.error("Submit failed:", err);
      // optionally show toast or error message
    }

  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
      <FormField
        label="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        error={errors.title}
      />

      <FormField
        label="Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        error={errors.description}
      />

      <FormField
        label="Price"
        name="price"
        type="number"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value === "" ? "" : Number(e.target.value))
        }
        required
        error={errors.price}
      />

      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Submit"}
      </Button>
    </form>
  );
};

export default ProductForm;
