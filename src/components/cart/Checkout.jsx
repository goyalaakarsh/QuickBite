import React from 'react';

const Checkout = ({ totalPrice }) => {
  // Assuming tax rate is 10%
  const taxRate = 0.05;
  const subtotal = totalPrice;
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  return (
    <div className="cart-checkout">
      <h3>Cart Totals</h3>
      <div className="cart-checkout-details">
        <div className="subtotal">
          <div>Subtotal</div> <div>${subtotal.toFixed(2)}</div>
        </div>
        <div className="tax">
          <div>Tax (5%)</div> <div>${tax.toFixed(2)}</div>
        </div>
        <div className="total">
          <div>Total</div> <div>${total.toFixed(2)}</div>
        </div>
      </div>

      <a href="/" className="checkout-btn button">Checkout</a>
    </div>
  );
};

export default Checkout;
