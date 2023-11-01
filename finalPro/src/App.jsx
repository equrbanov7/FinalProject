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
import NotFound from "./components/NotFound";
import Footer from "./layout/Footer";
import Payment from "./pages/Payment/Payment";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<SearchResult />} />
        {/* <Route path="/search/:search" element={<SearchResult />} /> */}

        <Route path="/:ctg/:search" element={<SearchResult />} />

        {/* <Route path="/productdetail/:id" element={<ProductsDetail />} /> */}
        {/* <Route path="/:ctg/:name/:id" element={<ProductsDetail />} /> */}
        <Route path="/:ctg/:ctgId/:name/:id" element={<ProductsDetail />} />

        <Route path="/shoppingChart" element={<ShoppingChart />} />
        <Route path="/checkout" element={<Checkout /> } />
        <Route path="/payment" element={<Payment /> } />
        

       
        <Route path="*" element={<NotFound /> } />

        
      </Routes>
      <Footer />
      {/* <Footer /> */}
    </> 
  );
}

export default App;
