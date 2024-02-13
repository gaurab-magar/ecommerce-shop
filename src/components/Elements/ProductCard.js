import {Link} from "react-router-dom";
import { Rating } from "./Rating";
import { useCart } from "../../context";
import React, { useEffect, useState } from "react";

import './ProductCard.css';
export const ProductCard = ({data}) => {
  const {id, name, image, price, overview, best_seller, rating} = data;
  const {cartList,addToCart,removeFromCart} = useCart();
  const [inCart , setInCart] = useState(false);

  useEffect(()=>{
   const productInCart =  cartList.find(item => item.id === data.id)
   if(productInCart){
    setInCart(true);
   }else{
    setInCart(false);
   }
  },[cartList, data.id])
 
  return (
    <>
        <div className="col-md-3">
            <div class="card border-0 rounded-3 shadow">
              { best_seller && <span type="button" class="btn text-light badge" style={{backgroundColor:"orangered"}}>
                    Best Sell
                </span> }
              <Link to={`/products/${id}`} >
                <img src={image} className="card-img-top img-fluid" alt={name} />
              </Link>  
              <div class="card-body">
                <Link to={`/products/${id}`} className="text-decoration-none" >
                  <h5 className="card-title text-black fw-bold text-truncate">{name}</h5>
                </Link>
                <p class="card-text">{overview}</p>
                <div>
                  <Rating rating={rating} />
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span class="fw-bold">${price}</span>
                  { inCart && <button onClick={()=>removeFromCart(data)} className="btn btn-primary">Add To Cart +</button>}
                  { !inCart && <button onClick={()=>addToCart(data)} className="btn btn-danger">Remove</button>}
                </div>
              </div>
            </div>
        </div>
    </>
  )
}
