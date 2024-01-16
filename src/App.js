// App.js

import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductListItem from "./components/ProductListItem";
import CartItem from "./components/CartItem";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { ...product, id: products.length + 1 }]);
  };

  const addToCart = (product) => {
    const existingCartItem = cart.find((item) => item.name === product.name);

    if (existingCartItem) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      setProducts(
        products.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      setProducts(
        products.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const incrementQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    setProducts(
      products.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const decrementQuantity = (product) => {
    if (product.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
      setProducts(
        products.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else if (product.quantity === 1) {
      removeFromCart(product);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.name !== product.name));
    setProducts(
      products.map((item) =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      )
    );
  };

  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <ProductListItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
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
    </div>
  );
}

export default App;
