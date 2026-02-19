// src/app/app.tsx

import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import PageLayout from "../components/templates/PageLayout";
import ListProductPage from "../components/pages/ListProductPage";
import { fetchProducts } from "../redux/product/ProductThunk";

const AppContent: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch all products on first load
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <PageLayout>
      <ListProductPage />
    </PageLayout>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default App;
