import React from 'react';

import { Container, PostsGroupList } from '@/components';
import { postCards } from '@/mock';

import styles from './page.module.css';

export default function Home() {
	return (
		<Container className={styles.container}>
			<PostsGroupList items={postCards} />
		</Container>
	);
}
