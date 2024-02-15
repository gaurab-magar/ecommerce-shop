import React, { useEffect, useState } from 'react';
import {EmptyDashboard} from "./components/EmptyDashboard";
import {DashboardCard} from "./components/DashboardCard";
import { getUserOrders } from '../../Services/dataService';
import {useTitle} from "../../Hooks/useTitle";

export const DashboardPage = () => {
    const [orders,setOrders] = useState([]);
    useTitle(`Dashboard`);

    useEffect(()=>{
        async function fetchOrders(){
            try{
                const data = await getUserOrders();
                setOrders(data);
            }catch(error){
                toast.error(error.message);
            }
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
