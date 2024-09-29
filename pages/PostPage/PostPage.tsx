import Image from 'next/image';

import { IComment, IPost } from '@/interfaces';
import { LikeCounter, PostTag, Title, Text, LikeButton, Comment, CommentForm } from '@/components';
import PostImage from '@/public/assets/images/post-img.png';

import styles from './PostPage.module.css';

interface Props {
	items: IPost;
	comments?: IComment[];
}

export default function PostPage({ items, comments }: Props) {
	return (
		<article>
			<Title className={styles.title}>{items.title}</Title>
			<div className={styles.info}>
				<PostTag tag='JavaScript' />
				<time className={styles.time}>1 месяц назад</time>
				<time className={styles.time}>3 минуты</time>
				<LikeCounter numberLikes={10} />
			</div>
			<div className={styles.content}>
				<Image className={styles.image} src={PostImage} alt={items.title} />
				<Text size='l' className={styles.text}>
					{items.body}
				</Text>
				<div className={styles.likeSection}>
					<Text size='l'>Понравилось? Жми</Text>
					<LikeButton postId={items.id} />
				</div>
				<div>
					<Title tag='h2'>Комментарии</Title>
					{comments && comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
				</div>

				<CommentForm postId={items.id} />
			</div>
		</article>
	);
}
