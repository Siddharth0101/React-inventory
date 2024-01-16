// Cart.js

import React from "react";
import CartItem from "./CartItem";
import Modal from "./Modal";

const Cart = ({ cart, incrementQuantity, decrementQuantity, closeCart }) => (
  <Modal onClose={closeCart}>
    <div className="cart-modal">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
        ))}
      </ul>
      <button onClick={closeCart}>Close Cart</button>
    </div>
  </Modal>
);

export default Cart;
