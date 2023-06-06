import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import AuthRegis from "./context/Auth";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <AuthRegis> */}
      <App />
    {/* </AuthRegis> */}
  </BrowserRouter>
);
