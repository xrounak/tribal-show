'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthState {
  user: { id: string; email: string; name: string } | null;
  isLoggedIn: boolean;
}

const AuthContext = createContext<{
  auth: AuthState;
  setAuth: (auth: AuthState) => void;
  logout: () => void;
} | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState<AuthState>({ user: null, isLoggedIn: false });

  const logout = () => {
    setAuth({ user: null, isLoggedIn: false });
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
