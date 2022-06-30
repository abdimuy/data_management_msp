import { css } from 'styled-components';
import { ITextProps } from './IText';
import { PRIMARY_FONT_COLOR } from 'contants';

export const textStyles = css<ITextProps>`
  color: ${({ styles }) => styles?.color || PRIMARY_FONT_COLOR};
  font-size: ${({ styles }) => styles?.fontSize || '16px'};
  font-weight: ${({ styles }) => styles?.fontWeight || 'normal'};
  text-align: ${({ styles }) => styles?.textAlign || 'left'};
  text-decoration: ${({ styles }) => styles?.textDecoration || 'none'};
  text-transform: ${({ styles }) => styles?.textTransform || 'none'};
  letter-spacing: ${({ styles }) => styles?.letterSpacing || 0};
  line-height: ${({ styles }) => styles?.lineHeight || 1};
  margin: ${({ styles }) => styles?.margin || '0px'};
  padding: ${({ styles }) => styles?.padding || '0px'};
`;
