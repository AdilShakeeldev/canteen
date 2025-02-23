import React, { useEffect, useState } from 'react';
import { getMenu } from '../services/api';

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu()
      .then(response => setMenu(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Menu</h2>
      <div className="row">
        {menu.map(item => (
          <div key={item._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Price: ₹{item.price}</p>
                <p className="card-text">{item.category}</p>
                <button className="btn btn-primary">Add to Order</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;