import React from 'react';
import CartItem from './CartItem.js';

class Cart extends React.Component {
  render () {
    const arr = [1, 2, 3, 4, 5];
    return (
      <div className="cart">
        { arr.map((iteam) => {
           return iteam + 5 
        }) }
      </div>
    );  
  }
}  

export default Cart;