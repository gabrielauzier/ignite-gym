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
  const defaultUser: User = {
    name: "Gabriel",
    email: "gabrielvascoauzier@gmail.com",
    id: "123",
    avatar: "gabriel.png",
  };

  const [user, setUser] = useState<User>(defaultUser);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
