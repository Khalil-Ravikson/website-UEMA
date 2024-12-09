import React from 'react';

const ImageBox: React.FC = () => {
  const squareStyle: React.CSSProperties = {
    width: '450px',
    height: '430px',
    position: 'absolute',
    top: '75px',
    left: '700px',
    bottom: 'auto',
    border: '1px solid rgba(255, 255, 255, 0.5)', // Borda semi-transparente
    backgroundColor: 'rgba(0, 0, 0, 0.2)',       // Fundo semi-transparente
    display: 'flex',

  };

  return (
    <div style={squareStyle}>
      {/* Conteúdo opcional */}
    </div>
  );
};

export default ImageBox;
