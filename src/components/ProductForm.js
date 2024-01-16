// ProductForm.js

import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product);
    setProduct({ name: "", description: "", price: 0, quantity: 0 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Quantity:
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
