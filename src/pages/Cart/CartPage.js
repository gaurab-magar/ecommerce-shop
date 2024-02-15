import React from 'react';
import { EmptyCart } from './components/EmptyCart';
import {useCart} from '../../context';
export const CartPage = () => {
  const {cartList} = useCart();
  useTitle(`Cart(${cartList.length})`);

  return (
    <main>
        { cartList.length ? cartList : EmptyCart }
        CartPage
    </main>
  )
}
