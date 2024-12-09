'use client';

import React, { useState, useEffect } from 'react';
import { LoginFormData } from '../types/LoginFormData';
import { FaUser, FaLock } from 'react-icons/fa'; // Importando ícones para o formulário

const LoginForm: React.FC = () => {
    const [formData, setFormData] = useState<LoginFormData>({ username: '', password: '' });
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Dados do Login:', formData);
        // Lógica de autenticação
    };

    if (!isClient) {
        return null;
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            padding: '20px',
            backgroundColor: '#f4f4f4', // Cor de fundo suave
            fontFamily: 'Roboto, sans-serif', // Fonte mais moderna e limpa
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>

                <h2 style={{
                    color: '#333',
                    marginBottom: '15px',
                    fontWeight: '600', // Fonte mais grossa para destacar
                    fontSize: '26px', // Tamanho maior para um destaque visual
                    letterSpacing: '0.5px', // Um pequeno espaçamento nas letras para mais legibilidade
                }}>
                    Casadas.com
                </h2>
            </div>

            <form onSubmit={handleSubmit} style={{
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
                        name="username"
                        placeholder="Nome de usuário"
                        value={formData.username}
                        onChange={handleChange}
                        style={{
                            padding: '12px 20px',
                            paddingLeft: '40px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '16px',
                            width: '100%',
                            transition: 'border-color 0.3s, background-color 0.3s',
                        }}
                    />
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
                        name="password"
                        placeholder="Senha"
                        value={formData.password}
                        onChange={handleChange}
                        style={{
                            padding: '12px 20px',
                            paddingLeft: '40px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '16px',
                            width: '100%',
                            transition: 'border-color 0.3s, background-color 0.3s',
                        }}
                    />
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
