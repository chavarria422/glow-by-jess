import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Brands from './components/Brands';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import { products } from './data';
import { CheckoutState, Product } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [checkoutState, setCheckoutState] = useState<CheckoutState>({
    isOpen: false,
    status: 'idle'
  });

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setCart(prev => {
      const newCart = [...prev];
      const item = newCart[index];
      const currentQuantity = item.quantity || 1;
      const newQuantity = Math.max(1, currentQuantity + delta);
      newCart[index] = { ...item, quantity: newQuantity };
      return newCart;
    });
  };

  const handleOpenCart = () => {
    setCheckoutState(prev => ({ ...prev, isOpen: true }));
  };

  const handleCloseCheckout = () => {
    if (checkoutState.status === 'success') {
      setCart([]); // Clear cart on success close
    }
    setCheckoutState(prev => ({ ...prev, isOpen: false, status: 'idle' }));
  };

  const handleProcessPayment = () => {
    setCheckoutState(prev => ({ ...prev, status: 'processing' }));
    // Simulate API call
    setTimeout(() => {
      setCheckoutState(prev => ({ ...prev, status: 'success' }));
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cartCount={cart.length} onOpenCart={handleOpenCart} />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Brands />
        <ProductList
          products={products}
          cart={cart}
          onAddToCart={handleAddToCart}
          onUpdateQuantity={handleUpdateQuantity}
        />

        <section className="px-4 py-10 bg-white border-y border-primary/5">
          <h3 className="text-[#161216] text-xl font-bold tracking-tight mb-8 text-center">¿Por qué elegir Glow by jess?</h3>
          <div className="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-6 bg-accent-pink/20 rounded-2xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">verified</span>
              <p className="font-bold text-sm">Productos 100% Originales</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-accent-pink/20 rounded-2xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">auto_awesome</span>
              <p className="font-bold text-sm">Marcas Premium</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-accent-pink/20 rounded-2xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">psychology_alt</span>
              <p className="font-bold text-sm">Asesoría Personalizada</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-accent-pink/20 rounded-2xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">speed</span>
              <p className="font-bold text-sm">Envíos Rápidos</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="max-w-screen-xl mx-auto rounded-2xl p-8 bg-gradient-to-br from-[#d372bf] to-[#E8A1D4] text-white flex flex-col items-center text-center gap-6 shadow-2xl shadow-primary/30">
            <h2 className="text-3xl font-black leading-tight">Sé parte de nuestra comunidad</h2>
            <div className="flex gap-10">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black">50k+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Clientes Felices</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black">20+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-80">Marcas Top</span>
              </div>
            </div>
            <p className="text-white/90 text-sm font-medium">Únete a miles de personas que están transformando su rutina de belleza con conocimiento experto.</p>
            <button className="bg-white text-primary font-bold px-8 h-14 rounded-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-3">
              Únete a la Comunidad
              <span className="material-symbols-outlined">groups</span>
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {checkoutState.isOpen && (
        <CheckoutModal
          cart={cart}
          status={checkoutState.status}
          onClose={handleCloseCheckout}
          onPay={handleProcessPayment}
          onRemoveItem={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
        />
      )}
    </div>
  );
};

export default App;