import React, { useEffect, useState } from 'react';
import { getFavoriteOrders, removeFavoriteOrder } from '../services/api';

const FavoriteOrders = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavoriteOrders()
      .then(response => setFavorites(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleRemoveFavorite = async (orderId) => {
    try {
      await removeFavoriteOrder(orderId);
      setFavorites(favorites.filter(order => order._id !== orderId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Favorite Orders</h2>
      <ul className="list-group">
        {favorites.map(order => (
          <li key={order._id} className="list-group-item mb-3">
            <h5>Order ID: {order._id}</h5>
            <p>Status: {order.status}</p>
            <p>Delivery Location: {order.deliveryLocation}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveFavorite(order._id)}
            >
              Remove from Favorites
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoriteOrders;