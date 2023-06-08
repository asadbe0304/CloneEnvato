import LoginTop from "./../Login/LoginTop";
import Right from "./SignRight";
import SignLeft from "./SignLeft";
import "./index.scss"
const index = () => {


  
  return (
    <>
      <div className="bg-login">
        <LoginTop />
        <div className="container">
          <div className="login w-100 px-4 d-flex align-items-center justify-content-between">
            <SignLeft />
            <Right />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
