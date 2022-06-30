import { LinkCustom } from '..';
import { INavbarLinkProps } from './INavbarLink';
import styled from 'styled-components';
import { NavbarLinkStyles } from './styles';
import { PRIMARY_COLOR, THIRD_FONT_COLOR } from 'contants';

const NavbarLink = (props: INavbarLinkProps) => {
  const { to, text, className } = props;
  return (
    <LinkCustom
      className={className}
      to={to}
      styles={{
        backgroundColorHover: PRIMARY_COLOR + '22',
        colorHover: THIRD_FONT_COLOR,
        borderRadius: '8px',
        paddingVertical: '8px',
        paddingHorizontal: '16px',
      }}
    >
      {text}
    </LinkCustom>
  );
};

styled(NavbarLink)`
  ${NavbarLinkStyles}
`;

export default NavbarLink;
