'use client';
import { HTMLAttributes } from 'react';

import { clsx } from 'clsx';
import Image from 'next/image';
import { m, useReducedMotion } from 'framer-motion';

import PostImage from '@/public/assets/images/post-img.png';
import { LikeCounter, PostLink, Text, Title, PostTag } from '@/components';
import { IPost } from '@/interfaces';

import styles from './PostCard.module.css';

export interface PostCardProps extends HTMLAttributes<HTMLDivElement> {
	items: IPost;
	index: number;
}

export const PostCard = ({ items, className, index }: PostCardProps) => {
	const shouldReduceMotion = useReducedMotion();
	const variants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 }
	};
	const animationProps = shouldReduceMotion
		? {}
		: {
				variants: variants,
				initial: 'hidden',
				animate: 'visible',
				transition: { delay: index * 0.25, ease: 'easeInOut', duration: 0.6 }
			};

	return (
		<m.article {...animationProps} className={clsx(styles.postCard, className)}>
			<Image className={styles.image} src={PostImage} alt={items.title} />
			<div className={styles.container}>
				<div className={styles.info}>
					<PostTag tag='JavaScript' />
					<time className={styles.time}>1 месяц назад</time>
				</div>
				<LikeCounter numberLikes={10} />
			</div>
			<Title tag='h3' className={styles.title}>
				{items.title}
			</Title>
			{items.body && (
				<Text size='s' className={styles.description}>
					{items.body}
				</Text>
			)}
			<div className={styles.footer}>
				<time className={styles.time}>3 минуты</time>
				<PostLink href={items.id.toString()}>Читать</PostLink>
			</div>
		</m.article>
	);
};
