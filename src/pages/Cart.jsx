import React, { useContext } from "react";
import { ProductContext } from "../components/ProductProvider";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart } =
    useContext(ProductContext);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-container">
      {/* Left Side - Cart Items */}
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-price">₹{item.price}</p>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
                <div className="item-subTotal">
                  <p>Subtotal: ₹{item.price * item.quantity}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right Side - Summary */}
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Total Products: {cartItems.length}</p>
        <p>Total Quantity: {totalItems}</p>
        <p>Total Price: ₹{totalPrice}</p>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
}

export default Cart;
