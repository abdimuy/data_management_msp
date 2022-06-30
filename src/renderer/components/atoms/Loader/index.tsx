import { ILoader } from './ILoader';
import styles from './styles';
import styled from 'styled-components';
import { Container } from '..';

const Loader = ({ className, isLoading }: ILoader) => {
  if (isLoading) {
    return (
      <Container
        height="-webkit-fill-available"
        width="-webkit-fill-available"
        backgroundColor="transparent"
        justifyContent="center"
        alignItems="center"
      >
        <span className={className}></span>;
      </Container>
    );
  }
  return null;
};

export default styled(Loader)`
  ${styles}
`;
