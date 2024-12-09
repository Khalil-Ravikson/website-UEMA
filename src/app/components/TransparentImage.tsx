import Image, { ImageProps } from 'next/image';

interface TransparentImageProps extends Omit<ImageProps, 'src' | 'width' | 'height'> {
  src: string;
  alt: string;
  width?: string;   // Agora é apenas para o contêiner div
  height?: string;
  top?: number | string;
  bottom?: number | string;
  right?: number | string;
  left?: number | string;
}

const TransparentImage = ({ src, alt, width, height, top, bottom, right, left, ...props }: TransparentImageProps) => {
  return (
    <div style={{
      width: width || '40vw',  // Aplicado no contêiner
      height: height || '80vh',
      position: 'absolute',
      top: top ?? 'auto',
      bottom: bottom ?? 'auto',
      right: right ?? 'auto',
      left: left ?? 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
      overflow: 'hidden',
      background: 'transparent'
    }}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" {...props} />
    </div>
  );
};

export default TransparentImage;
