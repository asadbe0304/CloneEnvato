import "./index.scss";
import LoginTop from "./LoginTop";
import Left from "./leftlogin";
import Right from "./right";
const index = () => {
  return (
    <>
    <div className="bg-login">
      <LoginTop />
      <div className="container">
        <div className="login w-100 px-4 d-flex align-items-center justify-content-between">
          <Left />
          <Right />
        </div>
      </div>
    </div>
    </>
  );
};

export default index;
