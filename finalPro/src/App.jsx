// import React from "react"
import "./assets/styles/reset.scss";
import Home from "./pages/Home/Home";

// import { Route, Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SearchResult from "./pages/SearchResult/SearchResult";
 import Header from "./layout/Header/Header";

import ProductsDetail from "./pages/ProductDetail/ProductsDetail";
import ShoppingChart from "./pages/ShoppingChart/ShoppingChart";
import Checkout from "./pages/Checkout/Checkout";

// import { getProducts } from "./api/products"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<SearchResult />} />
        <Route path="/search/:search" element={<SearchResult />} />

        <Route path="/productdetail/:id" element={<ProductsDetail />} />


        <Route path="/shoppingChart" element={<ShoppingChart />} />
        <Route path="/checkout" element={<Checkout /> } />

        
      </Routes>
    </>
  );
}

export default App;
