export interface ITextStyles {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  textDecoration?: string;
  textTransform?: string;
  letterSpacing?: number;
  lineHeight?: number;
  margin?: string;
  padding?: string;
}

export interface ITextProps {
  children: string;
  styles?: ITextStyles;
  className?: string;
}
