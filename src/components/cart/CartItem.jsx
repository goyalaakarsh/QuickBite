import React, { useState } from 'react';
import './cart.css';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  const { image, name, price, _id } = item;
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    updateQuantity(_id, newQuantity); // Call updateQuantity function from parent component
  };

  return (
    <div className="cart-item">
      <div className="cart-item-details cart-item-image">
        <img src={image} alt={name} className="cart-item-img" />
      </div>
      <div className="cart-item-details cart-item-name">{name}</div>
      <div className="cart-item-details cart-item-price">${price}</div>
      <div className="cart-item-details cart-item-quantity">
        <input
          type="number"
          value={quantity}
          min="1"
          onChange={handleQuantityChange}
          className="cart-item-quantity-input"
        />
      </div>
      <div className="cart-item-details cart-item-total">${price * quantity}</div>
      <div className="cart-item-details cart-item-remove" onClick={() => removeFromCart(_id)}>
        <i className="fa-solid fa-xmark cart-item-remove-icon"></i>
      </div>
    </div>
  );
};

export default CartItem;
