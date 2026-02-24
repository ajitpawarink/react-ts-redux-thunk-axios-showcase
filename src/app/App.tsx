// src/app/app.tsx

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import store, { type AppDispatch } from "./store";
import PageLayout from "../components/templates/PageLayout";
import AppRoutes from "../routes/AppRoutes";

import { fetchProducts } from "../redux/product/productThunk";
import { fetchOrders } from "../redux/order/orderThunk";

const AppContent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchOrders())
  }, [dispatch]);

  return (
    <PageLayout>
      <AppRoutes />
    </PageLayout>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
