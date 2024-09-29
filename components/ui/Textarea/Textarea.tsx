import { forwardRef } from 'react';

import { FieldError } from 'react-hook-form';
import { clsx } from 'clsx';

import styles from './Textarea.module.css';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	error?: FieldError;
	required?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ label, error, required, ...props }, ref) => {
		return (
			<div className={styles.textarea}>
				{label && (
					<label htmlFor={props.id} className={styles.label}>
						{label}
						{required && <span className={styles.required}>*</span>}
					</label>
				)}
				<textarea
					ref={ref}
					{...props}
					className={clsx(styles.textareaField, {
						[styles.textareaFieldError]: error
					})}
				/>
				{error && <p className={styles.error}>{error.message}</p>}
			</div>
		);
	}
);

Textarea.displayName = 'Textarea';
