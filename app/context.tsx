import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavbarContextType {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbarContext must be used within a NavbarProvider');
  }
  return context;
};

interface NavbarProviderProps {
  children: ReactNode;
}

export const NavbarProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};
