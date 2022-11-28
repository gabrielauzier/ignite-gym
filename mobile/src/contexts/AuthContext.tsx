import { UserDTO } from "@dtos/UserDTO";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface User extends UserDTO {}

interface IAuthContextData {
  user: User;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as IAuthContextData);

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({} as User);

  const defaultUser: User = {
    name: "Gabriel",
    email: "gabrielvascoauzier@gmail.com",
    id: "123",
    avatar: "gabriel.png",
  };

  useEffect(() => {
    setUser(defaultUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user: defaultUser }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export { AuthContextProvider, useAuth };
