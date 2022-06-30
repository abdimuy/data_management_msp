import styled from 'styled-components';
import { stylesImage } from './styles';
import { IImageProps } from './IImage';

const Image = (props: IImageProps) => {
  const { src, alt, className } = props;
  return <img src={src} alt={alt} className={className} />;
};

const StyledImage = styled(Image)`
  ${stylesImage}
`;

export default StyledImage;
