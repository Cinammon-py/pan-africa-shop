import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CartPage from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import FloatingCart from "./components/FloatingCart";
import Auth from "./pages/Auth";
import Layout from "./components/Layout";


// const publicRoutes = ['/auth'];

export default function App() {
  // const path = window.location.pathname;
  // const isPublicRoute = publicRoutes.includes(path);

  return (
    <div>
      <Routes>
        {/* Auth route without layout */}
        <Route path="/auth" element={<Auth />} />
        
        {/* All other routes with layout */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
