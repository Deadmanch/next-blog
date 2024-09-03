'use client';

import { useState } from 'react';

import { clsx } from 'clsx';

import LikeIcon from '@/public/assets/icons/like-big.svg';
import { setLike } from '@/api/setLike';

import styles from './LikeButton.module.css';

interface LikeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	postId: number;
}
export const LikeButton = ({ className, postId, ...props }: LikeButtonProps) => {
	const [liked, setLiked] = useState(false);

	const handleLikeClick = async () => {
		try {
			await setLike(postId);
			setLiked(!liked);
		} catch (error) {
			console.error('[Failed to set like]', error);
		}
	};

	return (
		<button {...props} className={clsx(styles.likeButton, className)} onClick={handleLikeClick}>
			<LikeIcon className={clsx(styles.likeIcon, { [styles.liked]: liked })} />
		</button>
	);
};
