'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication status on mount
    const checkAuth = () => {
      const savedUser = localStorage.getItem('user');
      const sessionId = localStorage.getItem('session_id');
      
      if (savedUser && sessionId) {
        try {
          const parsedUser = JSON.parse(savedUser);
          setIsAuthenticated(true);
          setUser(parsedUser);
        } catch (error) {
          console.error('Error loading user from localStorage:', error);
          localStorage.removeItem('user');
          localStorage.removeItem('session_id');
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (userData: User) => {
    try {
      const sessionId = Date.now().toString();
      localStorage.setItem('session_id', sessionId);
      localStorage.setItem('user', JSON.stringify(userData));
      setIsAuthenticated(true);
      setUser(userData);
      router.push('/home'); // Redirect after login
    } catch (error) {
      console.error('Error saving login data:', error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem('session_id');
      localStorage.removeItem('user');
      setIsAuthenticated(false);
      setUser(null);
      router.push('/'); // Redirect to login
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};