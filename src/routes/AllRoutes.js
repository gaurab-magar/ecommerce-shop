import React from 'react';
import {Routes ,Route} from 'react-router-dom';
import {HomePage, ProductList, ProductDetail, Login, Register, CartPage,OrderPage, DashboardPage,PageNotFound} from '../pages';
import {protectedRoute} from "./protectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='products' element={ <ProductList /> } />
        <Route path='products/:id' element={ <ProductDetail /> } />
        <Route path='login' element={ <Login /> } />
        <Route path='register' element={ <Register /> } />
        <Route path='cart' element={ <protectedRoute><CartPage /></protectedRoute> } />
        <Route path='order-summary' element={ <protectedRoute><OrderPage /></protectedRoute> } />
        <Route path='dashboard' element={ <protectedRoute><DashboardPage /></protectedRoute> } />
        <Route path='*' element={ <PageNotFound /> } />
      </Routes>
    </>
  )
}
