'use client'
import CenteredBox from "./components/CenteredBox";
import GradientBackground from "./components/GradientBackground";
import ImageBox from "./components/ImageBox";
import LoginForm from "./components/LoginForm";
import TransparentImage from "./components/TransparentImage";



export default function Home() {
  return (
    <div>
        <GradientBackground/>
        <div>
      

      {/* Conteúdo opcional */}
      

      <div>{<ImageBox />}</div>
      <TransparentImage src="/images/anime.png"
        alt="anime image"
        top="17vh" // Define a distância do topo
        bottom="10vh"
        left="54vw" // Define a distância da esquerda
        width="20vw" // Largura personalizada
        height="70vh" // Altura personalizada
      />
      <TransparentImage src="/images/578-5786396_akeno-dxd-hentai-hd-png-download.png"
        alt="anime image"
        top="10vh" // Define a distância do topo
        bottom="10vh"
        left="72vw" // Define a distância da esquerda
        width="27vw" // Largura personalizada
        height="31vw" // Altura personalizada
      />
      <TransparentImage src="/images/iori-Photoroom.png"
        alt="iori"
        top="27vh" // Define a distância do topo
        bottom="10vw"
        left="62vw" // Define a distância da esquerda
        width="26vw" // Largura personalizada
        height="60vh" // Altura personalizada
      />
    </div><div className="left-aligned w-1/2 h-screen bg-white/80 shadow-md fixed left-0 top-0"
      
     >
        <LoginForm />
      </div>
    </div>
  );
}
