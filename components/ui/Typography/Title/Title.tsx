import { HTMLAttributes } from 'react';

import { clsx } from 'clsx';

import styles from './Title.module.css';

type TitleTag = 'h1' | 'h2' | 'h3';

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
	tag?: TitleTag;
}

export const Title = ({ tag = 'h1', className, children, ...props }: TitleProps) => {
	const Tag = tag;

	return (
		<Tag className={clsx(styles.title, styles[tag], className)} {...props}>
			{children}
		</Tag>
	);
};
