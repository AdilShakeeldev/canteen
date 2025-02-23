#!/bin/bash

# Script to set up and run the College Canteen Food Ordering App

# Navigate to the backend directory
echo "Setting up the backend..."
cd backend

# Install backend dependencies
if npm install; then
  echo "Backend dependencies installed successfully."
else
  echo "Failed to install backend dependencies. Exiting..."
  exit 1
fi

# Start the backend server in the background
echo "Starting the backend server..."
npm start &
BACKEND_PID=$!
echo "Backend server started with PID $BACKEND_PID."

# Navigate to the frontend directory
echo "Setting up the frontend..."
cd ../frontend

# Install frontend dependencies
if npm install; then
  echo "Frontend dependencies installed successfully."
else
  echo "Failed to install frontend dependencies. Exiting..."
  kill $BACKEND_PID
  exit 1
fi

# Start the frontend React app
echo "Starting the frontend React app..."
npm start

# Trap to kill the backend server when the script exits
trap "kill $BACKEND_PID" EXIT