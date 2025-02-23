import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StaffPanel = () => {
  const [orders, setOrders] = useState([]);

  // Fetch all orders
  useEffect(() => {
    axios.get('/api/orders', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(response => setOrders(response.data))
      .catch(error => console.error(error));
  }, []);

  // Update order status
  const handleUpdateStatus = async (orderId, status) => {
    try {
      await axios.put(
        `/api/orders/${orderId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      // Refresh the orders list
      const updatedOrders = orders.map(order =>
        order._id === orderId ? { ...order, status } : order
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Staff Panel</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Items</th>
            <th>Delivery Location</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>
                <ul>
                  {order.items.map(item => (
                    <li key={item.itemId._id}>
                      {item.itemId.name} (Qty: {item.quantity})
                    </li>
                  ))}
                </ul>
              </td>
              <td>{order.deliveryLocation}</td>
              <td>{order.status}</td>
              <td>
                <select
                  className="form-control"
                  value={order.status}
                  onChange={(e) => handleUpdateStatus(order._id, e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="preparing">Preparing</option>
                  <option value="ready">Ready</option>
                  <option value="delivered">Delivered</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffPanel;