'use client'

import CadastroForm from "../components/CadastroForm";
import GradientBackground from "../components/GradientBackground";



export default function Home() {
  return (
    <>
    <GradientBackground/>
    <div     style={{
      position: 'absolute', // Posiciona a div em relação ao viewport
      top: '50%',           // Centraliza verticalmente
      left: '50%',          // Centraliza horizontalmente
      transform: 'translate(-50%, -50%)', // Compensa metade da largura/altura
      zIndex: 1,            // Garante que está acima do gradiente
      width: '400px',       // Largura do quadrado
      height: '400px',      // Altura do quadrado
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Fundo semitransparente
      borderRadius: '10px', // Bordas arredondadas (opcional)
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',  // Sombra para destaque
      display: 'flex',      // Centraliza o conteúdo
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <CadastroForm/>
    </div>
    </>
    
  );
}
