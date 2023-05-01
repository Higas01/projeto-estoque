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
  verifyToken: () => Promise<boolean>;
  loading: boolean | null;
}

const url = "https://projeto-estoque.onrender.com/token";

const authContext = createContext({} as authContextProps);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean | null>(null);

  interface TokenValidationResponse {
    message: string;
  }

  const verifyToken = async () => {
    setLoading(true);
    const tokenJSON: string | null = localStorage.getItem("token");
    const token = tokenJSON ? JSON.parse(tokenJSON) : null;
    const value = {
      token: token,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const data = await response.json();

    if ((data as TokenValidationResponse).message === "Token válidado") {
      setAuthenticated(true);
      setLoading(false);
      return data;
    } else {
      setLoading(false);
      return data;
    }
  };

  return (
    <authContext.Provider
      value={{ authenticated, setAuthenticated, verifyToken, loading }}
    >
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthProvider };
