// src/hooks/useFetchComments.ts

import { useState, useEffect } from 'react';
import { fetchComments } from '../services/api';  // Importa a função fetchComments
import { PostComment } from '../types/PostComment ';


export const useFetchComments = () => {
  const [comments, setComments] = useState<PostComment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComments = async () => {
      try {
        const data = await fetchComments(); // Usa a função fetchComments para pegar os dados
        setComments(data);
      } catch (error) {
        console.error('Erro ao buscar os comentários:', error);
      } finally {
        setLoading(false);
      }
    };

    loadComments();
  }, []);

  return { comments, loading };
};
