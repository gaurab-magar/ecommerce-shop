import React from 'react';
import {Link} from "react-router-dom";

export const OrderSuccess = ({data}) => {
  return (
    <main>
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='card'>
                <div className='card-body text-center'>
                    <p>ThankYou {data.user.name} for order!</p>
                    <p>Your Order ID:{data.id} </p><br></br>
                    <p>Your order is confirmed. </p>
                    <p>Please check Your Email:{data.user.email}</p>
                    <p>Payment ID:{data.user.id}</p>
                    <Link to="/products" type="button" className="btn btn-primary rounded-3">Continue Shopping</Link>
                </div>
            </div>
        </div>
    </main>
  )
}
