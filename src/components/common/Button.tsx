import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

function Button({ children, type = 'button', onClick }: ButtonProps) {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
