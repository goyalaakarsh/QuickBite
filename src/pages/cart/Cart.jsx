import React from 'react';
import './cart.css';
import CartComp from '../../components/cart/Cart';
import { StoreProvider } from '../../context/StoreContext';

const Cart = () => {
    return (
        <main className='cart main'>
            <StoreProvider>
                    <CartComp />
            </StoreProvider>
        </main>
    );
}

export default Cart;
