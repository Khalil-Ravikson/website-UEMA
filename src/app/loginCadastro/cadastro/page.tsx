'use client'

import Comments from "@/app/components/Comments";
import GradientBackground from "@/app/components/GradientBackground";

export default function Home() {
    return (
<div className="relative min-h-screen">
  {/* Gradient Background */}
  <GradientBackground />

  {/* Centralizar o conteúdo */}
  <div className="flex justify-center items-center min-h-screen relative z-10">
    <div className="w-full max-w-4xl px-4 py-6">
      {/* Comentários */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Comments />
      </div>
    </div>
  </div>
</div>


    );
  }

  