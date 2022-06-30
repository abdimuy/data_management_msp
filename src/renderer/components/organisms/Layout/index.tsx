import stylesLayout, { IStyledLayout } from './styles';
import styled from 'styled-components';
import { Navbar } from '../../organisms';
import { PRIMARY_BACKGROUND_COLOR } from '../../../../contants';
import { Container } from 'renderer/components/atoms';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

type LayoutProps = IProps & IStyledLayout;

const Layout = ({ className, children }: LayoutProps) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: PRIMARY_BACKGROUND_COLOR,
        gap: 10,
      }}
    >
      <Navbar />
      <Container
        width="100%"
        margin="10px 0 0 0"
        backgroundColor={PRIMARY_BACKGROUND_COLOR}
      >
        {children}
      </Container>
    </div>
  );
};

const LayoutStyled = styled(Layout)`
  ${stylesLayout}
`;

export default LayoutStyled;
