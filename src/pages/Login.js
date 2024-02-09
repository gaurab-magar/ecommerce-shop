import { useRef } from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {toast} from  'react-toastify';
export const Login = () => {

  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  async function handleLogin(event){
    event.preventDefault();

    const authDetail = {
      email: email.current.value,
      password: password.current.value
    }

    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(authDetail)
    }

    const response = await fetch("http://localhost:8000/users", requestOptions);
    const data = await response.json();
    console.log(data)
    return data ? (navigate("/products"), alert("Login Successful")) :toast.error('Invalid Credentials')
  }
  return (
    <main>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h1 className="my-5 fw-bold">Login</h1>
        <div className="card shadow border-0 bg-light w-50">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div class="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input ref={email} type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="password" className="form-label">Your Password</label>
                <input ref={password} type="password" className="form-control" id="password" placeholder="your password here" />
              </div>
              <div className="my-3 d-grid">
                <button type="submit" className="btn btn-primary fw-bold rounded-3 py-2">Log In</button>
              </div>
              <h4 className="text-center">Haven't create Account?</h4>
              <Link to="/register">
                <div className="my-3 d-grid">
                  <button type="submit" className="btn btn-secondary fw-bold rounded-3 py-2">Register</button>
                </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
