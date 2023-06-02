import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const LoginTop = () => {
  return (
    <>
      <div className="login-top bg-white shadow py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h2>Envato</h2>
            <NavLink to={"/signin"}>
              <CgProfile />
              Sign In
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginTop;
