import React from 'react';
import { EmptyCart } from './components/EmptyCart';
import {useCart} from '../../context';
export const CartPage = () => {

  const {cartList} = useCart();

  return (
    <main>
        { cartList.length ? cartList : EmptyCart }
        CartPage
    </main>
  )
}
