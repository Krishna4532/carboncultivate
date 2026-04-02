"use client";
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext<any>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [userCredits, setUserCredits] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <UserContext.Provider value={{ userCredits, setUserCredits, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);