'use client';

import { useRouter } from 'next/navigation';  // Usando o hook correto para o diretório app
import LoginForm from './components/LoginForm';// Certifique-se de importar o LoginForm corretamente
import { useAuth } from './context/AuthContext';  // Importando o hook de autenticação
import { useEffect, useState } from 'react';

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && isAuthenticated && !isLoading) {
      router.push('/home');
    }
  }, [isAuthenticated, isLoading, router, mounted]);

  if (!mounted || isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600" />
      </div>
    );
  }
  // Se o usuário não estiver autenticado, exibe o formulário de login
  return (
    
    <div className="left-aligned w-1/2 h-screen bg-white/80 shadow-md fixed left-0 top-0">
      <LoginForm />
    </div>
   

  );
}
