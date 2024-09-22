'use client';
import { useContext } from 'react';

import Link from 'next/link';
import { clsx } from 'clsx';
import Image from 'next/image';

import Logo from '@/public/assets/images/logo.svg';
import { GitLogoContext } from '@/context/git-logo.context';

import styles from './Header.module.css';

interface HeaderProps {
	classNames?: string;
}
export const Header = ({ classNames }: HeaderProps) => {
	const GitLogoData = useContext(GitLogoContext);
	return (
		<header className={clsx(styles.header, classNames)}>
			<Link href='/' className={styles.logo}>
				<Logo className={styles.logoImage} />
			</Link>
			<Link href={GitLogoData.link} target='_blank'>
				<Image src={GitLogoData.logo} alt={GitLogoData.alt} width={24} height={24} />
			</Link>
		</header>
	);
};
