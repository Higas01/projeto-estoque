import {
  createContext,
  ReactNode,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
interface authContextProps {
  authenticated: boolean;
  setAuthenticated: Dispatch<SetStateAction<boolean>>;
}
const authContext = createContext({} as authContextProps);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <authContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
