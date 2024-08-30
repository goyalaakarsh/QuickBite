import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './cart.css';
import Checkout from './Checkout';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('https://quickbite-aakarshgoyal.vercel.app/api/cart')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        return response.json();
      })
      .then(data => {
        if (data && data.cartItems) {
          setCartItems(data.cartItems);
          calculateTotalPrice(data.cartItems);
        }
      })
      .catch(error => console.error('Error fetching cart items:', error));
  }, []);

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const removeFromCart = (itemId) => {
    fetch(`https://quickbite-aakarshgoyal.vercel.app/api/cart/remove/${itemId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to remove item from cart');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setCartItems(data.cartItems);
          calculateTotalPrice(data.cartItems);
        } else {
          console.error('Error removing item from cart');
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const updateQuantity = (itemId, newQuantity) => {
    fetch(`https://quickbite-aakarshgoyal.vercel.app/api/cart/update/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity: newQuantity }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update quantity');
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          setCartItems(data.cartItems);
          calculateTotalPrice(data.cartItems);
        } else {
          console.error('Error updating quantity:', data.message);
        }
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <section className="cart section" id="cart">
      <div className="cart_container container">
        <div className="cart_list-container">
          <div className="cart_list-columns">
            <div className="cart_list-column">Item</div>
            <div className="cart_list-column">Name</div>
            <div className="cart_list-column">Price</div>
            <div className="cart_list-column">Quantity</div>
            <div className="cart_list-column">Total</div>
            <div className="cart_list-column">Remove</div>
          </div>
          {cartItems.length === 0 ? (
            <div className="cart_items_empty">Your cart is empty</div>
          ) : (
            <div>
              <div className="cart_items">

                {cartItems.map((item) => (
                  <CartItem
                    key={item._id}
                    item={item}
                    removeFromCart={removeFromCart}
                    updateQuantity={updateQuantity}
                  />
                ))}
              </div>
              <Checkout totalPrice={totalPrice} />
            </div>

          )}


        </div>
      </div>
    </section>
  );
};

export default Cart;