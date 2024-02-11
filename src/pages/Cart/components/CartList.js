import React from 'react'

export const CartList = () => {
  return (
    <main>
        <div className="container">
            <h1 className='text-center'>Your Shopping Cart</h1>
            <div className="row">
               <div className='card'>
                    <div className='card-body d-flex justify-content-between align-items-center'>
                        <img className='img-fluid' src='https://source.unsplash.com/random/800x600'></img>
                        <p>Product Name: Product Title Here...</p>
                        <p>Price: $9.99</p>
                        <button type='button' class='btn btn-primary'>Add to cart</button>
                        <button type='button' class='btn btn-primary'>Remove from Cart</button>
                    </div>
               </div>
               <div className='d-flex justify-content-between'>
                    <p>Total Amount: $24.97</p>
                    <a href="#" class="btn btn-success">Checkout Now!</a>
               </div>
            </div>
        </div>
    </main>
  )
}
