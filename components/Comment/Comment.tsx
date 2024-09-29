import { HTMLAttributes } from 'react';

import { IComment } from '@/interfaces';
import { Text } from '@/components';

import styles from './Comment.module.css';

interface CommentProps extends HTMLAttributes<HTMLDivElement> {
	comment: IComment;
}

export function Comment({ comment }: CommentProps) {
	return (
		<div className={styles.comment}>
			<div className={styles.header}>
				<Text size='s' className={styles.name}>
					{comment.name}
				</Text>
				<Text size='s' className={styles.email}>
					{comment.email}
				</Text>
			</div>
			<Text className={styles.body}>{comment.body}</Text>
		</div>
	);
}
