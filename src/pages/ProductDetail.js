import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "../components";
import { useTitle } from "../Hooks/useTitle";
import React from "react";

export const ProductDetail = () => {
    const [product , setProduct] = useState([]);
    const { id } = useParams();
    useTitle(`${product.name}`)
    useEffect(()=>{
        async function productDetail ()  {
            const response = await fetch(`http://localhost:8000/products/${id}`);
            const data = await response.json();
            setProduct(data)
        }
        productDetail()
    },[])
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
                            <button className="btn btn-primary rounded-3 my-2">Add To Cart +</button>
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
