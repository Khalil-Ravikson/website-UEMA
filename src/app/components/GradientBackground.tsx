'use client'
import CenteredBox from "./CenteredBox";
import ImageBox from "./ImageBox";


import TransparentImage from "./TransparentImage";


const GradientBackground = () => (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(to right, #6a11cb, #000000)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Para os elementos ficarem lado a lado
  }}>
      {/* Conteúdo opcional */}
      <CenteredBox/>
      <div>{
        <ImageBox/>

      }</div>
      <TransparentImage src = "/images/anime.png" 
      alt="anime image"
      top="17vh"       // Define a distância do topo
      bottom="10vh"       
      left="54vw"      // Define a distância da esquerda
      width="20vw"     // Largura personalizada
      height="70vh"    // Altura personalizada

      />
      <TransparentImage src = "/images/578-5786396_akeno-dxd-hentai-hd-png-download.png" 
      alt="anime image"
      top="10vh"       // Define a distância do topo
      bottom="10vh"       
      left="72vw"      // Define a distância da esquerda
      width="27vw"     // Largura personalizada
      height="31vw"    // Altura personalizada
      />
      <TransparentImage src = "/images/iori-Photoroom.png" 
      alt="iori"
      top="27vh"       // Define a distância do topo
      bottom="10vw"       
      left="62vw"      // Define a distância da esquerda
      width="26vw"     // Largura personalizada
      height="60vh"    // Altura personalizada
      />
    </div>
  );
  
  export default GradientBackground;
  