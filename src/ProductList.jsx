import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  { name: 'Aloe Vera', price: 10 },
  { name: 'Snake Plant', price: 15 },
  { name: 'Peace Lily', price: 20 },
  // Add more plants as needed
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
  };

  const getQuantityInCart = (plantName) => {
    const item = cartItems.find(item => item.name === plantName);
    return item ? item.quantity : 0;
  };

  return (
    <div>
      <h1>Plant List</h1>
      <ul>
        {plants.map((plant) => (
          <li key={plant.name}>
            <span>{plant.name} - ${plant.price}</span>
            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
            {getQuantityInCart(plant.name) > 0 && <span> ({getQuantityInCart(plant.name)} in cart)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;