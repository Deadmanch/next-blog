import { PostCard, PostCardProps } from '../PostCard';

import styles from './PostsGroupList.module.css';

interface PostsGroupListProps {
	items: PostCardProps[];
}

export const PostsGroupList = ({ items }: PostsGroupListProps) => {
	return (
		<div className={styles.postsGroupList}>
			{items.map((item) => (
				<PostCard
					key={item.title}
					title={item.title}
					description={item.description}
					tag={item.tag}
					likesNumber={item.likesNumber}
				/>
			))}
		</div>
	);
};
