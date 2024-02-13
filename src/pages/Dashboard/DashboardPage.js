import React, { useEffect, useState } from 'react';
import {EmptyDashboard} from "./components/EmptyDashboard";
import {DashboardCard} from "./components/DashboardCard";

export const DashboardPage = () => {
    const [orders,setOrders] = useState([]);
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"))
    useEffect(()=>{
        async function fetchOrders(){
            const response = await fetch(`http://localhost:8000/660/orders?user.id=${cbid}`,{
                method:'GET',
                headers:{'Content-Type':"application/json", Authorization: `Bearer ${token}`}
            });
            const data = await response.json();
            setOrders(data);
        }
        fetchOrders();
    },[])

  return (
        <main>
            <div className='container'>
                <div className='card'>
                    <h2 className='fw-bold text-center'>Dashboard</h2>
                    <section>
                        {orders.length && orders.map((order)=>(
                            <DashboardCard key={order.id} order={order} />
                        ))}
                    </section>
                    <section>
                        { !orders.length && <EmptyDashboard />}
                    </section>
                </div>
            </div>
        </main>
    )
}
