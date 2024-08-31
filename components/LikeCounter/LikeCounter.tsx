import LikeIcon from '@/public/assets/icons/like.svg';

import styles from './LikeCounter.module.css';

interface LikeCounterProps {
	numberLikes?: number;
}

export const LikeCounter = ({ numberLikes = 0 }: LikeCounterProps) => {
	return (
		<span className={styles.likeCounter}>
			{numberLikes}
			<LikeIcon />
		</span>
	);
};
