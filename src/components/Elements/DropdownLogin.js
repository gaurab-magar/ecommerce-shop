import { Link, useNavigate } from "react-router-dom";
import React from "react";

export const DropdownLogin = ({setDropdown}) => {
  const navigate = useNavigate();

  function handleLogout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cbid");
    setDropdown(false);
    navigate('/login');
  }
  return (
    <div className="card border-0 bg-light dropdown-menu dropdown-menu-end position-absolute" style={{ bottom: '-80px', right: '0', zIndex: '100' }}>
        <div className="px-2">
            <ul className="list-unstyled">
                <li><Link onClick={() => setDropdown(false)} className="px-2  d-inline  py-1 dropdown-item bg-grey fw-semibold" to="/dashboard">Dashboard</Link></li>
                <li><Link onClick={() => setDropdown(false)} className="px-2  d-inline py-1 dropdown-item bg-grey fw-semibold" to="/products">All eBooks</Link></li>
                <li><Link onClick={handleLogout} className="px-2  d-inline py-1 dropdown-item bg-grey fw-semibold" to="/logout">Log Out</Link></li>
            </ul>
        </div>
    </div>
  )
}
