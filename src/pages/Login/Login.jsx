import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

const {signIn} = useContext(AuthContext)
const location = useLocation()
const navigate = useNavigate()
console.log(location);
  const handleLogin = (e)=>{
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email," ",password);

    signIn(email,password)
    .then(result=>{
      console.log(result.user);
      navigate(location.state? location.state : "/")
    })
    .catch(error=>{
      console.error(error)
    })
    // console.log(e.currentTarget);
    // const form = new FormData(e.currentTarget)
    // console.log(form.get('password'));
  }


  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        <h2 className="text-3xl text-center">Please Login </h2>
        <div className="card w-full mx-auto max-w-sm shadow-2xl  bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="mt-4 text-center p-4">Don`t have and account? <Link className="text-blue-500" to="/register" >register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
