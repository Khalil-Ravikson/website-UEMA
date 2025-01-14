'use client';
import { useState, useMemo } from 'react';
import { useFetchComments } from "../hooks/useFetchComments";

export const Filter = () => {
    const { comments, loading } = useFetchComments();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredComments = useMemo(() => {
        if (!searchTerm.trim()) return comments;
        
        return comments.filter(comment => 
            comment.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            comment.email?.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [comments, searchTerm]);

    return (
        <div className="bg-gray-200">
            <div className="flex justify-center items-center bg-gray-100 p-4 mt-3">
                <button
                    type="button"
                    className="btn btn-light mr-10 shadow-sm"
                    data-toggle="collapse"
                    data-target="#filters"
                >
                    Filtro <i className="fa fa-filter"></i>
                </button>
                <input
                    type="text"
                    className="border-2 p-2 w-1/2"
                    placeholder="Buscar por título ou email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            
            {/* Display filtered results */}
            <div className="p-4">
                {loading ? (
                    <div>Carregando...</div>
                ) : (
                    <div className="grid gap-4">
                        {filteredComments.map(comment => (
                            <div key={comment.id} className="p-4 bg-white rounded shadow">
                                <h3 className="font-bold">{comment.name}</h3>
                                <p>{comment.email}</p>
                                <p>{comment.body}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};