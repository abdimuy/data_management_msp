export interface INavbarLinkProps {
  text: string;
  to: string;
  styles?: INavbarLinkStyles;
  className?: string;
}

export interface INavbarLinkStyles {
  color?: string;
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
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  fontFamily?: string;
  justifyContent?: string;
  alignItems?: string;
}
