import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const LoginTop = () => {
  return (
    <>
      <div className="login-top bg-white shadow py-2">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h2>
              <a href="/" className="text-decoration-none text-dark">Envato</a>
            </h2>
            <NavLink
              to={"/signin"}
              className={
                "text-decoration-none text-dark d-flex align-items-center justify-content-between"
              }
            >
              <CgProfile
                className="text-black mx-2"
                style={{ width: "25px", height: "25px" }}
              />
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginTop;
