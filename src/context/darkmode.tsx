import React, { createContext, useState, ReactNode } from "react";

interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}


const DarkModeContext = createContext<DarkModeContextType | null>(null);

interface DarkModeProviderProps {
  children: ReactNode;
}

const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const contextValue: DarkModeContextType = {
    darkMode,
    toggleDarkMode,
  };

  return <DarkModeContext.Provider value={contextValue}>{children}</DarkModeContext.Provider>;
};

export { DarkModeContext, DarkModeProvider };
