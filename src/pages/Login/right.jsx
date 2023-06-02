import { NavLink } from "react-router-dom";

const right = () => {
  return (
    <>
      <div className="right-login mt-4">
        <div
          className="btn-group-vertical w-100 flex-column gap-3"
          role="group"
          aria-label="Vertical button group"
        >
          <button type="button" className="btn btn-outline-danger rounded-2">
            Google
          </button>
          <button type="button" className="btn btn-outline-dark rounded-2">
            Apple
          </button>
          <button type="button" className="btn btn-outline-primary rounded-2">
            Facebook
          </button>
        </div>
        <div className="d-flex w-100 align-items-center justify-content-center my-2">
          or
        </div>
        <div className=" mb-3 mt-4">
          <label htmlFor="floatingInut">Email address</label>
          <input
            type="email"
            className="form-control"
            // id="floatingInput"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 mt-4">
          <label htmlFor="floatingPasswor">Password</label>
          <input
            type="password"
            className="form-control"
            // id="floatingPassword"
            placeholder="Password"
          />
        </div>
        <button className="btn w-100 my-4 btn-danger">Sign in </button>

        <div className="new-account">
          New here?
          <NavLink to={"/signin"} className="mx-2">  Create an Envato account</NavLink>
        </div>
        <div className="mt-3 login-footer d-flex justify-content-between align-items-center">
          <p className="login-bottom-text">
          Envato collects and uses personal data in accordance with our Privacy Policy. By creating an account, you agree to our Terms & Conditions.
          </p>
        </div>
      </div>
    </>
  );
};

export default right;
