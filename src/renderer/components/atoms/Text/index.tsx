import { ITextProps } from './IText';
import styled from 'styled-components';
import { textStyles } from './styles';

const Text = (props: ITextProps) => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

const TextStyled = styled(Text)`
  ${textStyles}
`;

export default TextStyled;
