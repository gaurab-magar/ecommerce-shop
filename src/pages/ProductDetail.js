import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../components";
import { useTitle } from "../Hooks/useTitle";
import React from "react";
import { useCart } from "../context";
import {getProduct} from "../Services";
import { useTitle } from "../Hooks/useTitle";

export const ProductDetail = () => {
    const {cartList ,addToCart, removeFromCart} = useCart();
    
    const [product , setProduct] = useState([]);
    const { id } = useParams();
    useTitle(`${product.name}`);
    useEffect(()=>{
        async function productDetail ()  {
            try{
                const data = await getProduct(id)
                setProduct(data);
            }catch(error){
                toast.error(error.message)
            }
        }
        productDetail()
    },[])
    const [inCart , setInCart] = useState(false);
    useEffect(()=>{
        if(inCart){
            setInCart(true)
        }else{
            setInCart(false)
        }
    },[cartList,product.id])
  return (
    <main>
        <section className="py-5">
            <div className="container">
                <div className="row text-center fw-bold">
                    <h1>{product.name} </h1>
                    <p>{product.overview}</p>
                </div>
                <div className="row">
                    <div className="col-md-6  p-4">
                        <div className="img-thumbnail">
                            <img className="img-fluid" src={product.image}></img>
                        </div>
                    </div>
                    <div className="col-md-6  p-4">
                        <div className="detail">
                            <h1 className="fw-bold">${product.price}</h1>
                            <div className="star">
                              <Rating rating={product.rating} />
                            </div>
                            <p className="my-3">
                                {product.best_seller && <span className="text-warning py-2 px-3 rounded-3 shadow bg-white me-3">BEST SELLER</span> }
                                {product.in_stock && <span className="text-success py-2 px-3 rounded-3 shadow bg-white me-3">INSTOCK</span> }
                                { !product.in_stock && <span className="text-danger py-2 px-3 rounded-3 shadow bg-white me-3">OutOfStock</span> }
                                {product.size && <span className="text-primary py-2 px-3 rounded-3 shadow bg-white me-3">{product.size}MB</span>}
                            </p>
                            { inCart && <button onClick={()=>removeFromCart(product)} className="btn btn-danger rounded-3 my-2" disabled={product.in_stock?"":"disabled"}>Remove</button> }
                            { !inCart && <button onClick={()=>addToCart(product)} className="btn btn-primary rounded-3 my-2" disabled={product.in_stock ? "" : "disabled" }>Add To Cart +</button> }
                        </div>
                        <div className="description">
                            <p>{product.long_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
  )
}
