import { ChangeEventHandler } from 'react';
import { IContainerStyles } from '../Container/IContainer';

export interface IParamsInput {
  value?: string | number;
  onChange?: (e: any) => void;
  onKeyDown?: (e: any) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  name?: string;
  className?: string;
}

export type IPropsInput = IParamsInput & IContainerStyles;
