import { css } from 'styled-components';
import { ILinkCustomProps } from './ILinkCustom';

export const stylesLink = css<ILinkCustomProps>`
  color: ${(props) => props.styles?.color || '#000'};
  font-size: ${(props) => props.styles?.fontSize || '16px'};
  font-weight: ${(props) => props.styles?.fontWeight || 'normal'};
  text-decoration: ${(props) => props.styles?.textDecoration || 'none'};
  text-transform: ${(props) => props.styles?.textTransform || 'none'};
  text-align: ${(props) => props.styles?.textAlign || 'left'};
  line-height: ${(props) => props.styles?.lineHeight || 'normal'};
  letter-spacing: ${(props) => props.styles?.letterSpacing || 'normal'};
  text-shadow: ${(props) => props.styles?.textShadow || 'none'};
  text-overflow: ${(props) => props.styles?.textOverflow || 'ellipsis'};
  background-color: ${(props) =>
    props.styles?.backgroundColor || 'transparent'};
  border-color: ${(props) => props.styles?.borderColor || 'transparent'};
  border-radius: ${(props) => props.styles?.borderRadius || '0px'};
  border-width: ${(props) => props.styles?.borderWidth || '1px'};
  padding-top: ${(props) => props.styles?.paddingVertical || '3px'};
  padding-bottom: ${(props) => props.styles?.paddingVertical || '3px'};
  padding-left: ${(props) => props.styles?.paddingHorizontal || '5px'};
  padding-right: ${(props) => props.styles?.paddingHorizontal || '5px'};
  margin-top: ${(props) => props.styles?.marginVertical || '0px'};
  margin-bottom: ${(props) => props.styles?.marginVertical || '0px'};
  margin-left: ${(props) => props.styles?.marginHorizontal || '0px'};
  margin-right: ${(props) => props.styles?.marginHorizontal || '0px'};
  transition: ${(props) => props.styles?.transition || 'all 0.2s ease-in-out'};

  :hover {
    color: ${(props) => props.styles?.colorHover || '#000'};
    background-color: ${(props) =>
      props.styles?.backgroundColorHover || 'transparent'};
    border-color: ${(props) => props.styles?.borderColorHover || 'transparent'};
  }
`;
