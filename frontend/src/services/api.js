import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/auth/login`, userData);
  localStorage.setItem('token', response.data.token);
  return response;
};

export const getMenu = async () => {
  return axios.get(`${API_URL}/menu`);
};

export const placeOrder = async (orderData) => {
  return axios.post(`${API_URL}/orders`, orderData);
};

export const getOrderHistory = async () => {
  return axios.get(`${API_URL}/orders/history`);
};

export const addMenuItem = async (menuItem) => {
  return axios.post(`${API_URL}/menu`, menuItem);
};

export const submitFeedback = async (message) => {
  return axios.post(`${API_URL}/feedback`, { message });
};

export const getFavoriteOrders = async () => {
  return axios.get(`${API_URL}/favorites`);
};

export const addFavoriteOrder = async (orderId) => {
  return axios.post(`${API_URL}/favorites/add`, { orderId });
};

export const removeFavoriteOrder = async (orderId) => {
  return axios.post(`${API_URL}/favorites/remove`, { orderId });
};

export const getUsers = async () => {
  return axios.get(`${API_URL}/users`);
};

export const deleteUser = async (userId) => {
  return axios.delete(`${API_URL}/users/${userId}`);
};