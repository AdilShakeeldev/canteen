import React, { useEffect, useState } from 'react';
import socket from '../services/socket';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Listen for real-time notifications
    socket.on('orderStatusUpdated', (data) => {
      setNotifications((prev) => [
        { message: `Order ${data.orderId} status updated to ${data.status}`, id: Date.now() },
        ...prev,
      ]);
    });

    // Clean up the socket connection
    return () => {
      socket.off('orderStatusUpdated');
    };
  }, []);

  return (
    <div className="container mt-4">
      <h2>Notifications</h2>
      <ul className="list-group">
        {notifications.map(notification => (
          <li key={notification.id} className="list-group-item">
            {notification.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
