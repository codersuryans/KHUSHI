import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './index.css';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Cart />
      <Hero />
      <Features />
      <ProductList />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <div className="demo-banner">
        This is a Demo Website developed by Jagannath Global Tech
      </div>
    </CartProvider>
  );
}

export default App;
