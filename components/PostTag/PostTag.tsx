import { Text } from '@/components';

import styles from './PostTag.module.css';

interface PostTagProps {
	tag: string;
}

export const PostTag = ({ tag }: PostTagProps) => {
	return (
		<Text size='s' className={styles.tag}>
			{tag}
		</Text>
	);
};
