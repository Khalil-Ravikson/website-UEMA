// src/services/api.ts

import axios from 'axios';

// Criação de uma instância do axios para facilitar a configuração e reutilização.
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Base URL do JSONPlaceholder
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função de login (simulando autenticação)
export const loginUser = async (username: string, password: string) => {
  try {
    // Simulação de uma requisição para obter dados do usuário
    // Usando '/users' para simular um endpoint de autenticação
    const response = await api.get('/users', {
      params: { username }, // Passando o parâmetro 'username'
    });

    // Checando se o nome de usuário corresponde ao que foi encontrado
    const user = response.data.find((user: { username: string, email: string }) => user.username === username);
    
    if (user && user.email === password) {
      return { status: 'success', user }; // Sucesso no login
    } else {
      return { status: 'error', message: 'Usuário ou senha incorretos' };
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    return { status: 'error', message: 'Erro ao fazer login' };
  }
};

export default api;
