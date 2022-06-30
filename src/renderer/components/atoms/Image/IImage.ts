export interface IImageProps {
  src: string;
  alt: string;
  className?: string;
  styles?: IImageStyles;
}

interface IImageStyles {
  width?: string;
  height?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
}
