import { Route, Routes } from "react-router-dom";
import Header from "./../components/header";
import Signin from "./../pages/Signin";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};

export default index;
