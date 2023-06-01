import "./index.scss";
import Logo from "./logo";
import Input from "./input";
import Login from "./login";
const index = () => {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container">
          <div className="header d-flex align-items-center justify-content-between">
            <Logo />
            <Input />
            <Login />
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
