import { HTMLAttributes } from 'react';

import { clsx } from 'clsx';
import Image from 'next/image';

import PostImage from '@/public/assets/images/post-img.png';
import { LikeCounter, PostLink, Text, Title } from '@/components';

import { PostTag } from '../PostTag/PostTag';

import styles from './PostCard.module.css';

interface PostCardProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	description?: string;
	tag?: string;
	likesNumber?: number;
}

export const PostCard = ({ title, description, tag, likesNumber, className }: PostCardProps) => {
	return (
		<article className={clsx(styles.postCard, className)}>
			<Image className={styles.image} src={PostImage} alt={title} />
			<div className={styles.container}>
				<div className={styles.info}>
					{tag && <PostTag tag={tag} />}
					<time className={styles.time}>1 месяц назад</time>
				</div>
				<LikeCounter numberLikes={likesNumber} />
			</div>
			<Title tag='h3' className={styles.title}>
				{title}
			</Title>
			{description && (
				<Text size='s' className={styles.description}>
					{description}
				</Text>
			)}
			<div className={styles.footer}>
				<time className={styles.time}>3 минуты</time>
				<PostLink href='#'>Читать</PostLink>
			</div>
		</article>
	);
};
