import { css } from 'styled-components';
import { PRIMARY_BACKGROUND_COLOR } from '../../../../contants';

export interface IStyledLayout {
  backgroundColor?: string;
}

const stylesLayout = css<IStyledLayout>`
  background-color: ${({ backgroundColor = PRIMARY_BACKGROUND_COLOR }) =>
    backgroundColor};
  width: 100%;
  height: 100%;
`;

export default stylesLayout;
