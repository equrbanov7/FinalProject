// import React from "react"
import "./assets/styles/reset.scss";
import Home from "./pages/Home/Home";

// import { Route, Routes } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SearchResult from "./pages/SearchResult/SearchResult";
import Header from "./layout/Header/Header";
import Ctg from "./pages/CategoryResult/Ctg";
import Exm from "./pages/CategoryResult/Exm";
import ProductsDetail from "./pages/ProductDetail/ProductsDetail";

// import { getProducts } from "./api/products"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={<SearchResult />} />
        <Route path="/productdetail" element={<ProductsDetail />} />

        <Route path="/search/kenan/elvin" element={<Ctg />} />
        <Route path="/search/kenan" element={<Exm />} />
      </Routes>
    </>
  );
}

export default App;
