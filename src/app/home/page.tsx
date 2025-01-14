'use client'

import CommentForm from "@/app/components/CommentForm";
import Comments from "@/app/components/Comments";

import ProtectedPage from "../components/ProtectedPage";
import { AuthProvider } from "../context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
    return (
<AuthProvider>
<ProtectedPage >
  <div className="flex flex-col mx-3 mt-6 lg:flex-row justify-between">
  
  <CommentForm />

    {/* Centralizar o conteúdo */}
  <div className="w-full lg:w-2/3 m-1 bg-white shadow-lg text-lg rounded-sm border border-gray-200">

    <div className="overflow-x-auto rounded-lg p-3">
      {/* Comentários */}
      <div className="bg-white p-6 rounded-lg shadow-md text-black">
        
        <Comments />
      </div>
    </div>
  </div>
</div>
</ProtectedPage>  
      
</AuthProvider>



    );
  }

  