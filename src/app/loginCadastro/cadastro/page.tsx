'use client'

import CommentForm from "@/app/components/CommentForm";
import Comments from "@/app/components/Comments";


export default function Home() {
    return (
<div className=" bg-gradient-to-r from-purple-600 to-black items-center justify-between
  ">
  {/* Gradient Background */}
  <div className="header bg-white h-16 px-10 py-8 border-b-2 border-gray-200 flex items-center justify-between">
  <div className="flex items-center space-x-2 text-gray-400">
    <span className="text-green-700 tracking-wider font-thin text-md">
      <a href="#">Home</a>
    </span>
    <span>/</span>
    <span className="tracking-wide text-md">
      <span className="text-base">Categories</span>
    </span>
    <span>/</span>
  </div>
</div>
  <div className="header my-3 h-12 px-10 flex items-center justify-between">
            <h1 className="font-medium text-2xl">POSTE</h1>
        </div>
  <div className="flex flex-col mx-3 mt-6 lg:flex-row justify-between">
  <CommentForm/>
  
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
</div>

    );
  }

  