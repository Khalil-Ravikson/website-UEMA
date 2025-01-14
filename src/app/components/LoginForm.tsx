// components/LoginForm.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { loginUser } from '../services/api';
import { FaUser, FaLock } from 'react-icons/fa';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';


interface LoginFormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginFormData>();
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  // Adicionar verificação de autenticação
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && isAuthenticated) {
      router.push('/home');
    }
  }, [isAuthenticated, router, mounted]);

  if (!mounted) return null;
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await loginUser(data.username, data.password);

      if (response.status === 'success' && response.user) {
        login(response.user);
        // Removi o router.push daqui pois o useEffect já cuida do redirecionamento
      } else {
        setError('root', {
          type: 'manual',
          message: response.message || 'Erro ao fazer login. Verifique suas credenciais.'
        });
      }
    } catch (error) {
      setError('root', {
        type: 'manual',
        message: 'Erro ao conectar ao servidor. Tente novamente mais tarde.'
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-5 bg-gray-100 font-sans">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 tracking-wide">
          SEJA BEM VINDO !!!!
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Campo de usuário */}
        <div className="relative mb-5">
          <FaUser className="absolute top-1/2 left-3 -translate-y-1/2 text-xl text-purple-600" />
          <input
            type="text"
            {...register('username', { required: 'Nome de usuário é obrigatório' })}
            placeholder="Nome de usuário"
            className={`w-full pl-10 pr-3 py-3 rounded-md border text-black ${
              errors.username ? 'border-red-500' : 'border-gray-300'
            } text-base transition-all focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.username && (<p className="mt-1 text-xs text-red-500">{errors.username.message}</p>)}
        </div>

        {/* Campo de senha */}
        <div className="relative mb-5">
          <FaLock className="absolute top-1/2 left-3 -translate-y-1/2 text-xl text-purple-600" />
          <input
            type="password"
            {...register('password', { required: 'Senha é obrigatória' })}
            placeholder="Senha"
            className={`w-full pl-10 pr-3 py-3 rounded-md border text-black ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } text-base transition-all focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.password && (<p className="mt-1 text-xs text-red-500">{errors.password.message}</p>)}
        </div>

        {/* Erro geral */}
        {errors.root && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {errors.root.message}
          </div>
        )}

        {/* Botão de login */}
        <button
          type="submit"
          className="w-full py-3 px-4 mb-3 bg-purple-600 hover:bg-purple-700
                    text-white font-semibold rounded-md transition-colors
                    duration-300 focus:outline-none focus:ring-2
                    focus:ring-purple-500 focus:ring-offset-2"
        >
          ENTRAR
        </button>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Não tem uma conta?{' '}
        <Link className="text-purple-600 hover:text-purple-700" href="/home/loginCadastro/cadastro">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
