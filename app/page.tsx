import React from 'react';

import { PostCard } from '@/components';
import { postCard } from '@/mock';

export default function Home() {
	return (
		<div>
			<PostCard
				title={postCard.title}
				tag={postCard.tag}
				description={postCard.description}
				likesNumber={postCard.likesNumber}
			/>
		</div>
	);
}
