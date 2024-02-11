import React from "react";

export const Rating = ({rating}) => {
    let ratingArrey = Array(5).fill(false);
    for( let i = 0; i < rating; i++){
        ratingArrey[i] = true;
    }
  return (
    <>
    { ratingArrey.map((value,index)=>(
        value ? <span key={index} className="fa fa-star text-warning"></span> : <span key={index} className="far fa-star text-light"></span>
    )) }
    </>
  )
}
