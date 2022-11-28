import { AuthContext } from "@contexts/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export { useAuth };
