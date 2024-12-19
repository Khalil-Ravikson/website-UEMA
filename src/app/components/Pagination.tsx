import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        style={{
          marginRight: '10px',
          padding: '10px 20px',
          backgroundColor: '#6a11cb',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
        disabled={currentPage === 1}
      >
        Anterior
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        style={{
          padding: '10px 20px',
          backgroundColor: '#6a11cb',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
        disabled={currentPage === totalPages}
      >
        Próximo
      </button>
    </div>
  );
};
