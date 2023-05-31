import { Route, Routes } from "react-router-dom";
import Header from "./../components/header";
const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        
      </Routes>
    </>
  );
};

export default index;
