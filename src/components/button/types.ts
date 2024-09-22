import { ReactNode } from 'react';

interface ButtonPropTypes {
  className?: string;
  id?: string;
  variant: 'primary' | 'outline' | 'secondary';
  size: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: { preventDefault(): void; target: unknown }) => void;
  children?: ReactNode;
}

export type { ButtonPropTypes };
