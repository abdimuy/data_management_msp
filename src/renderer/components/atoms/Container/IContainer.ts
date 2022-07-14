export interface IContainerStyles {
  backgroundColor?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  paddingVertical?: string;
  paddingHorizontal?: string;
  marginVertical?: string;
  marginHorizontal?: string;
  margin?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  width?: number | string | 'auto' | '-webkit-fill-available';
  minWidth?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  gap?: string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'overlay';
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'overlay';
  overflowY?: 'visible' | 'hidden' | 'scroll' | 'overlay';
  boxShadow?: string;
}

export interface IContainerProps {
  children: React.ReactNode;
  styles?: IContainerStyles;
  className?: string;
  onClick?: () => void;
}
