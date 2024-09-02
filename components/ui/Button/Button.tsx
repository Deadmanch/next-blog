import { ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
	return (
		<button ref={ref} className={styles.button} {...props}>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
