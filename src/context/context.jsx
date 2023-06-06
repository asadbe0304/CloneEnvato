import {
  useReducer,
  useContext,
  createContext
} from "react";
import { cartReducer } from "./reducers";


const initialState = {
  product: [],
};
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  // const [auth, setAuth] = useState({});
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

export const CartState = () => {
  return useContext(AuthContext);
};