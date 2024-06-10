import React from 'react'
import "./App.css";
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Dishes from './components/dishes/Dishes';
import { StoreContext } from './context/StoreContext';
import { DishList } from './context/StoreContext';
import { MenuList } from './context/StoreContext';
import Home from './pages/home/Home'
import AppRoutes from './Routes';
import { StoreProvider } from './context/StoreContext';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <StoreProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </StoreProvider>
  );
}

export default App