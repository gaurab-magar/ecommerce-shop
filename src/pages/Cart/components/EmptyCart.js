import React from 'react';
import { Link } from 'react-router-dom';

export const EmptyCart = () => {
  return (
    <main>
        <div className="container">
            <div className='row d-flex justify-content-center align-items-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='container text-center'>
                                <i className='fas fa-shopping-cart fs-1 fw-bold'></i>
                                <h3 className='fs-2'>Your cart is empty</h3>
                                <p className='lead mt-4'>Add some products to your shopping cart.</p>
                                <Link to='/products' className='btn btn-primary w-50 mt-4'>Go Shopping!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
