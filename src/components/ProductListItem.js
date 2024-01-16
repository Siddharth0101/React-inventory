// ProductListItem.js

import React from "react";

const ProductListItem = ({ product, addToCart }) => (
  <li>
    {product.name} - {product.description} - ${product.price} -{" "}
    {product.quantity} available
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </li>
);

export default ProductListItem;
