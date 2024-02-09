import {NavLink} from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";
import { Search } from "../Sections/Search";
import { DropdownLogOut,DropdownLogin } from "../index";

export const Header = () => {
    const [darkMode , setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode"))|| false);

    useEffect(()=>{
        localStorage.setItem("darkMode", JSON.stringify(darkMode)); 
        if(darkMode){
            document.body.classList.add("darkMode");
        }else{
            document.body.classList.remove("darkMode"); 
        }
    },[darkMode])

    const [search , setSearch] = useState(false);
    const [dropdown,setDropdown] = useState(false);

  return (
    <>
        <header className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark fw-bold" style={{backgroundColor:"#001F3F"}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-5" to="/">Magar-shopping</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav ">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page">
                                    <i onClick={()=>setSearch(!search)} className="fas fa-search"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/cart">
                                    <i className="fas fa-shopping-cart position-relative">
                                        <span className="position-absolute start-100 translate-middle badge rounded-pill bg-danger" style={{top:"-7px" , fontSize:".7rem"}}>
                                            0
                                        </span>
                                    </i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page">
                                    <i onClick={()=>setDarkMode(!darkMode)} className="fas fa-cogs"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page">
                                    <i onClick={()=>setDropdown(!dropdown)} className="fas fa-user position-relative "></i>
                                </NavLink>
                            </li>
                        </ul>
                            {dropdown && <DropdownLogOut />}
                    </div>
                </div>
            </nav>
            {search &&  <Search setSearch={setSearch} />}
        </header>
    </>
  )
}
