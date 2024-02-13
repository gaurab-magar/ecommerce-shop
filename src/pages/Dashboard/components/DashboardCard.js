import React from 'react'
import {Link} from "react-router-dom";

export const DashboardCard = ({order}) => {
    
  return (
    <main>
        <div className='container'>
            <h2 className='text-center fw-bold'>DashboardCard</h2>
            <div className='d-flex justify-content-between'>
                <span>Order ID: {order.id}</span>
                <span>Total:$ {order.amount_paid}</span>
            </div>
            {order.cartList.map((product)=>(
                <div key={product.id} className='d-flex flex-wrap my-3'>
                    <div>
                        <Link to={`/product/${product.id}`}>
                            <img className='img-fluid' src={product.img} alt={product.name}></img>
                        </Link>
                        <div>
                            <Link to={`product/${product.id}`}>
                                <p>The guid backend</p>
                            </Link>
                            <div className='fw-bold'>
                                <span>${product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </main>
  )
}
