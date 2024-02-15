import { useRef } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {toast} from  'react-toastify';
import{login} from '../Services';
import React from "react";
import { useTitle } from "../Hooks/useTitle";

export const Login = () => {
  useTitle("login-page")
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  async function handleLogin(event){
    event.preventDefault();
    try{
      const authDetail = {
        email: email.current.value,
        password: password.current.value
      }
      const data = await login(authDetail);
      data.accessToken? navigate('/products'):toast.error(data);
    }catch(error){
      toast.error(error.messgae)
    }
  }

  // async function handleLogin(event){
  //   event.preventDefault();

  //   const authDetail = {
  //     email: email.current.value,
  //     password: password.current.value
  //   }
  //   if(!authDetail.email || !authDetail.password) return toast("All fields are required",{type:"error"});
    
  //   try{
  //     const response = await fetch('http://localhost:8000/users',
  //     {
  //       method:'POST' ,
  //       headers:{
  //         'Content-Type':'application/json'
  //       },
  //       body:JSON.stringify(authDetail)
  //     });
  //     const data = await response.json() ;
  //     console.log(data);
      
  //     if (data) {
  //       toast("login Succesfull");
  //       navigate('/');
  //     }else{
  //       throw new Error ('Invalid Email or Password')
  //     }
  //   }catch(err) {
  //     console.log(err);
  //     toast(err.message ? err.message : 'Server error',{type:"error"});
  //   }
  //   if(data.accesToken){
  //     sessionStorage.setItem("token", JSON.stringify(data.accesToken));
  //     sessionStorage.setItem("cbid", JSON.stringify(data.users.id));
  //   }
  // }
    // const requestOptions = {
    //   method: "POST",
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(authDetail)
    // }

    // const response = await fetch("http://localhost:8000/users", requestOptions);
    // const data = await response.json();
    // console.log(data)
    // return data ? (navigate("/products"), alert("Login Successful")) :toast.error('Invalid Credentials')
  // }
  async function handleLoginGuest(){
    email.current.value = REACT_APP_GUEST_EMAIL,
    password.current.value = REACT_APP_GUEST_PASSWORD ;
    try{
      const data = await login({email:email.current.value,password:password.current.value});
      data.accessToken ? navigate('/products'):toast.error(error.messgae);
    }catch(error){
      toast.error(error.messgae)
    }
  }
  return (
    <main>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="my-5 fw-bold">Login</h1>
        <div className="card shadow border-0 bg-light w-50">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input ref={email} type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Your Password</label>
                <input ref={password} type="password" className="form-control" id="password" placeholder="your password here" />
              </div>
              <div className="my-3 d-grid">
                <button type="submit" className="btn btn-primary fw-bold rounded-3 py-2">Log In</button>
              </div>
              <h4 className="text-center">Haven't create Account?</h4>
              <div className="my-3 d-grid">
                <Link to="/register" type="submit" className="btn btn-secondary fw-bold rounded-3 py-2">Register</Link>
              </div>
            </form>
            <button onClick={handleLoginGuest} className="btn btn-primary fw-bold rounded-3 py-2">Login as Guest</button>
          </div>
        </div>
      </div>
    </main>
  )
}
