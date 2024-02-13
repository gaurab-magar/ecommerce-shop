import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../../../context';

export const CartCard = ({item}) => {
  const{removeFromCart} = useCart();
  function handleRemove(item){
    removeFromCart(item.id);
  }
  return (
    <section>
        <div className='card'>
            <div className='card-body d-flex justify-content-between align-items-center'>
                <img alt={item.name} className='img-fluid w-25' src='https://source.unsplash.com/random/800x600'></img>
                <Link to={`products/${item.id}`}>
                    <p>Product Name: Product Title Here...</p>
                </Link>
                <p>Price: ${item.price}</p>
                <button onClick={()=>handleRemove(item)} type='button' class='btn btn-danger'>Remove from Cart</button>
            </div>
        </div>
    </section>
  )
}
