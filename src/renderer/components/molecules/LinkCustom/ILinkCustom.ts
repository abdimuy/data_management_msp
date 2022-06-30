export interface ILinkCustomProps {
  children: React.ReactNode;
  to: string;
  key?: string | number;
  styles?: ILinkCustomStyles;
  className?: string;
}

interface ILinkCustomStyles {
  color?: string;
  colorHover?: string;
  fontSize?: string;
  fontWeight?: string;
  textDecoration?: string;
  textTransform?: string;
  textAlign?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textShadow?: string;
  textOverflow?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  borderColor?: string;
  borderColorHover?: string;
  borderRadius?: string;
  borderWidth?: string;
  paddingVertical?: string;
  paddingHorizontal?: string;
  marginVertical?: string;
  marginHorizontal?: string;
  transition?: string;
}
