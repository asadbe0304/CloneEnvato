import { Route, Routes } from "react-router-dom";
import Header from "./../components/header";
import Signin from "./../pages/Signin";
import Login from "../pages/Login";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default index;
