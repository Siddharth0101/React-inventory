// CartItem.js

import React from "react";

const CartItem = ({ item, incrementQuantity, decrementQuantity }) => (
  <li>
    {item.name} - Quantity: {item.quantity}
    <button onClick={() => incrementQuantity(item)}>+</button>
    <button onClick={() => decrementQuantity(item)}>-</button>
  </li>
);

export default CartItem;
