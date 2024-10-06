import { forwardRef } from 'react';

import { FieldError } from 'react-hook-form';
import { clsx } from 'clsx';

import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: FieldError;
	required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ label, error, required, ...props }, ref) => {
		return (
			<div className={styles.input}>
				{label && (
					<label htmlFor={props.id} className={styles.label}>
						{label}
						{required && (
							<span aria-label='Обязательное поле' className={styles.required}>
								*
							</span>
						)}
					</label>
				)}
				<input
					ref={ref}
					{...props}
					className={clsx(styles.inputField, {
						[styles.inputFieldError]: error
					})}
				/>
				{error && <p className={styles.error}>{error.message}</p>}
			</div>
		);
	}
);

Input.displayName = 'Input';
