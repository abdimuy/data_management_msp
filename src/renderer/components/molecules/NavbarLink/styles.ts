import { css } from 'styled-components';
import { INavbarLinkStyles } from './INavbarLink';
import { PRIMARY_FONT_COLOR, SECONDARY_BACKGROUND_COLOR } from 'contants';

export const NavbarLinkStyles = css<INavbarLinkStyles>`
  color: ${({ color = PRIMARY_FONT_COLOR }) => color};
  background-color: ${({ backgroundColor = SECONDARY_BACKGROUND_COLOR }) =>
    backgroundColor};
  border-color: ${({ borderColor = 'transparent' }) => borderColor};
  border-radius: ${({ borderRadius = '0px' }) => borderRadius};
  border-width: ${({ borderWidth = '1px' }) => borderWidth};
  padding-top: ${({ paddingVertical = '3px' }) => paddingVertical};
  padding-bottom: ${({ paddingVertical = '3px' }) => paddingVertical};
  padding-left: ${({ paddingHorizontal = '5px' }) => paddingHorizontal};
  padding-right: ${({ paddingHorizontal = '5px' }) => paddingHorizontal};
  margin-top: ${({ marginVertical = '0px' }) => marginVertical};
  margin-bottom: ${({ marginVertical = '0px' }) => marginVertical};
  margin-left: ${({ marginHorizontal = '0px' }) => marginHorizontal};
  margin-right: ${({ marginHorizontal = '0px' }) => marginHorizontal};
  font-size: ${({ fontSize = '12px' }) => fontSize};
  font-weight: ${({ fontWeight = 'normal' }) => fontWeight};
  font-style: ${({ fontStyle = 'normal' }) => fontStyle};
  font-family: ${({ fontFamily = 'inherit' }) => fontFamily};
  justify-content: ${({ justifyContent = 'flex-start' }) => justifyContent};
  align-items: ${({ alignItems = 'center' }) => alignItems};
`;
