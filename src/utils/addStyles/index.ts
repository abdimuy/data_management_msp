import styled from 'styled-components';
import { IAddStyles } from './IAddStyles';

const styledComponent = ({ component, styles }: IAddStyles) => {
  return styled(component)`
    ${styles}
  `;
};

export default styledComponent;
