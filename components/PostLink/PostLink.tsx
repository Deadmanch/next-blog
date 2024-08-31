import { AnchorHTMLAttributes } from 'react';

import Link from 'next/link';

import ArrowIcon from '@/public/assets/icons/arrow.svg';

import styles from './PostLink.module.css';

interface PostLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	hasIcon?: boolean;
	href: string;
}

export const PostLink = ({ hasIcon = true, href, children, ...props }: PostLinkProps) => {
	return (
		<Link href={href} className={styles.link} {...props}>
			{children}
			{hasIcon && <ArrowIcon />}
		</Link>
	);
};
