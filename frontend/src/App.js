import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './components/Menu';
import Order from './components/Order';
import AdminPanel from './components/AdminPanel';
import StaffPanel from './components/StaffPanel';
import OrderHistory from './components/OrderHistory';
import Notifications from './components/Notifications';
import FavoriteOrders from './components/FavoriteOrders';
import Feedback from './components/Feedback';
import UserManagement from './components/UserManagement';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/staff" element={<StaffPanel />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/favorites" element={<FavoriteOrders />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/user-management" element={<UserManagement />} />
      </Routes>
    </Router>
  );
}

export default App;