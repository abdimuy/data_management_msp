import { Container, Image } from '../../atoms';
import logo_snpblo from '../../../../assets/images/muebleria_logo.png';
import { SECONDARY_BACKGROUND_COLOR } from 'contants';
import { NavbarLink } from 'renderer/components/molecules';

const Navbar = () => {
  return (
    <Container
      flexDirection="column"
      width="250px"
      height="-webkit-fill-available"
      backgroundColor={SECONDARY_BACKGROUND_COLOR}
      paddingHorizontal="10px"
      paddingVertical="10px"
      // justifyContent="center"
      // alignItems="center"
      gap="5px"
    >
      <Container justifyContent="center" paddingVertical="15px">
        <Image alt="logo" src={logo_snpblo} styles={{ width: '200px' }} />
      </Container>
      <NavbarLink text="Inicio" to="/" />
      <NavbarLink text="Clientes" to="/clients" />
      <NavbarLink text="Reportes" to="/reportes" />
    </Container>
  );
};

export default Navbar;
