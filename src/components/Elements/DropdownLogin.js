import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getUser, logOut } from "../../Services";
import { toast } from "react-toastify";

export const DropdownLogin = ({setDropdown}) => {
  const navigate = useNavigate();
  const [user , setUser] = useState({});

  useEffect(()=>{
    async function fetchData(){
      try{
        const data = await getUser()
        data.email ? setUser(data) : handleLogout();
      }catch(error){
        toast.error(error.message);
      }
    }
    fetchData()
  },[]);

  function handleLogout(){
    logOut();
    setDropdown(false);
    navigate('/login');
  }
  return (
    <div className="card border-0 bg-light dropdown-menu dropdown-menu-end position-absolute" style={{ bottom: '-80px', right: '0', zIndex: '100' }}>
        <div className="px-2">
            <ul className="list-unstyled">
                <li><p onClick={() => setDropdown(false)} className="px-2  d-inline  py-1 dropdown-item bg-grey fw-semibold">{user.email}</p></li>
                <li><Link onClick={() => setDropdown(false)} className="px-2  d-inline  py-1 dropdown-item bg-grey fw-semibold" to="/dashboard">Dashboard</Link></li>
                <li><Link onClick={() => setDropdown(false)} className="px-2  d-inline py-1 dropdown-item bg-grey fw-semibold" to="/products">All eBooks</Link></li>
                <li><Link onClick={handleLogout} className="px-2  d-inline py-1 dropdown-item bg-grey fw-semibold" to="/logout">Log Out</Link></li>
            </ul>
        </div>
    </div>
  )
}
