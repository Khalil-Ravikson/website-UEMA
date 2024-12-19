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
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      padding: '20px',
    
      fontFamily: 'Roboto, sans-serif',
    }}>
      <h2 style={{
        color: '#333',
        marginBottom: '20px',
        fontWeight: '600',
        fontSize: '26px',
        textAlign: 'center',
      }}>
        Cadastro de Usuário
      </h2>

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
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="user" style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#555',
          }}>
            Nome de Usuário
          </label>
          <input
            type="text"
            id="user"
            {...register('user', { required: 'Nome de usuário é obrigatório' })}
            placeholder="Digite o nome de usuário"
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: errors.user ? '1px solid red' : '1px solid #ccc',
              fontSize: '14px',
              width: '100%',
            }}
          />
          {errors.user && <p style={{ color: 'red', fontSize: '12px' }}>{errors.user.message}</p>}
        </div>

        {/* Campo de email (senha) */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{
            display: 'block',
            marginBottom: '5px',
            fontWeight: 'bold',
            color: '#555',
          }}>
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
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: errors.email ? '1px solid red' : '1px solid #ccc',
              fontSize: '14px',
              width: '100%',
            }}
          />
          {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}
        </div>

        {/* Botão de cadastro */}
        <button type="submit" style={{
          padding: '12px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroForm;
