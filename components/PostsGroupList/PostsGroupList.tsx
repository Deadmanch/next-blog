import { IPost } from '@/interfaces';

import { PostCard } from '../PostCard';

import styles from './PostsGroupList.module.css';

interface PostsGroupListProps {
	items: IPost[];
}

export const PostsGroupList = ({ items }: PostsGroupListProps) => {
	return (
		<div className={styles.postsGroupList}>
			{items.map((item) => (
				<PostCard key={item.id} items={item} />
			))}
		</div>
	);
};
