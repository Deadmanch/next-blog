import { clsx } from 'clsx';

import styles from './Container.module.css';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = ({ className, children, ...props }: ContainerProps) => {
	return (
		<div className={clsx(styles.container, className)} {...props}>
			{children}
		</div>
	);
};
