import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import React from "react";

export const Search = ({setSearch}) => {
    const navigate = useNavigate();
    const searchRef = useRef();
    const handleSearch = (event) => {
        event.preventDefault();
        setSearch(false);
        navigate(`/products?q=${searchRef.current.value}`)
    }
  return (
    <div className="container">
        <div className="row d-flex  justify-content-center align-items-center">
            <div className="col-md-5">
                <form onSubmit={handleSearch}>
                    <div className="input-group my-3">
                        <input ref={searchRef} type="text" name="search" className="form-control rounded-3 py-2" placeholder="Search" aria-label="Search" />
                        <div className=" ms-2 input-group-append">
                            <button className="btn btn-outline-secondary py-2" type="button">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
