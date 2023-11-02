import React from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

type ButtonVariant = 'primary' | 'secondary' ;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {

  return (
    <button className={cx(styles.button, styles[variant])} {...props}>
      {children}
    </button>
  );
};

export default Button;
