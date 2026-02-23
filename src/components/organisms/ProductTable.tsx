// src/components/organisms/ProductTable.tsx

import React from "react";
import type { Product } from "../../redux/product/productTypes";
import Button from "../atoms/Button";
import {Link} from "react-router-dom";

import { useDispatch } from "react-redux";
import { type AppDispatch } from "../../app/store";
import { deleteProduct } from "../../redux/product/productThunk";

interface ProductTableProps {
  products: Product[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  if (!products.length) return <div>No products available.</div>;

  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to={`/products/create`}>
          <Button>Add Product</Button>
        </Link>
      </div>
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
            <td>${p.price}</td>
            <td>
              <Link to={`/products/${p.id}/edit`}>
                <Button>Edit</Button>
              </Link>
              <Button
                onClick={() => handleDelete(p.id)}
                style={{ marginLeft: "8px", backgroundColor: "red" }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    
  );
};

export default ProductTable;
