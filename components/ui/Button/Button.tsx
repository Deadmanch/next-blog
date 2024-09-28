import { ButtonHTMLAttributes, forwardRef } from 'react';

import { clsx } from 'clsx';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, className, ...props }, ref) => {
		return (
			<button ref={ref} className={clsx(styles.button, className)} {...props}>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';
