import { FC } from 'react';
import styles from './button.module.css';
import { ButtonPropTypes } from './types';

const Button: FC<ButtonPropTypes> = (input) => {
  const { variant, size, children, className, ...props } = input;

  return (
    <button className={`${styles.button} ${styles[size]} ${styles[variant]} ${className ? className : ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
