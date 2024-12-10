'use client';

import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form'; // Importando React Hook Form
import { loginUser } from '../services/api'; // Importando a função de login da api.ts
import { FaUser, FaLock } from 'react-icons/fa'; // Ícones

interface LoginFormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await loginUser(data.username, data.password);
      if (response.status === 'success') {
        console.log('Login bem-sucedido:', response.user);
      } else {
        console.error('Erro:', response.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px',
      backgroundColor: '#f4f4f4',
      fontFamily: 'Roboto, sans-serif',
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h2 style={{
          color: '#333',
          marginBottom: '15px',
          fontWeight: '600',
          fontSize: '26px',
          letterSpacing: '0.5px',
        }}>
          Casadas.com
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '400px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}>
        {/* Campo de usuário */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <FaUser style={{
            position: 'absolute',
            top: '50%',
            left: '15px',
            transform: 'translateY(-50%)',
            fontSize: '20px',
            color: '#6a11cb',
          }} />
          <input
            type="text"
            {...register('username', { required: 'Nome de usuário é obrigatório' })}
            placeholder="Nome de usuário"
            style={{
              padding: '12px 20px',
              paddingLeft: '40px',
              borderRadius: '5px',
              border: errors.username ? '1px solid red' : '1px solid #ccc',
              fontSize: '16px',
              width: '100%',
              transition: 'border-color 0.3s, background-color 0.3s',
            }}
          />
          {errors.username && <p style={{ color: 'red', fontSize: '12px' }}>{errors.username.message}</p>}
        </div>

        {/* Campo de senha */}
        <div style={{ position: 'relative', marginBottom: '20px' }}>
          <FaLock style={{
            position: 'absolute',
            top: '50%',
            left: '15px',
            transform: 'translateY(-50%)',
            fontSize: '20px',
            color: '#6a11cb',
          }} />
          <input
            type="password"
            {...register('password', { required: 'Senha é obrigatória' })}
            placeholder="Senha"
            style={{
              padding: '12px 20px',
              paddingLeft: '40px',
              borderRadius: '5px',
              border: errors.password ? '1px solid red' : '1px solid #ccc',
              fontSize: '16px',
              width: '100%',
              transition: 'border-color 0.3s, background-color 0.3s',
            }}
          />
          {errors.password && <p style={{ color: 'red', fontSize: '12px' }}>{errors.password.message}</p>}
        </div>

        {/* Botão de login */}
        <button
          type="submit"
          style={{
            padding: '12px 20px',
            backgroundColor: '#6a11cb',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s, transform 0.3s',
            marginBottom: '10px',
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#5a0ca3'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#6a11cb'}
        >
          Entrar
        </button>
      </form>

      <p style={{ fontSize: '14px', color: '#777' }}>
        Não tem uma conta? <a href="#" style={{ color: '#6a11cb' }}>Cadastre-se</a>
      </p>
    </div>
  );
};

export default LoginForm;
