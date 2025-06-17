import { createContext, useState } from "react";

export type User = {
  username: string;
  role: string;
  token: string;
};

type AuthContextType = {
  user: User | null;
  userLoggedIn: boolean;
  login: (user: User) => void;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userLoggedIn, setUserLoggedIn] = useState<boolean>(false);
  const login = (user: User) => {
    setUser(user);
    setUserLoggedIn(true);
    localStorage.setItem("token", user.token);
  };

  const logout = () => {
    setUser(null);
    setUserLoggedIn(false);
    localStorage.removeItem("token");
  };
  return (
    <AuthContext.Provider value={{ user, userLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
