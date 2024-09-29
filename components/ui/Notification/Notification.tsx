import { clsx } from 'clsx';

import IconClose from '@/public/assets/icons/close.svg';

import styles from './Notification.module.css';

type NotificationType = 'success' | 'error';

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
	type: NotificationType;
	message: string;
	onClick?: () => void;
}

export const Notification = ({
	type,
	message,
	className,
	onClick,
	...props
}: NotificationProps) => {
	return (
		<div className={clsx(styles.notification, styles[type], className)} {...props}>
			{message}
			<IconClose className={styles.close} onClick={onClick} />
		</div>
	);
};
