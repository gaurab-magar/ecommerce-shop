import React from 'react'
import { Navigate } from 'react-router-dom';

export const protectedRoute = ({children}) => {
    const token = JSON.parse(sessionStorage.getItem("token"));
  return token ? children : <Navigate to="/login" />
}
