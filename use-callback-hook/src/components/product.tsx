import React from 'react';
type productProp = {
  name: string;
  addToCart: () => void;
};

const Product = React.memo((prop: productProp) => {
  console.log(`${prop.name} component re-rendered`);
  return (
    <div className="flex-container-div ">
      <h1>{prop.name}</h1>
      <button onClick={prop.addToCart}> Add to card</button>
    </div>
  );
});

export default Product;
