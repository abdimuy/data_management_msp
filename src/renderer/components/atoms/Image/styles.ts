import { css } from 'styled-components';
import { IImageProps } from './IImage';

export const stylesImage = css<IImageProps>`
  width: ${(props) => props.styles?.width || 'auto'};
  height: ${(props) => props.styles?.height || 'auto'};
  border-radius: ${(props) => props.styles?.borderRadius || '0px'};
  border-width: ${(props) => props.styles?.borderWidth || '0px'};
  border-color: ${(props) => props.styles?.borderColor || 'transparent'};
  border-style: solid;
`;
