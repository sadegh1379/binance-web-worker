import { FC } from 'react';
import styles from './button.module.css';
import { ButtonPropTypes } from './types';
import { Link } from 'react-router-dom';

const Button: FC<ButtonPropTypes> = (input) => {
  const { variant, size, children, className, href, to, ...props } = input;

  return href ? (
    <a
      href={href}
      className={`${styles.button} ${styles[size]} ${styles[variant]} ${className ? className : ''}`}
      {...props}
    >
      {children}
    </a>
  ) : to ? (
    <Link
      to={to}
      className={`${styles.button} ${styles[size]} ${styles[variant]} ${className ? className : ''}`}
      {...props}
    >
      {children}
    </Link>
  ) : (
    <button className={`${styles.button} ${styles[size]} ${styles[variant]} ${className ? className : ''}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
