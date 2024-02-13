import React from 'react';
import { Link } from 'react-router-dom';

export const OrderFail = () => {
  return (
    <main>
      <div className='container d-flex justify-content-center align-items-center'>
          <div className='card'>
              <div className='card-body text-center'>
                  <p>Payment failed!</p>
                  <p>Please try again!</p><br></br>
                  <p>Your order is not confirmed. </p>
                  <p>Connect codebook for support.</p>
                  <Link to="/cart" type="button" className="btn btn-primary rounded-3">Check Cart</Link>
              </div>
          </div>
      </div>
    </main>
  )
}
