import React from 'react';
type cartProp = {
  cartCount: number;
};
function Cart(cartprop: cartProp) {
  return (
    <div>
      <h2>Cart Count</h2>
      {cartprop.cartCount}
    </div>
  );
}

export default Cart;
