import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "../components/pages/ListProductPage";
import EditProduct from "../components/pages/EditProductPage";
import CreateProduct from "../components/pages/AddProductPage";
import DashboardPage from "../components/pages/DashboardPage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Default Redirect */}
      {/* <Route path="/" element={<Navigate to="/products" replace />} /> */}
      <Route path="/" element={<DashboardPage />} />

      {/* Product Routes */}
      <Route path="/products" element={<ProductList />} />
      <Route path="/products/create" element={<CreateProduct />} />
      <Route path="/products/:id/edit" element={<EditProduct />} />
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* 404 Route */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
