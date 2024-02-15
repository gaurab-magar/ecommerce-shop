import React from 'react'
import { OrderSuccess } from './Components/OrderSuccess';
import {OrderFail} from './Components/OrderFail';
import { useLocation } from 'react-router-dom';
import { useTitle } from '../../Hooks/useTitle';

export const OrderPage = () => {
  const {status,data} = useLocation();
  useTitle("OrderPage")
  return (
    <main>
      {status ? <OrderSuccess key={state.data.id} data={state.data} /> : <OrderFail /> }
    </main>
  )
}
