import React from 'react';
import {CartCard} from "./CartCard";
import { Checkout } from './Checkout';
import { useState } from 'react';
import { useCart } from '../../../context';
export const CartList = () => {
    const [checkout , setCheckout] = useState(false);
    const {cartList,total} = useCart();
  return (
    <section>
        <div className="container">
            <h1 className='text-center'>Your Shopping Cart</h1>
            <p className='text-center'>MyCart({cartList.length})</p>
            <div className="row">

                {cartList.map((item)=> (<CartCard item={item} key={item.id} />))}

               <div className='d-flex justify-content-between'>
                    <p>Total Amount: ${total}</p>
                    <button onClick={()=>setCheckout(!checkout)} href="#" class="btn btn-success">Checkout Now!</button>
               </div>
            </div>
        </div>
        {checkout && <Checkout setcheckout={setCheckout} />}
    </section>
  )
}
