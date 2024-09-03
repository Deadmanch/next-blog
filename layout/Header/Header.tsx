import Link from 'next/link';
import { clsx } from 'clsx';

import Logo from '@/public/assets/images/logo.svg';
import GithubLogo from '@/public/assets/icons/github.svg';

import styles from './Header.module.css';

interface HeaderProps {
	classNames?: string;
}
export const Header = ({ classNames }: HeaderProps) => {
	return (
		<header className={clsx(styles.header, classNames)}>
			<Link href='/' className={styles.logo}>
				<Logo className={styles.logoImage} />
			</Link>
			<Link href='https://github.com/Deadmanch/next-blog' target='_blank'>
				<GithubLogo className={styles.githubLogo} />
			</Link>
		</header>
	);
};
