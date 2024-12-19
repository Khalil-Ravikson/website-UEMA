// src/components/Comments.tsx

import React, { useState } from 'react';
import { useFetchComments } from '../hooks/useFetchComments';
import { Pagination } from './Pagination';
import { PostComment } from '../types/PostComment ';


const Comments: React.FC = () => {
  const { comments, loading } = useFetchComments();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  if (loading) {
    return <p style={{ textAlign: 'center' }}>Carregando...</p>;
  }

  const paginatedComments = comments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Comentários</h2>
      <div>
        {paginatedComments.map((comment: PostComment) => (
          <div
            key={comment.id}
            style={{
              marginBottom: '15px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h4 style={{ marginBottom: '5px', color: '#333' }}>{comment.name}</h4>
            <p style={{ marginBottom: '5px', color: '#555' }}>
              <strong>Email:</strong> {comment.email}
            </p>
            <p style={{ color: '#666' }}>{comment.body}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={comments.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Comments;
