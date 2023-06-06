import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { BsApple } from "react-icons/bs";

const SignRight = () => {
  return (
    <>
      <div className="right-login mt-4">
        <div
          className="btn-group-vertical w-100 flex-column gap-3"
          role="group"
          aria-label="Vertical button group"
        >
          <button
            type="button"
            className="btn btn-outline-danger d-flex align-items-center  justify-content-center gap-2 rounded-2"
          >
            <FcGoogle />
            Google
          </button>
          <button
            type="button"
            className="btn btn-outline-dark  d-flex align-items-center  justify-content-center gap-2 rounded-2"
          >
            <BsApple />
            Apple
          </button>
          <button
            type="button"
            className="btn btn-outline-primary rounded-2  d-flex align-items-center  justify-content-center gap-2"
          >
            <SiFacebook />
            Facebook
          </button>
        </div>
        <div
          className="position-relative mt-4 d-flex line align-items-center justify-content-center my-2"
          style={{ zIndex: "-3" }}
        >
          <span className="position-absolute z-2 bg-white or">or</span>
        </div>
        <div className="w-100 d-flex gap-1 align-items-center mb-3 mt-4">
          <label htmlFor="floatingInut">
            Last Name
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Last name"
            />
          </label>
          <label htmlFor="floatingInut">
            First Name
            <input type="text" className="form-control mt-2" placeholder="First name" />
          </label>
        </div>
        <div className=" mb-3 mt-4"></div>
        <div className=" mb-3 mt-4">
          <label htmlFor="floatingInut">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="floatingPasswor">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button className="btn w-100 my-4 btn-danger">Create Account </button>

        <div className="new-account">
          New here?
          <NavLink to={"/signin"} className="mx-2">
            Create an Envato account
          </NavLink>
        </div>
        <div className="mt-3 login-footer d-flex justify-content-between align-items-center">
          <p className="login-bottom-text">
            Envato collects and uses personal data in accordance with our
            Privacy Policy. By creating an account, you agree to our Terms &
            Conditions.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignRight;
