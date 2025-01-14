import React, { useState } from 'react';
import { useFetchComments } from '../hooks/useFetchComments';
import { Pagination } from './Pagination';

import Image from 'next/image';
import { PostComment } from '../types/PostComment ';

const Comments: React.FC = () => {
  const { comments, loading } = useFetchComments();
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedPostId, setExpandedPostId] = useState<PostComment['id'] | null>(null);
  const itemsPerPage = 6;

  const handleExpandPost = (id: PostComment['id']) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Carregando...</p>;
  }

  const paginatedComments = comments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-5 font-sans">
      <h2 className="text-center text-2xl font-semibold mb-6 text-gray-700">Comentários</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedComments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 border border-gray-300 rounded-md bg-gray-50 shadow-sm flex flex-col"
          >
            {/* Imagem do Post - Agora no topo */}
            <div className="w-full aspect-video mb-4 relative overflow-hidden rounded-md">
              <Image
                src={comment.image || "/images/default-featured-image.jpg"}
                alt="Post image"
                fill
                className="object-cover"
              />
            </div>

            {/* Autor e Email - Layout melhorado */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="flex-shrink-0 w-12 h-12 relative">
                <Image
                  src={comment.avatar || "/images/simple-user-default-icon-free-png.webp"}
                  alt={comment.name}
                  fill
                  className="rounded-full object-cover border border-gray-200"
                />
              </div>
              <div className="min-w-0 flex-1"> {/* Permite que o texto quebre adequadamente */}
                <h4 className="text-lg font-medium text-gray-800 truncate">{comment.name}</h4>
                <p className="text-sm text-gray-600 truncate">{comment.email}</p>
              </div>
            </div>

            {/* Corpo do Comentário */}
            <div className="flex-1">
              <div
                className={`text-gray-700 ${
                  expandedPostId !== comment.id && "line-clamp-3"
                }`}
              >
                {comment.body}
              </div>
              
              {/* Botão Ver Mais */}
              {comment.body.length > 150 && (
                <button
                  onClick={() => handleExpandPost(comment.id)}
                  className="mt-2 text-blue-500 hover:text-blue-600 font-medium text-sm"
                >
                  {expandedPostId === comment.id ? "Ver menos" : "Ver mais"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalItems={comments.length}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Comments;