import React from 'react';
import './cart.css';
import CartComp from '../../components/cart/Cart';
import { StoreProvider } from '../../context/StoreContext';
import { CartProvider } from '../../context/CartContext';

const Cart = () => {
    return (
        <main className='cart main'>
            <StoreProvider>
                <CartProvider>
                    <CartComp />
                </CartProvider>
            </StoreProvider>
        </main>
    );
}
export default Cart;
