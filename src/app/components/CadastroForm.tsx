'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface CadastroFormData {
  user: string;
  email: string;
}

const CadastroForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CadastroFormData>();

  const onSubmit: SubmitHandler<CadastroFormData> = async (data) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        username: data.user,
        password: data.email,
      });
      console.log('Cadastro realizado com sucesso:', response.data);
      window.location.href = '#';
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Cadastro de Usuário
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="user" className="sr-only">Nome de Usuário</label>
              <input
                {...register("user", { required: "Nome de usuário é obrigatório" })}
                id="user"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Nome de usuário"
              />
              {errors.user && (
                <p className="mt-1 text-sm text-red-600">{errors.user.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                {...register("email", { 
                  required: "Email é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email inválido"
                  }
                })}
                id="email"
                type="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email (será sua senha)"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CadastroForm;