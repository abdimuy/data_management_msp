import { Link } from 'react-router-dom';
import { ILinkCustomProps } from './ILinkCustom';
import { stylesLink } from './styles';
import styled from 'styled-components';

const LinkCustom = ({ children, to, key, className }: ILinkCustomProps) => {
  return (
    <Link to={to} key={key} className={className}>
      {children}
    </Link>
  );
};

const StyledLinkCustom = styled(LinkCustom)`
  ${stylesLink}
`;

export default StyledLinkCustom;
