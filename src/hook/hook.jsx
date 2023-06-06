import { useContext } from "react";
import AuthRegis from "../context/Auth";
export const useAuth = () => {
  return useContext(AuthRegis);
};
