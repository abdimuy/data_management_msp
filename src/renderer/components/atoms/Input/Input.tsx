import { IPropsInput } from './IInput';

const Input = ({
  value,
  className,
  onChange,
  disabled,
  name,
  placeholder,
  type,
  onKeyDown,
}: IPropsInput) => {
  return (
    <input
      value={value}
      className={className}
      onChange={onChange}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      type={type}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
