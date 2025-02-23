import React, { useState } from 'react';
import { placeOrder } from '../services/api';

const Order = () => {
  // eslint-disable-next-line no-unused-vars
  const [order, setOrder] = useState([]);

  const handlePlaceOrder = async () => {
    try {
      await placeOrder({ items: order, deliveryLocation: 'Room 101' });
      alert('Order placed successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Your Order</h2>
      <ul className="list-group mb-4">
        {order.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <button className="btn btn-success" onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Order;