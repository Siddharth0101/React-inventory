// CartButton.js

import React from "react";

const CartButton = ({ cart, openCart }) => (
  <button onClick={openCart}>
    Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
  </button>
);

export default CartButton;
