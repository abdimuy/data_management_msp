import { ButtonProps } from './IButton';

const Button = ({
  className,
  children = '',
  onClick = () => {},
}: ButtonProps) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
