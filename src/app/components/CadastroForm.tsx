'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface CadastroFormData {
  user: string; // Nome de usuário
  email: string; // Email será usado como senha
}

const CadastroForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<CadastroFormData>();

  const onSubmit: SubmitHandler<CadastroFormData> = async (data) => {
    try {
      // Envia os dados para o JSONPlaceholder
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        username: data.user,
        password: data.email, // Simulando o email como senha
      });

      console.log('Cadastro realizado com sucesso:', response.data);
      window.location.href = '/'; // Redireciona para a página principal
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full p-5">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
        Cadastro de Usuário
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md p-5 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="user" className="block mb-1 font-semibold text-gray-700">
            Nome de Usuário
          </label>
          <input
            type="text"
            id="user"
            {...register('user', { required: 'Nome de usuário é obrigatório' })}
            placeholder="Digite o nome de usuário"
            className={`w-full px-3 py-2 rounded-md border  text-blue-950 ${
              errors.user ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.user && (
            <p className="mt-1 text-xs text-red-500">{errors.user.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-semibold text-gray-700">
            Email (será sua senha)
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Digite um email válido'
              }
              
            })}

            placeholder="Digite seu email"
            className={`w-full px-3 py-2 rounded-md border text-blue-950 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-purple-500`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 
                     text-white font-semibold rounded-md transition-colors 
                     duration-300 focus:outline-none focus:ring-2 
                     focus:ring-green-500 focus:ring-offset-2"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroForm;
