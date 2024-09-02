import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { clsx } from 'clsx';

import styles from './Text.module.css';

type TextSize = 's' | 'm' | 'l';
interface TextProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
	size?: TextSize;
}

export const Text = ({ size = 'm', className, children, ...props }: TextProps) => {
	return (
		<p className={clsx(styles.text, styles[size], className)} {...props}>
			{children}
		</p>
	);
};
