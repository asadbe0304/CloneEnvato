import { useReducer, useContext, createContext } from "react";
import { cartReducer } from "./reducers";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const initialState = {
    auth: {},
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const CartState = () => {
  return useContext(AuthContext);
};
