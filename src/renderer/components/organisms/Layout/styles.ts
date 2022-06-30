import { css } from 'styled-components';
import { BACKGROUND_COLOR } from 'contants';

export interface IStyledLayout {
  backgroundColor?: string;
}

const stylesLayout = css<IStyledLayout>`
  background-color: ${({ backgroundColor = BACKGROUND_COLOR }) =>
    backgroundColor};
  width: 100%;
  height: 100%;
`;

export default stylesLayout;
