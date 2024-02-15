import React, { useEffect, useState } from 'react'
import { useCart } from '../../../context';
import {useNavigate} from "react-router-dom";
import { getUser } from '../../../Services';

export const Checkout = ({setcheckout}) => {
    const {total,cartList,clearCart} = useCart();
    const [user,setUser] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchData(){
            try{
                const data = await getUser();
                setUser(data);
            }catch(error){
                toast.error(error.message);
            }
        }
        fetchData();
    },[]);
    
    async function handleOrderSubmit(event){
        event.preventDefault(); 
        try{
           const data = await createOrder(cartList,total,user);
            clearCart();
            navigate("/order-summary",{state:{data:data,status:true}});
        }catch{
            navigate('/order-summary',{state: {status:false}});
        }
    }
  return (
    <main  className="checkout bg-transparent">
        <div className="container">
            <div className='card bg-light shadow-lg rounded-3 border-0'>
                <div className='card-title d-flex align-items-center justify-content-between'>
                    <h4><i className='fas fa-card'></i>CARD PAYMENT</h4>
                    <i onClick={()=> setcheckout(false)} className='fas fa-cross'></i>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleOrderSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name" placeholder="Your name" value={user.name}/>
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" placeholder="Your email" />
                            <label htmlFor="Cnumber" className="form-label">Card Number:</label>
                            <input type="text" className="form-control" id="Cnumber" placeholder="xxxx xxxx xxxx" />
                            <label htmlFor='expDate' className='form-label'>Expiry Date:</label>
                            <div class="d-flex gap-2">
                                <input  type="month" className="form-select me-1"/>
                                <input  type="day" className="form-select me-1"/>
                            </div>
                            <label htmlFor='security' className='form-label'>Security Code:</label>
                            <input id='security' className='form-input' placeholder='####' />
                        </div>
                        <h3 className='fw-bold'>${total}</h3>
                        <div className='d-grid'>
                            <button type="submit" className='btn btn-primary'>PAY NOW</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
  )
}
