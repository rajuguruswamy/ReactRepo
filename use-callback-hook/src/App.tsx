import React, { useCallback, useState } from 'react';

import './App.css';
import Product from './components/product';
import Cart from './components/cart';

function App() {
  const [products, setProducts] = useState(['Product 1', 'Product 2']);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  return (
    <div className="App">
      <h1>React useCallback Hook</h1>
      <button onClick={() => setCount(count + 1)}> +Count</button>
      <h2>Count Value : {count}</h2>
      <Cart cartCount={cart} />
      <div className="flex-container">
        {products.map((prod, index) => {
          return <Product name={prod} key={index} addToCart={addToCart} />;
        })}
      </div>
    </div>
  );
}

export default App;
