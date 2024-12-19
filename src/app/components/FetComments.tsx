import { useState, useEffect } from 'react';
import axios from 'axios';
import { PostComment } from '../types/PostComment ';


export const useFetchComments = () => {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);  // Adicionando estado de erro

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setComments(response.data);
      } catch (error) {
        setError('Erro ao buscar comentários');  // Definindo o erro
        console.error('Erro ao buscar comentários:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  return { comments, loading, error };  // Retornando o erro junto com os dados e o loading
};
