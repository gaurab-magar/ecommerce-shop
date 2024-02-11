import {useNavigate} from "react-router-dom";
import axios from "axios";
import {checkEmailExists} from "../components/Other/IsValidate";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

export const Register = () => {
  const navigate = useNavigate();

  async function handleRegister(event) {
    try {
      event.preventDefault();
      const authDetail = { 
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value
      };
  
      const emailExist = await checkEmailExists(authDetail.email);
      if(emailExist){
        toast.error("Error: Email already exists");
        return; // Exit function if email already exists
      }  
  
      const response = await axios.post('http://localhost:8000/users', authDetail);
      const data = response.data;
  
      if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken));
        sessionStorage.setItem("cbid", JSON.stringify(data.users.id));
        navigate("/products");
      } else {
        // Handle case where accessToken is not received
        toast.error("Error: Registration failed");
      }
    } catch (error) {
      console.error('Error: Registration failed', error);
      toast.error("Error: Registration failed");
    }
  }

  return (
    <main>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="my-5 fw-bold">Register</h1>
        <div className="card shadow border-0 bg-light w-50">
          <div className="card-body">
            <form onSubmit={handleRegister}>
                <div class="mb-3">
                    <label htmlFor="name" className="form-label">Your name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Your name" />
                </div>
                <div class="mb-3">
                    <label htmlFor="email" className="form-label">Your email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Your email here" />
                </div>
                <div class="mb-3">
                    <label htmlFor="password" className="form-label">Your password</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Your password here" />
                </div>
                <div className="my-4 d-grid">
                    <button type="submit" className="btn btn-primary fw-bold rounded-3 py-2">Register</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
