import React, { useState } from 'react';
import { addMenuItem } from '../services/api';

const AdminPanel = () => {
  const [menuItem, setMenuItem] = useState({ name: '', price: '', category: '' });

  const handleAddItem = async () => {
    try {
      await addMenuItem(menuItem);
      alert('Menu item added successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Admin Panel</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Item Name"
          value={menuItem.name}
          onChange={(e) => setMenuItem({ ...menuItem, name: e.target.value })}
        />
        <input
          type="number"
          className="form-control mt-2"
          placeholder="Price"
          value={menuItem.price}
          onChange={(e) => setMenuItem({ ...menuItem, price: e.target.value })}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Category"
          value={menuItem.category}
          onChange={(e) => setMenuItem({ ...menuItem, category: e.target.value })}
        />
        <button className="btn btn-primary mt-2" onClick={handleAddItem}>Add Item</button>
      </div>
    </div>
  );
};

export default AdminPanel;