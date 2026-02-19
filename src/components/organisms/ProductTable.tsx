// src/components/organisms/ProductTable.tsx

import React from "react";
import type { Product } from "../../redux/product/productTypes";
import Button from "../atoms/Button";

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  if (!products.length) return <div>No products available.</div>;

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id} style={{ borderBottom: "1px solid #ccc" }}>
            <td>{p.id}</td>
            <td>{p.title}</td>
            <td>{p.description}</td>
            <td>${p.price.toFixed(2)}</td>
            <td>
              <Button onClick={() => alert(`Edit ${p.id}`)}>Edit</Button>
              <Button
                onClick={() => alert(`Delete ${p.id}`)}
                style={{ marginLeft: "8px", backgroundColor: "red" }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
