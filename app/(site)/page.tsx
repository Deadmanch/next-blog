import React from 'react';

import { Container, PostsGroupList } from '@/components';
import { getPosts } from '@/api/getPosts';
import { IPost } from '@/interfaces';

import styles from './page.module.css';

export default async function Home() {
	const postCards: IPost[] = await getPosts();
	return (
		<main>
			<Container className={styles.container}>
				{postCards && <PostsGroupList items={postCards} />}
			</Container>
		</main>
	);
}
