import React from "react";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";

import { AuthProvider } from "@/Context/AuthContext";
import { ShopProvider } from "@/Context/ShopContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

import Home from "@/pages/Home";
import ProductListing from "@/pages/ProductListing";
import ProductDetail from "@/pages/ProductDetail";
import Auth from "@/pages/Auth";
import Wishlist from "@/pages/Wishlist";
import Checkout from "@/pages/Checkout";
import Collections from "@/pages/Collections";
import Orders from "@/pages/Orders";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shipping from "./pages/Shipping";
import Returns from "./pages/Returns";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import OurStory from "./pages/OurStory";
import Careers from "./pages/Careers";
import Sustainability from "./pages/Sustainablity";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <ShopProvider>
            <Navbar />
            <main data-testid="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/men" element={<ProductListing preset={{ category: "men", key: "men", title: "Men" }} />} />
                <Route path="/women" element={<ProductListing preset={{ category: "women", key: "women", title: "Women" }} />} />
                <Route path="/kids" element={<ProductListing preset={{ category: "kids", key: "kids", title: "Kids" }} />} />
                <Route path="/new-arrivals" element={<ProductListing preset={{ is_new: true, key: "new", title: "New Arrivals" }} />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/terms-conditions" element={<Terms />} />
                <Route path="/refund-policy" element={<RefundPolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/returns" element={<Returns />} />
                <Route path="/shipping" element={<Shipping />} />
                <Route path="/our-story" element={<OurStory />} />
                <Route path='/careers' element={<Careers />} />
                <Route path='/sustainability' element={<Sustainability />} />
                <Route path="/products" element={<ProductListing preset={{ key: "all", title: "All Pieces" }} />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/account/orders" element={<Orders />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <CartDrawer />
            <Footer />
            <Toaster position="top-center" richColors />
          </ShopProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
