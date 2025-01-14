// components/ProtectedPage.tsx
'use client';

import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

interface ProtectedPageProps {
  children: ReactNode;
}

const ProtectedPage: React.FC<ProtectedPageProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // Adicionando um pequeno delay para evitar flash de conteúdo
    const checkAuth = setTimeout(() => {
      if (!isAuthenticated) {
        router.push('/');
      }
    }, 100);

    return () => clearTimeout(checkAuth);
  }, [isAuthenticated, router]);

  // Mostra um loading enquanto verifica a autenticação
  if (!isAuthenticated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedPage;