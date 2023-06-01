import { NavLink } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi";
const login = () => {
  return (
    <>
      <div>
        <HiAcademicCap />
        <NavLink to={"/login"}>Sign In</NavLink>
      </div>
    </>
  );
};

export default login;
