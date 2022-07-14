import { IContainerProps, IContainerStyles } from './IContainer';
import { stylesContainer } from './styles';
import styled from 'styled-components';

type ContainerProps = IContainerProps & IContainerStyles;

const Container = (Props: ContainerProps) => {
  const { children, className, onClick } = Props;
  return (
    <div onClick={onClick} className={className}>
      {children}
    </div>
  );
};

const StyledContainer = styled(Container)`
  ${stylesContainer}
`;

export default StyledContainer;
