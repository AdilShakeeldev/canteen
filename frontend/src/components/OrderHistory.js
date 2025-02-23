import React, { useEffect, useState } from 'react';
import { getOrderHistory } from '../services/api';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrderHistory()
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Order History</h2>
      <ul className="list-group">
        {orders.map(order => (
          <li key={order._id} className="list-group-item mb-3">
            <h5>Order ID: {order._id}</h5>
            <p>Status: {order.status}</p>
            <p>Delivery Location: {order.deliveryLocation}</p>
            <p>Ordered On: {new Date(order.createdAt).toLocaleString()}</p>
            <ul>
              {order.items.map(item => (
                <li key={item.itemId._id}>
                  {item.itemId.name} - ₹{item.itemId.price} (Qty: {item.quantity})
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;