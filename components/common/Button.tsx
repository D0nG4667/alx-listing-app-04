import { FC, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  label,
  children,
  className,
  disabled,
  ...props
}) => {
  const classes = clsx(
    'transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    // ✅ Variants mapped to flattened tokens
    variant === 'primary' && 'bg-primary text-primary-foreground hover:opacity-90',
    variant === 'secondary' && 'bg-accent text-white-foreground hover:opacity-90',
    variant === 'tertiary' && 'bg-dark text-white-foreground hover:opacity-90',
    // ✅ Sizes
    size === 'sm' && 'px-4 py-1.5 text-sm',
    size === 'md' && 'px-5 py-2 text-base',
    size === 'lg' && 'px-6 py-3 text-lg',
    className,
  );

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children || label}
    </button>
  );
};

export default Button;
