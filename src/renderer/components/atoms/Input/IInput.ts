export interface IPropsInput {
  value: string | number;
  onChange: (value: string | number) => void;
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
