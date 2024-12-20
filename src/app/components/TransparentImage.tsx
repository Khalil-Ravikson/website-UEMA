import Image, { ImageProps } from 'next/image';

interface TransparentImageProps extends Omit<ImageProps, 'src' | 'width' | 'height'> {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  top?: number | string;
  bottom?: number | string;
  right?: number | string;
  left?: number | string;
}

const TransparentImage = ({ 
  src, 
  alt, 
  width = '40vw', 
  height = '80vh', 
  top = 'auto', 
  bottom = 'auto', 
  right = 'auto', 
  left = 'auto', 
  ...props 
}: TransparentImageProps) => {
  // Create dynamic styles for positioning
  const positionStyle = {
    top: top !== 'auto' ? top : undefined,
    bottom: bottom !== 'auto' ? bottom : undefined,
    right: right !== 'auto' ? right : undefined,
    left: left !== 'auto' ? left : undefined,
    width,
    height,
  };

  return (
    <div 
      className="absolute flex justify-center items-center rounded-lg overflow-hidden bg-transparent"
      style={positionStyle}
    >
      <Image 
        src={src} 
        alt={alt} 
        fill 
        className="object-cover"
        {...props} 
      />
    </div>
  );
};

export default TransparentImage;