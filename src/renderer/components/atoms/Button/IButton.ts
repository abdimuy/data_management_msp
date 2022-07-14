import React from 'react';
import { IContainerStyles } from '../Container/IContainer';

export interface ButtonParams {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export type ButtonProps = ButtonParams & IContainerStyles;
