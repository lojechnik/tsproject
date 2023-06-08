import { dataObjectType } from "./data-context";
import React, {
  createContext,
  SetStateAction,
  Dispatch,
  useState,
} from "react";
export type authContextType = {
  auth: string;
  setAuth: Dispatch<SetStateAction<string>>;
};
export const AuthContext = React.createContext<authContextType>({
  auth: "",
  setAuth: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [auth, setAuth] = useState<string>('');
  return (
    <AuthContext.Provider value={{ setAuth, auth }}>
      {children}
    </AuthContext.Provider>
  );
};
