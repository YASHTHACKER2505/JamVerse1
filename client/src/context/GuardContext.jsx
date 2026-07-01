import { createContext, useContext, useEffect, useState } from "react";

const GuardContext = createContext();

export const GuardProvider = ({ children }) => {
  const [guard, setGuard] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("guardToken") || ""
  );

  useEffect(() => {
    const storedGuard = localStorage.getItem("guard");

    if (storedGuard) {
      setGuard(JSON.parse(storedGuard));
    }
  }, []);

  const login = (guardData, jwtToken) => {
    setGuard(guardData);
    setToken(jwtToken);

    localStorage.setItem("guard", JSON.stringify(guardData));
    localStorage.setItem("guardToken", jwtToken);
  };

  const logout = () => {
    setGuard(null);
    setToken("");

    localStorage.removeItem("guard");
    localStorage.removeItem("guardToken");
  };

  return (
    <GuardContext.Provider
      value={{
        guard,
        token,
        login,
        logout,
      }}
    >
      {children}
    </GuardContext.Provider>
  );
};

export const useGuard = () => useContext(GuardContext);