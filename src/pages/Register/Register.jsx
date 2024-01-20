import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

const {createUser} = useContext(AuthContext)

    const handleRegister = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password =e.target.password.value
         const name = e.target.name.value;
        const photo =e.target.photo.value
        console.log(email,password, name, photo);


        //create User
      createUser(email,password)
      .then(result=>{
        console.log(result.user);
      })
      .catch(error=>{
        console.error(error)
      })
    }
  return (
    <div>
      <Navbar></Navbar>

      <div className="">
        <h2 className="text-3xl text-center">Please Register</h2>
        <div className="card w-full mx-auto max-w-sm shadow-2xl  bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>  
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Photo Url"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="mt-4 text-center p-4">
            Already have and account?{" "}
            <Link className="text-blue-500" to="/login">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
